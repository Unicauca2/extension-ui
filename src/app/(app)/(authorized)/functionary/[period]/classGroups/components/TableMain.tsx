"use client";

import { Button } from "@mui/material";
import { ParseResult } from "papaparse";
import { useState } from "react";
import {
  handleDefineAcademicOffer,
  handleFileUpload,
} from "../services/CSVUploaderFunctions";
import DinamycInputItems from "./DinamycInputItems";
import DynamicSelectItems from "./DynamicSelectItems";

interface CSVRow {
  code: string;
  quota: string;
  teacher: string;
  assignatureLabel: string;
  section: string;
  semester: string;
  assignature: number;
  idStudents: number[];
}
interface CSVRawData {
  CODIGO: string;
  CUPO: string;
  DOCENTE: string;
  MATERIA: string;
  SECCION: string;
  SEMESTRE: string;
}

interface ITableMain {
  students: { id: number; code: string }[];
  assignatures: { id: number; label: string; semester: string; code: string }[];
}
export default function TableMain({ students, assignatures }: ITableMain) {
  const [csvData, setCsvData] = useState<ParseResult<CSVRawData>>({
    data: [],
    errors: [],
    meta: {
      delimiter: "",
      linebreak: "",
      aborted: false,
      truncated: false,
      cursor: 0,
    },
  });
  const [tableData, setTableData] = useState<CSVRow[]>([]);

  const handleSelectItemsChange = (value: number, index: number) => {
    setTableData((prevData) => {
      const newData = [...prevData];
      newData[index].assignature = value;
      return newData;
    });
  };

  const handleInputItemsChange = (value: number[], index: number) => {
    setTableData((prevData) => {
      const newData = [...prevData];
      newData[index].idStudents = value;
      return newData;
    });
  };

  const handleRemoveItem = (index: number) => {
    setTableData((prevData) => {
      const newData = [...prevData];
      newData[index].idStudents.splice(index, 1);
      return newData;
    });
  };

  console.log(tableData);

  return (
    <div>
      <div className="flex justify-center mt-10">
        <input
          type="file"
          accept=".csv"
          onChange={(event) =>
            handleFileUpload({ event, setCsvData, setTableData })
          }
        />
      </div>

      {csvData.data.length > 0 && (
        <>
          <div className="flex justify-center ">
            <Button
              variant="outlined"
              className="my-4 text-[#ffffff] bg-[#092167] hover:text-[#092167]"
              onClick={() =>
                handleDefineAcademicOffer({
                  params: {
                    classroom: 0,
                    period: 204,
                    program: 10,
                    state: 2,
                    user: "inesguerrero",
                  },
                  tableData,
                })
              }
            >
              Subir Creación de Grupos
            </Button>
          </div>
          <div className="mx-8">
            <table className="w-full">
              <thead className="border-4">
                <tr>
                  <th>ID</th>
                  <th>CODIGO</th>
                  <th>CUPO</th>
                  <th>PROFESOR</th>
                  <th>MATERIA</th>
                  <th>SECCION</th>
                  <th>SEMESTRE</th>
                  <th>MATERIA</th>
                  <th>ESTUDIANTES</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {tableData.map((row, index) => (
                  <tr key={index + 1} className="border-2">
                    <td>{index + 1}</td>
                    <td>{row.code}</td>
                    <td>{row.quota}</td>
                    <td>{row.teacher}</td>
                    <td>{row.assignatureLabel}</td>
                    <td>{row.section}</td>
                    <td>{row.semester}</td>
                    <td>
                      <DynamicSelectItems
                        assignatures={assignatures.filter(
                          (aux) => +aux.semester === +row.semester
                        )}
                        index={index}
                        handleChange={handleSelectItemsChange}
                      />
                    </td>
                    <td>
                      <DinamycInputItems
                        maxItems={+row.quota}
                        placeholder="Ingrese los codigos de estudiante"
                        index={index}
                        handleChange={handleInputItemsChange}
                        handleRemoveItem={handleRemoveItem}
                        students={students}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
