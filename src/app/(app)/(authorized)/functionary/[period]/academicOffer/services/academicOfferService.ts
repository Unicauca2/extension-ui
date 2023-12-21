interface IRecord {
  data: {
    codStudent: string;
    codAssignature: string;
  }[];
  recordUrl: string;
  programId: number;
}
export async function record({ data, recordUrl, programId }: IRecord) {
  async function SubmitData({ data, recordUrl, programId }: IRecord) {
    const response = await fetch(process.env.NEXT_PUBLIC_API + recordUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        oidProgram: programId,
        academicOffer: data,
      }),
    });
    if (response.ok) {
      const result = await response.json();
      return { success: true, result };
    }
    const message = await response.text();
    return { success: false, message };
  }
  const result = await SubmitData({ data, recordUrl, programId });
  return result;
}
