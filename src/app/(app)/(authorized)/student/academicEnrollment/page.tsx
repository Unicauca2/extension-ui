"use client";

import { useAppContext } from "@/app/context/AppContext";
import GlobalIcon from "@/components/GlobalIcon";
import { Box, Button } from "@mui/material";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {
  IAcceptPreEnrollment,
  acceptPreEnrollment,
  getPreEnrollment,
} from "../services/studentService";

type PreEnrollment = {
  success: boolean;
  response: {
    result: {
      assignatures: string[];
    };
  };
};

export default function AcademicEnrollment() {
  const { data } = useSession() as unknown as {
    data: {
      user: {
        person: {
          idPerson: number;
        };
        students: [{ id: number; program: number }];
      };
    };
  };
  const { program, appParams } = useAppContext();
  const [objAcceptPreEnrollment, setObjAcceptPreEnrollment] = useState<
    IAcceptPreEnrollment | undefined
  >();
  const [preEnrollment, setPreEnrollment] = useState<
    PreEnrollment | undefined
  >();
  const [correctlyDelivered, setCorrectlyDelivered] = useState(false);

  useEffect(() => {
    setObjAcceptPreEnrollment({
      idProgram: program?.id as number,
      idPeriod: appParams?.idPeriod as number,
      idStudent: data?.user?.students?.filter(
        (student: { program: number }) => student.program === program?.id
      )[0].id,
      idPerson: data?.user?.person?.idPerson,
    });
  }, [data, program]);

  useEffect(() => {
    async function getData() {
      const response = await getPreEnrollment(
        objAcceptPreEnrollment?.idStudent as number,
        appParams?.idPeriod as number
      );
      setPreEnrollment(response as PreEnrollment);
    }
    getData();
  }, [objAcceptPreEnrollment]);

  return (
    <div className="w-full m-4 h-[85vh] min-h-[500px] min-w-[300px] overflow-x-auto mt-4 mb-3 bg-[#ffffff] rounded-bl-3xl rounded-tr-3xl">
      <div className="m-2">
        <p className=" w-full md:w-1/4 py-1 px-3 bg-[#85332A] text-[#ffffff] font-bold font-sans text-base rounded-xl">
          Matrícula Académica
        </p>
      </div>
      <Box className="w-9/10 h-5/6 p-4 flex">
        <div className="w-1/3 flex-1 h-full mr-2 border-[#000066] border-2 rounded-bl-3xl text-center">
          <p className="my-4 p-4 font-bold font-sans text-base text-[#000066]">
            Aquí podras aceptar tu matrícula académica y generar tu recibo de
            pago
          </p>
          <div className="px-10">
            <div className="flex">
              <p className="font-bold ml-2 text-md">Materias asignadas:</p>
            </div>
            <div className="mx-auto">
              {preEnrollment?.response?.result?.assignatures?.map(
                (asignature: string, index: number) => (
                  <ul key={index} className="border-b-2 font-bold">
                    - {asignature}
                  </ul>
                )
              )}
            </div>
          </div>
          <div className="w-full px-4 mt-10">
            <Button
              onClick={async () => {
                const aux = await acceptPreEnrollment(
                  objAcceptPreEnrollment as IAcceptPreEnrollment
                );
                if (!aux.success) {
                  alert("ERROR: " + aux.message);
                } else {
                  setCorrectlyDelivered(true);
                  alert(aux.result.message);
                }
              }}
              disabled={correctlyDelivered}
              endIcon={<GlobalIcon nameIcon="taskIcon" />}
              className={`w-full rounded-2xl ${
                correctlyDelivered ? "bg-[#000066c5]" : "bg-[#000066]"
              } text-[#ffffff] border border-[#F6F6F6] border-solid font-semibold font-sans text-sm py-2 px-4 mb-5 hover:border-b-2 hover:border-[#000066] hover:bg-[#ffffff] hover:text-[#000066]`}
            >
              CONFIRMAR MATRÍCULA
            </Button>
          </div>
        </div>
        <div className="w-2/3 mx-8">
          <table className="w-full">
            <thead className="border-4">
              <tr className="flex">
                <th className="grow">HORA</th>
                <th className="grow">LUNES</th>
                <th className="grow">MARTES</th>
                <th className="grow">MIERCOLES</th>
                <th className="grow">JUEVES</th>
                <th className="grow">VIERNES</th>
              </tr>
            </thead>
            <tbody className="text-center"></tbody>
          </table>
          Sin información sobre horarios
        </div>
      </Box>
    </div>
  );
}
