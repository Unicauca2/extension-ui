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

async function acceptPreEnrollment(idStudent: number) {
  if (idStudent === 0) {
    return false;
  }
  async function SubmitData() {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API + APIUrls.acceptPreEnrollmentURL + idStudent
    );
    if (response.ok) {
      const result = await response.json();
      return { success: true, result };
    }
    return { success: false };
  }
  const result = await SubmitData();
  return result;
}

export { getPreEnrollment, acceptPreEnrollment };
