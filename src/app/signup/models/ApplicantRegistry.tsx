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
  guardians: Array<Guardian>;
}

export const personInitialValues = {
  applicant: {
    firstName: "",
    secondName: "",
    firstLastName: "",
    secondLastName: "",
    identification: "",
    birthDate: dayjs('2022-04-17', { format: 'YYYY-MM-DD' }),
    expeditionDate: dayjs('2022-04-17', { format: 'YYYY-MM-DD' }),
    identificationDocumentType: "",
    cellPhone: "",
    bloodType: "",
    email: "",
    gender: "",
    eps: "",
  } as Applicant,
  credentials: {
    username: "",
    password: ""
  } as Credential,
  scholarship: {
    scholarshipType: 0,
    institution: "",
    description: "",
    semester: "",
    graduateType: ""
  } as Scholarship,
  residency: {
    country: 0,
    state: 0,
    city: 0,
    residenceAddress: "",
    stratum: 0,
  } as Residency,
  guardians: [{
    names: "",
    lastNames: "",
    identification: "",
    address: "",
    cellPhone: "",
    telePhone: ""
  }] as Guardian[]
} as ApplicantRegistry;
