"use client";

import APIUrls from "@/models/APIUrls";
import TableMain from "./TableMain";
import { useEffect, useState } from "react";

async function getAssignatures({ idPensum }: { idPensum: string }) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API + APIUrls.getAssignatureList + idPensum
  );
  return res.json();
}

async function getStudents({ idProgram }: { idProgram: number }) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API + APIUrls.getStudentsList + idProgram
  );
  return res.json();
}

interface ISelectPensum {
  program: number;
  pensums: { id: number; description: string }[];
}
export default function SelectPensum({ program, pensums }: ISelectPensum) {
  const [pensumSelected, setPensumSelected] = useState("");
  const [assignatures, setAssignatures] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAssignatures({ idPensum: pensumSelected });
      setAssignatures(data.result);
    }
    if (pensumSelected === "") return;
    fetchData();
  }, [pensumSelected]);

  useEffect(() => {
    async function fetchData() {
      const data = await getStudents({ idProgram: program });
      setStudents(data.result);
    }
    fetchData();
  }, []);

  return (
    <>
      <select
        value={pensumSelected}
        onChange={({ target: { value } }) => {
          setPensumSelected(value);
        }}
      >
        <option value="" disabled>
          Seleccione una opcion
        </option>
        {pensums.map((pensum) => (
          <option key={pensum.id} value={pensum.id}>
            {pensum.description}
          </option>
        ))}
      </select>
      {pensumSelected !== "" && (
        <TableMain assignatures={assignatures} students={students} />
      )}
    </>
  );
}
