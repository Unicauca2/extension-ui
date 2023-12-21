"use client";

import { useState } from "react";
import Papa, { ParseResult } from "papaparse";
import { CSVLink } from "react-csv";
import { Button } from "@mui/material";
import { record } from "../services/academicOfferService";
import { useAppContext } from "@/app/context/AppContext";

interface CSVRow {
  CODESTUDIANTE: string;
  CODMATERIA: string;
  LABELMATERIA: string;
  rowSpan: number;
}

const FileUploader: React.FC = () => {
  const [csvData, setCsvData] = useState<ParseResult<CSVRow>>({
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

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      Papa.parse<CSVRow>(file, {
        complete: (result) => {
          const data = result.data.slice(0);
          setCsvData(result);

          const processedTableData = processTableData(data);
          setTableData(processedTableData);
        },
        header: true,
      });
    }
  };

  const processTableData = (data: CSVRow[]): CSVRow[] => {
    return data.map((row, index) => {
      let rowSpan = 1;
      let auxIndex = index;
      while (data[auxIndex + 1] && data[auxIndex + 1].CODESTUDIANTE === "") {
        rowSpan++;
        auxIndex++;
      }
      return {
        ...row,
        id: index + 1,
        rowSpan,
      };
    });
  };

  const { program } = useAppContext();
  const handleDefineAcademicOffer = async () => {
    if (!program) return;
    let auxStudent = "";
    const data = csvData.data.map((row) => {
      if (row.CODESTUDIANTE !== "" && row.CODESTUDIANTE !== auxStudent) {
        auxStudent = row.CODESTUDIANTE;
      }
      return {
        codStudent: auxStudent,
        codAssignature: row.CODMATERIA,
      };
    });
    const result = await record({
      data,
      recordUrl: program.uploadAcademicOfferURL,
      programId: program.id,
    });
    console.log(result);
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {csvData.data.length > 0 && (
        <>
          <CSVLink data={csvData.data} filename="data.csv">
            Descargar CSV
          </CSVLink>
          <Button onClick={handleDefineAcademicOffer}> Cositas </Button>
          <div className="mx-8">
            <table className="w-full">
              <thead className="border-4">
                <tr>
                  <th>ID</th>
                  <th>CODESTUDIANTE</th>
                  <th>CODMATERIA</th>
                  <th>LABELMATERIA</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {tableData.map((row, index) => (
                  <tr key={index + 1} className="border-2">
                    <td>{index + 1}</td>
                    {row.CODESTUDIANTE && (
                      <td rowSpan={row.rowSpan} className="border-2">
                        {row.CODESTUDIANTE}
                      </td>
                    )}
                    <td>{row.CODMATERIA}</td>
                    <td>{row.LABELMATERIA}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default FileUploader;
