import { IPost } from "@/app/api/functionary/academicOffer/route";

interface IRecord {
  data: IPost[];
}
export async function record({ data }: IRecord) {
  const aux = { groups: data };
  const response = await fetch("/api/functionary/academicOffer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(aux),
  });
  if (response.ok) {
    const result = await response.json();
    return { success: true, result };
  }
  const message = await response.text();
  return { success: false, message };
}
