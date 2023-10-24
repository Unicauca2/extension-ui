import dayjs from "dayjs";
import { Applicant } from "./Applicant";
import { Credential } from "./Credential";
import { Scholarship } from "./Scholarship";
import { Residency } from "./Residency";
import { Guardian } from "./Guardian";

export interface ApplicantRegistry {
  applicant: Applicant;
  credentials: Credential;
  document: File;
  scholarship: Scholarship;
  residency: Residency;
  guardian: Guardian;
}

export const personInitialValues = {
  applicant: {
    firstName: "",
    secondName: "",
    firstLastName: "",
    secondLastName: "",
    identification: "",
    birthDate: dayjs(dayjs().subtract(12, "year"), { format: "YYYY-MM-DD" }),
    expeditionDate: dayjs(dayjs().subtract(12, "year"), {
      format: "YYYY-MM-DD",
    }),
    identificationDocumentType: "",
    cellPhone: "",
    bloodType: "",
    email: "",
    gender: "",
    eps: "",
    stratum: "",
  } as Applicant,
  credentials: {
    username: "",
    password: "",
  } as Credential,
  scholarship: {
    scholarshipType: 0,
    institution: "",
    description: "",
    semester: "",
    graduateType: "",
  } as Scholarship,
  residency: {
    nationality: "",
    state: "",
    city: "",
    residenceAddress: "",
  } as Residency,
  guardian: {
    fullName: "",
    identification: "",
    email: "",
    cellPhone: "",
    telePhone: "",
    relationship: "",
  } as Guardian,
} as ApplicantRegistry;
