async function getAssignatures({ idPensum }: { idPensum: string }) {
  const res = await fetch("/api/assignature?idPensum=" + idPensum);
  return res.json();
}
async function getStudents({ idProgram }: { idProgram: number }) {
  const res = await fetch("/api/student?idProgram=" + idProgram);
  return res.json();
}
async function getTeachers({ idProgram }: { idProgram: number }) {
  const res = await fetch("/api/teacher?idProgram=" + idProgram);
  return res.json();
}

interface IFetchData {
  idPensum: string;
  idProgram: number;
}
export async function fetchData({ idPensum, idProgram }: IFetchData) {
  const assignatures = await getAssignatures({ idPensum });
  const students = await getStudents({ idProgram });
  const teachers = await getTeachers({ idProgram });
  return {
    assignatures: assignatures.result,
    students: students.result,
    teachers: teachers.result,
  };
}
