import { ApplicantRegistry } from "@unauthorized/signup/models/ApplicantRegistry";

export async function record(
  applicantRegistry: ApplicantRegistry,
  submitUrl: string
) {
  const formData = new FormData();
  formData.append("applicantRegistry", JSON.stringify(applicantRegistry));
  if (applicantRegistry.applicant.document) {
    formData.append("document", applicantRegistry.applicant.document);
  }
  if (applicantRegistry.applicant.photo) {
    formData.append("photo", applicantRegistry.applicant.photo);
  }

  async function SubmitData(formData: FormData) {
    const response = await fetch(process.env.NEXT_PUBLIC_API + submitUrl, {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      const result = await response.json();
      return { success: true, result };
    }
    return { success: false };
  }
  const result = await SubmitData(formData);
  return result;
}
