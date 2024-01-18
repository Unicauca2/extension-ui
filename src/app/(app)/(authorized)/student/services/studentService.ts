import APIUrls from "@/models/APIUrls";

async function getPreEnrollment(idStudent: number) {
  if (idStudent === 0 || idStudent === undefined) return false;
  async function SubmitData() {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API + APIUrls.getAcamidOfferURL + idStudent
    );
    if (response.ok) {
      const result = await response.json();
      return { success: true, response: result };
    }
    return { success: false };
  }
  const result = await SubmitData();
  return result;
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
      process.env.NEXT_PUBLIC_API + APIUrls.postAcceptPreEnrollmentURL,
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
