import { IGet, IPost } from "@/app/api/functionary/enrollment/route";

export async function getEnrollmentList({ idPeriod, idProgram }: IGet) {
  const response = await fetch(
    `/api/functionary/enrollment?idPeriod=${idPeriod}&idProgram=${idProgram}`
  );
  if (response.ok) {
    return { success: true, result: await response.json() };
  }
  return { success: false, result: await response.text() };
}

export async function postEnrollmentAcceptation({
  reviewedEnrollments,
  invoicesData,
}: IPost) {
  const response = await fetch("/api/functionary/enrollment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ reviewedEnrollments, invoicesData }),
  });
  if (response.ok) {
    return { success: true, result: await response.json() };
  }
  return { success: false, result: await response.text() };
}
