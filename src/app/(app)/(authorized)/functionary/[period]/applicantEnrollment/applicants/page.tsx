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
  const [file, setFile] = useState<File | null>(null);

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

  useEffect(() => {
    async function getfile() {
      const response = await fetch(
        "http://localhost:8080/api/v1/file/get?fileName=" +
          cellSelected.document
      );
      const data = await response.blob();
      console.log(data);
      const file = new File([data], cellSelected?.document, {
        type: data.type,
      });
      console.log(file);
      setFile(file);
    }
    if (cellSelected !== null) getfile();
  }, [cellSelected]);

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
          {cellSelected && (
            <FileRendered
              src={URL.createObjectURL(file as File)}
              type={file?.type as string}
            />
          )}
        </div>
      </>
    );
  return <></>;
}
