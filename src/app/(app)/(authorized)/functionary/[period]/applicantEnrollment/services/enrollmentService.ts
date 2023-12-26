import { IRows } from "@/components/DataGrid";
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
  idPeriod: number;
  idProgram: number;
  enrollmentsReviewed: {
    id: number;
    state: number;
  }[];
}
export async function postEnrollmentAcceptation({
  idPeriod,
  idProgram,
  enrollmentsReviewed,
}: IPostEnrollmentAcceptation) {
  console.log(enrollmentsReviewed);

  async function SubmitData() {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API +
        APIUrls.postEnrollmentAcceptation +
        "idPeriod=" +
        idPeriod +
        "&idProgram=" +
        idProgram,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enrollmentsReviewed),
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
