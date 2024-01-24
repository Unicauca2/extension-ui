export interface CSVRow {
  code: string;
  quota: string;
  teacher: string;
  assignatureLabel: string;
  section: string;
  semester: string;
  assignature: number;
  idStudents: number[];
  idTeachers: number[];
}
export interface CSVRawData {
  CODIGO: string;
  CUPO: string;
  DOCENTE: string;
  MATERIA: string;
  SECCION: string;
  SEMESTRE: string;
}
export interface ITableMainProps {
  students: { id: number; label: string }[];
  assignatures: { id: number; label: string; semester: string; code: string }[];
  teachers: { id: number; label: string }[];
}
export type Option = {
  id: number;
  label: string;
};
