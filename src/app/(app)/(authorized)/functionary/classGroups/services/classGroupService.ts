import APIUrls from "@/models/APIUrls";

interface IRecord {
  data: {
    user: string;
    period: number;
    classroom: number;
    state: number;
    program: number;
    section: string;
    quota: number;
    assignature: number;
    idStudents: number[];
    idTeachers: number[];
  }[];
}
export async function record({ data }: IRecord) {
  const aux = { groups: data };
  async function SubmitData() {
    const response = await fetch(
      process.env.API_URL + APIUrls.postClassGroups,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(aux),
      }
    );
    if (response.ok) {
      const result = await response.json();
      return { success: true, result };
    }
    const message = await response.text();
    return { success: false, message };
  }
  const result = await SubmitData();
  return result;
}
