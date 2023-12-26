"use client";

import { useAppContext } from "@/app/context/AppContext";
import DataGridDemo, { IRows } from "@/components/DataGrid";
import FileRendered from "@/components/FileRendered";
import { useEffect, useState } from "react";
import {
  getEnrollmentList,
  postEnrollmentAcceptation,
} from "../services/enrollmentService";
import { ApiResponse } from "@/models/PROVISIONALEnrollmentFetch";

interface IGetData {
  idPeriod: number;
  idProgram: number;
}
async function getData({ idPeriod, idProgram }: IGetData) {
  const data = await getEnrollmentList({ idPeriod, idProgram });
  return data;
}
export default function ApplicantList() {
  const [cellSelected, setCellSelected] = useState<any>(null);
  const { program } = useAppContext();
  const [rawData, setRawData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const setData = async () => {
      const aux = await getData({
        idPeriod: 204,
        idProgram: program?.id as number,
      });
      setRawData(aux.result);
    };
    setData();
  }, []);

  const handleCellClick = (cell: any) => {
    if (cell !== null) setCellSelected(cell);
  };

  const handleSubmit = async (data: IRows) => {
    const result = await postEnrollmentAcceptation({
      idPeriod: 204,
      idProgram: program?.id as number,
      enrollmentsReviewed: data.map((item) => {
        return { id: item.id, state: item.state };
      }),
    });
    if (result.success) {
      alert("REVISION SUBIDA");
    } else {
      alert("Ocurrio un error " + result.result);
    }
  };

  if (rawData !== null)
    return (
      <>
        <div className="w-2/3">
          <DataGridDemo
            onCellClick={handleCellClick}
            rawData={rawData}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="w-1/3">
          {cellSelected && <FileRendered src="/app/cedula.jpg" type="jpg" />}
        </div>
      </>
    );
  return <></>;
}
