import { ApplicantRegistry } from "@unauthorized/signup/models/ApplicantRegistry";

export async function record(
  applicantRegistry: ApplicantRegistry,
  submitUrl: string,
  idPeriod: number,
  payLimit: string,
  idProcess: number
) {
  const formData = new FormData();
  formData.append("applicantRegistry", JSON.stringify(applicantRegistry));
  if (applicantRegistry.applicant.document) {
    formData.append("document", applicantRegistry.applicant.document);
  }
  formData.append(
    "enrollmentInfo",
    JSON.stringify({
      idPeriod,
      idProcess,
      payLimit,
    })
  );
  formData.append("submitUrl", submitUrl);

  async function SubmitData(formData: FormData) {
    const response = await fetch("applicant", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      const result = await response.json();
      return { success: true, result };
    }
    const message = await response.text();
    return { success: false, result: message };
  }
  const result = await SubmitData(formData);
  return result;
}
