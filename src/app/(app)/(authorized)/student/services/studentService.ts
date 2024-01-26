import { IPost } from "@/app/api/student/academicOffer/route";

async function getPreEnrollment(idStudent: number, idPeriod: number) {
  if (idStudent === 0 || idStudent === undefined) return false;
  const response = await fetch(
    `/api/student/academicOffer?idStudent=${idStudent}&idPeriod=${idPeriod}`
  );
  if (response.ok) {
    const result = await response.json();
    return { success: true, response: result };
  }
  return { success: false, message: response.text() };
}

async function acceptPreEnrollment(props: IPost) {
  if (props.idStudent === 0) {
    return {
      success: false,
      message:
        "Error con la sesion del estudiante, envíe un correo a contacto@unicauca.edu.co indicando detalles",
      result: "",
    };
  }
  const response = await fetch("/api/student/academicOffer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(props),
  });
  if (response.ok) {
    const result = await response.json();
    return { success: true, result };
  }
  return { success: false, message: await response.text() };
}

export { acceptPreEnrollment, getPreEnrollment };
