import APIUrls from "@/models/APIUrls";

interface IGetEnrollmentList {
  idPeriod: number;
  idProgram: number;
}
export async function getEnrollmentList({
  idPeriod,
  idProgram,
}: IGetEnrollmentList) {
  async function SubmitData() {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API +
        APIUrls.getEnrollmentList +
        "idPeriod=" +
        idPeriod +
        "&idProgram=" +
        idProgram
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
      process.env.NEXT_PUBLIC_API + APIUrls.postEnrollmentAcceptation,
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
