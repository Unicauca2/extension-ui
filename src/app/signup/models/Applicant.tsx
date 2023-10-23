import { Dayjs } from "dayjs";
import { Credential } from "@/app/login/models/Credential";
import { FormElement } from "@/models/FormElement";

export interface Applicant {
  firstName: string;
  secondName: string;
  firstLastName: string;
  secondLastName: string;
  identification: string;
  expeditionDate: Dayjs;
  birthDate: Dayjs;
  identificationDocumentType: string;
  cellPhone: string;
  bloodType: string;
  email: string;
  gender: string;
  eps: string;
  stratum: number;
  document: File;
}

interface Props {
  applicant: Applicant;
  credentials: Credential;
  types: {
    [key: string]: {
      value: number | string;
      label: string;
    }[];
  };
}

export function getApplicantElements({ applicant, credentials, types }: Props) {
  const stratums = [1, 2, 3, 4, 5, 6].map((value) => {
    return { value: value, label: value };
  });
  return [
    {
      type: "text",
      label: "Primer nombre",
      name: "applicant.firstName",
      value: applicant.firstName,
      className: "w-full my-2",
    },
    {
      type: "text",
      label: "Segundo nombre",
      name: "applicant.secondName",
      value: applicant.secondName,
    },
    {
      type: "text",
      label: "Primer apellido",
      name: "applicant.firstLastName",
      value: applicant.firstLastName,
    },
    {
      type: "text",
      label: "Segundo apellido",
      name: "applicant.secondLastName",
      value: applicant.secondLastName,
    },
    {
      type: "datePicker",
      label: "Fecha de nacimiento",
      value: applicant.birthDate,
      name: "applicant.birthDate",
    },
    {
      type: "select",
      label: "Tipo de documento",
      value: applicant.identificationDocumentType,
      name: "applicant.identificationDocumentType",
      options: types.documentTypes,
      styles: { m: 1, width: "23%" },
    },
    {
      type: "text",
      label: "Numero Identificacion",
      name: "applicant.identification",
      value: applicant.identification,
    },
    {
      type: "datePicker",
      label: "Fecha de expedición",
      value: applicant.expeditionDate,
      name: "applicant.expeditionDate",
    },
    {
      type: "select",
      label: "Género",
      value: applicant.gender,
      name: "applicant.gender",
      options: types.genderTypes,
      styles: { m: 1, width: "23%" },
    },
    {
      type: "text",
      label: "Celular",
      name: "applicant.cellPhone",
      value: applicant.cellPhone,
    },
    {
      type: "text",
      label: "EPS",
      name: "applicant.eps",
      value: applicant.eps,
    },
    {
      type: "select",
      label: "Tipo de sangre",
      value: applicant.bloodType,
      name: "applicant.bloodType",
      options: types.bloodTypes,
      styles: { m: 1, width: "23%" },
    },
    {
      type: "select",
      label: "Estrato",
      value: applicant.stratum,
      name: "applicant.stratum",
      options: stratums,
      styles: { m: 1, width: "23%" },
    },
    {
      type: "text",
      label: "Correo electrónico",
      name: "applicant.email",
      value: applicant.email,
    },
    {
      type: "password",
      label: "Contraseña",
      name: "credentials.password",
      value: credentials.password,
    },
  ] as FormElement[];
}
