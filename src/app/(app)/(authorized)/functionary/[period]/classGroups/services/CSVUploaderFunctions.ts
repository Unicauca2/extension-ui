import Papa, { ParseResult } from "papaparse";
import { Dispatch, SetStateAction } from "react";
import { record } from "./classGroupService";

interface CSVRawData {
  CODIGO: string;
  CUPO: string;
  DOCENTE: string;
  MATERIA: string;
  SECCION: string;
  SEMESTRE: string;
}

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

const handleDefineAcademicOffer = async ({
  params,
  tableData,
}: {
  params: {
    user: string;
    period: number;
    classroom: number;
    state: number;
    program: number;
  };
  tableData: CSVRow[];
}) => {
  const adapted = tableData.map((row) => {
    return {
      ...params,
      section: row.section,
      quota: +row.quota,
      assignature: +row.assignature,
      idStudents: row.idStudents,
    };
  });
  const result = await record({
    data: adapted,
  });
  if (result.success) alert("Grupos creados");
  else alert(result.message);
};

const handleFileUpload = ({
  event,
  setCsvData,
  setTableData,
}: {
  event: React.ChangeEvent<HTMLInputElement>;
  setCsvData: Dispatch<SetStateAction<ParseResult<CSVRawData>>>;
  setTableData: Dispatch<SetStateAction<CSVRow[]>>;
}) => {
  const file = event.target.files?.[0];
  if (file) {
    Papa.parse<CSVRawData>(file, {
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

const processTableData = (data: CSVRawData[]): CSVRow[] => {
  return data.map((row) => {
    return {
      code: row.CODIGO,
      quota: row.CUPO,
      teacher: row.DOCENTE,
      assignatureLabel: row.MATERIA,
      section: row.SECCION,
      semester: row.SEMESTRE,
      assignature: 0,
      idStudents: [],
    };
  });
};

export { handleDefineAcademicOffer, handleFileUpload };
