import { Dayjs } from "dayjs";
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
  stratum: number | string;
  document: File;
  photo: File;
}

interface Props {
  applicant: Applicant;
  types: {
    [key: string]: {
      value: number | string;
      label: string;
    }[];
  };
}

function getApplicantBaseElements({ applicant, types }: Props) {
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
      styles: { my: 1, width: "100%" },
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
      styles: { my: 1, width: "100%" },
    },
    {
      type: "select",
      label: "Estrato",
      value: applicant.stratum,
      name: "applicant.stratum",
      options: stratums,
      styles: { my: 1, width: "100%" },
    },
    {
      type: "text",
      label: "Correo electrónico",
      name: "applicant.email",
      value: applicant.email,
    },
  ] as FormElement[];
}

export function getApplicantConservatorioElements({ applicant, types }: Props) {
  const identityDocuments = [
    {
      value: 1,
      label: "Registro Civil",
    },
    {
      value: 2,
      label: "Tarjeta de Identidad",
    },
  ];

  const conservatorioElements = getApplicantBaseElements({ applicant, types });
  conservatorioElements.splice(5, 0, {
    type: "select",
    label: "Tipo de documento",
    value: applicant.identificationDocumentType,
    name: "applicant.identificationDocumentType",
    options: identityDocuments,
    styles: { my: 1, width: "100%" },
  } as unknown as FormElement);

  return conservatorioElements;
}

export function getApplicantUnilinguaElements({ applicant, types }: Props) {
  const identityDocuments = [
    {
      value: 1,
      label: "Registro Civil",
    },
    {
      value: 2,
      label: "Tarjeta de Identidad",
    },
    {
      value: 3,
      label: "Cédula de ciudadanía",
    },
    {
      value: 4,
      label: "Cédula de extranjería",
    },
    {
      value: 5,
      label: "Pasaporte",
    },
  ];

  const unilinguaElements = getApplicantBaseElements({ applicant, types });
  unilinguaElements.splice(5, 0, {
    type: "select",
    label: "Tipo de documento",
    value: applicant.identificationDocumentType,
    name: "applicant.identificationDocumentType",
    options: identityDocuments,
    styles: { my: 1, width: "100%" },
  } as unknown as FormElement);

  return unilinguaElements;
}
