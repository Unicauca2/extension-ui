"use client";

import { fetchData } from "../services/fetchData";
import Table from "./Table";
import { useEffect, useState } from "react";

interface IParametrizer {
  idProgram: number | undefined;
  user: string | undefined | null;
}
export default function Main({ idProgram }: IParametrizer) {
  if (!idProgram) return <>Cargando</>;
  const pensumSelected = "139";
  const [assignatures, setAssignatures] = useState([]);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    async function fetchPageData() {
      const data = await fetchData({
        idPensum: pensumSelected,
        idProgram: idProgram as number,
      });
      setAssignatures(data.assignatures);
      setStudents(data.students);
      setTeachers(data.teachers);
    }
    fetchPageData();
  }, [pensumSelected]);

  return (
    <>
      <Table
        assignatures={assignatures}
        students={students}
        teachers={teachers}
      />
    </>
  );
}
