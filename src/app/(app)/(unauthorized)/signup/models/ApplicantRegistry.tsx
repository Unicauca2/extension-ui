import { Applicant } from "./Applicant";
import { Scholarship } from "./Scholarship";
import { Residency } from "./Residency";
import { Guardian } from "./Guardian";

export interface ApplicantRegistry {
  applicant: Applicant;
  scholarship: Scholarship;
  residency: Residency;
  guardians: Guardian[];
}

export const personInitialValues = {
  applicant: {
    firstName: "",
    secondName: "",
    firstLastName: "",
    secondLastName: "",
    identification: "",
    birthDate: undefined,
    expeditionDate: undefined,
    identificationDocumentType: "",
    cellPhone: "",
    bloodType: "",
    email: "",
    gender: "",
    eps: "",
    stratum: "",
  } as Applicant,
  scholarship: {
    scholarshipType: "",
    institution: "",
    description: "",
    semester: "",
    graduateType: "",
    calendar: "",
  } as Scholarship,
  residency: {
    nationality: "",
    city: "",
    residenceAddress: "",
  } as Residency,
  guardians: [
    {
      fullName: "",
      identification: "",
      email: "",
      cellPhone: "",
      telePhone: "",
      relationship: "",
      whatsapp: "",
    },
  ] as Guardian[],
} as ApplicantRegistry;
