import { IGet } from "@/app/api/functionary/enrollment/route";
import APIUrls from "@/models/APIUrls";

export async function getEnrollmentList({ idPeriod, idProgram }: IGet) {
  const response = await fetch(
    `/api/functionary/enrollment?idPeriod=${idPeriod}&idProgram=${idProgram}`
  );
  if (response.ok) {
    return { success: true, result: await response.json() };
  }
  return { success: false, result: await response.text() };
}

interface IPostEnrollmentAcceptation {
  reviewedEnrollments: {
    id: number;
    state: number;
  }[];
  invoicesData: {
    paymentLimit: string;
    idPeriod: number;
    idProgram: number;
  };
}
export async function postEnrollmentAcceptation({
  reviewedEnrollments,
  invoicesData,
}: IPostEnrollmentAcceptation) {
  async function SubmitData() {
    const response = await fetch(
      //process.env.BASE_URL_EXTENSION_API
      process.env.API_URL + APIUrls.postEnrollmentAcceptation,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reviewedEnrollments, invoicesData }),
      }
    );
    if (response.ok) {
      const result = await response.json();
      return { success: true, result };
    }
    const message = await response.text();
    return { success: false, result: message };
  }
  const result = await SubmitData();
  return result;
}
