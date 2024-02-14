"use client";

import { useAppContext } from "@/app/context/AppContext";
import DataGridDemo, { IRows } from "@/components/DataGrid";
import FileRendered from "@/components/FileRendered";
import { ApiResponse } from "@/models/PROVISIONALEnrollmentFetch";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

import {
  getEnrollmentList,
  postEnrollmentAcceptation,
} from "./services/enrollmentService";

export default function ApplicantList() {
  const { program, appParams } = useAppContext();

  const [cellSelected, setCellSelected] = useState<any>(null);
  const [rawData, setRawData] = useState<ApiResponse | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [postResult, setPostResult] = useState<boolean>();

  useEffect(() => {
    const setData = async () => {
      const aux = await getEnrollmentList({
        idPeriod: appParams?.idPeriod as number,
        idProgram: program?.id as number,
      });
      setRawData(aux.result);
    };
    setData();
  }, [program?.id, appParams?.idPeriod]);

  useEffect(() => {
    if (postResult) redirect("/functionary");
  }, [postResult]);

  useEffect(() => {
    async function getfile() {
      const response = await fetch(
        "/api/file?fileName=" + cellSelected.document
      );
      if (!response.ok) return setFile(null);
      const data = await response.blob();
      const file = new File([data], cellSelected?.document, {
        type: data.type,
      });
      setFile(file);
    }
    if (cellSelected !== null) getfile();
  }, [cellSelected]);

  const handleCellClick = (cell: any) => {
    if (cell !== null) setCellSelected(cell);
  };

  const handleSubmit = async (data: IRows) => {
    const result = await postEnrollmentAcceptation({
      reviewedEnrollments: data.map((item) => {
        return { id: item.id, state: item.state };
      }),
      invoicesData: {
        paymentLimit: appParams?.payDayLimit as string,
        idPeriod: appParams?.idPeriod as number,
        idProgram: program?.id as number,
      },
    });
    if (result.success) {
      alert("REVISION SUBIDA");
      setPostResult(true);
    } else {
      alert("Ocurrio un error " + result.result);
    }
  };

  if (rawData !== null)
    return (
      <div className="flex">
        <div>
          <DataGridDemo
            onCellClick={handleCellClick}
            rawData={rawData}
            handleSubmit={handleSubmit}
          />
        </div>
        {cellSelected && file && (
          <div className="border mx-auto w-full">
            <FileRendered
              src={URL.createObjectURL(file as File)}
              type={file?.type as string}
            />
          </div>
        )}
      </div>
    );
  return <></>;
}
