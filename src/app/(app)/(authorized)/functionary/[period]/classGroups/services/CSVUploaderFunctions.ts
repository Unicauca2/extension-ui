import Papa, { ParseResult } from "papaparse";
import { Dispatch, SetStateAction } from "react";
import { record } from "./classGroupService";
import { CSVRawData, CSVRow } from "../model/TableTypes";
import { redirect } from "next/navigation";

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
  const adapted = adaptData(params, tableData);
  const validate = validateAdaptedData(adapted);
  if (validate) {
    alert("Datos incompletos");
    return;
  }
  const result = await record({
    data: adapted,
  });
  if (result.success) {
    alert("Grupos creados");
    redirect("/functionary");
  } else alert(result.message);
};
const validateAdaptedData = (
  data: { assignature: number; idStudents: number[]; idTeachers: number[] }[]
) => {
  return data.some((row) => {
    if (row.assignature === 0) return true;
    if (row.idStudents.length === 0) return true;
    if (row.idTeachers.length === 0) return true;
    return false;
  });
};
const adaptData = (params: any, data: any) => {
  return data.map((row: any) => {
    return {
      ...params,
      section: row.section,
      quota: +row.quota,
      assignature: +row.assignature,
      idStudents: row.idStudents,
      idTeachers: row.idTeachers,
    };
  });
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
      idTeachers: [],
    };
  });
};

export { handleDefineAcademicOffer, handleFileUpload };
