import APIUrls from "@/models/APIUrls";

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

export interface IAcceptPreEnrollment {
  idProgram: number;
  idPeriod: number;
  idStudent: number;
  idPerson: number;
}
async function acceptPreEnrollment(props: IAcceptPreEnrollment) {
  if (props.idStudent === 0) {
    return {
      success: false,
      message:
        "Error con la sesion del estudiante, envíe un correo a contacto@unicauca.edu.co indicando detalles",
      result: "",
    };
  }
  async function SubmitData() {
    const response = await fetch(
      process.env.API_URL + APIUrls.postAcceptPreEnrollmentURL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(props),
      }
    );
    if (response.ok) {
      const result = await response.json();
      return { success: true, result };
    }
    return { success: false, message: await response.text(), result: "" };
  }
  const result = await SubmitData();
  return result;
}

export { getPreEnrollment, acceptPreEnrollment };
