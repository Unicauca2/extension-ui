import dayjs, { Dayjs } from "dayjs";
import {
  getBloodTypes,
  getDocumentTypes,
  getGenderTypes,
} from "@/services/types";
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
  document: File;
}

interface Props {
  applicant: Applicant;
  credentials: Credential;
  handleInputChange: ({ target }: any, name?: string | undefined) => void;
}

export function getApplicantElements({
  applicant,
  credentials,
  handleInputChange,
}: Props) {
  return [
    {
      type: "text",
      label: "Primer nombre",
      name: "applicant.firstName",
      value: applicant.firstName,
      onChange: handleInputChange,
      className: "w-full my-2",
    },
    {
      type: "text",
      label: "Segundo nombre",
      name: "applicant.secondName",
      value: applicant.secondName,
      onChange: handleInputChange,
    },
    {
      type: "text",
      label: "Primer apellido",
      name: "applicant.firstLastName",
      value: applicant.firstLastName,
      onChange: handleInputChange,
    },
    {
      type: "text",
      label: "Segundo apellido",
      name: "applicant.secondLastName",
      value: applicant.secondLastName,
      onChange: handleInputChange,
    },
    {
      type: "datePicker",
      label: "Fecha de nacimiento",
      value: applicant.birthDate,
      name: "applicant.birthDate",
      onChange: handleInputChange,
    },
    {
      type: "select",
      label: "Tipo de documento",
      value: applicant.identificationDocumentType,
      name: "applicant.identificationDocumentType",
      onChange: handleInputChange,
      options: getDocumentTypes(),
      styles: { m: 1, width: "23%" },
    },
    {
      type: "text",
      label: "Numero Identificacion",
      name: "applicant.identification",
      value: applicant.identification,
      onChange: handleInputChange,
    },
    {
      type: "datePicker",
      label: "Fecha de expedición",
      value: applicant.expeditionDate,
      name: "applicant.expeditionDate",
      onChange: handleInputChange,
    },
    {
      type: "select",
      label: "Género",
      value: applicant.gender,
      name: "applicant.gender",
      onChange: handleInputChange,
      options: getGenderTypes(),
      styles: { m: 1, width: "23%" },
    },
    {
      type: "text",
      label: "Celular",
      name: "applicant.cellPhone",
      value: applicant.cellPhone,
      onChange: handleInputChange,
    },
    {
      type: "text",
      label: "EPS",
      name: "applicant.eps",
      value: applicant.eps,
      onChange: handleInputChange,
    },
    {
      type: "select",
      label: "Tipo de sangre",
      value: applicant.bloodType,
      name: "applicant.bloodType",
      onChange: handleInputChange,
      options: getBloodTypes(),
      styles: { m: 1, width: "23%" },
    },
    {
      type: "text",
      label: "Correo electrónico",
      name: "applicant.email",
      value: applicant.email,
      onChange: handleInputChange,
    },
    {
      type: "password",
      label: "Contraseña",
      name: "credentials.password",
      value: credentials.password,
      onChange: handleInputChange,
    },
  ] as FormElement[];
}
