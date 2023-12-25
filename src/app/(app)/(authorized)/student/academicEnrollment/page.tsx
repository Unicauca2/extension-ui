"use client";

import { useAppContext } from "@/app/context/AppContext";
import GlobalIcon from "@/components/GlobalIcon";
import { Box, Button, List } from "@mui/material";
import { useSession } from "next-auth/react";
import {
  acceptPreEnrollment,
  getPreEnrollment,
} from "../services/studentService";
import { useEffect, useState } from "react";

type PreEnrollment = {
  success: boolean;
  response: {
    result: {
      asignatures: [
        {
          id: number;
          label: string;
        }
      ];
    };
  };
};
export default function AcademicEnrollment() {
  const { data } = useSession() as unknown as {
    data: { user: { students: [{ id: number; program: number }] } };
  };
  const { program } = useAppContext();
  const [idStudent, setIdStudent] = useState<number>(0);
  const [preEnrollment, setPreEnrollment] = useState<
    PreEnrollment | undefined
  >();

  useEffect(() => {
    setIdStudent(
      data?.user?.students?.filter(
        (student: { program: number }) => student.program === program?.id
      )[0].id
    );
  }, [data, program]);

  useEffect(() => {
    async function getData() {
      const response = await getPreEnrollment(idStudent);
      console.log(response);
      setPreEnrollment(response as PreEnrollment);
    }
    getData();
  }, [idStudent]);

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
              {preEnrollment?.response?.result?.asignatures.map(
                (asignature: { id: number; label: string }, index) => (
                  <ul key={index} className="border-b-2 font-bold">
                    - {asignature.label}
                  </ul>
                )
              )}
            </div>
          </div>
          <div className="w-full px-4 mt-10">
            <Button
              onClick={async () => {
                const aux = await acceptPreEnrollment(idStudent);
                if (!aux) {
                  alert("Error al aceptar la matrícula");
                } else {
                  alert("Matrícula aceptada");
                }
              }}
              endIcon={<GlobalIcon nameIcon="taskIcon" />}
              className="w-full rounded-2xl bg-[#000066] text-[#ffffff] border border-[#F6F6F6] border-solid font-semibold font-sans text-sm py-2 px-4 mb-5 hover:border-b-2 hover:border-[#000066] hover:bg-[#ffffff] hover:text-[#000066]"
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
