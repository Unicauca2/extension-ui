import { FormElement } from "@/models/FormElement";

export interface Residency {
  country: number;
  state: number;
  city: number;
  residenceAddress: string;
  stratum: number;
}

interface Props {
  residency: Residency;
  handleInputChange: ({ target }: any, name?: string | undefined) => void;
}

export function getResidencyElements({ residency, handleInputChange }: Props) {
  return [
    {
      type: "text",
      label: "Dirección de residencia",
      name: "residency.residenceAddress",
      value: residency.residenceAddress,
      onChange: handleInputChange,
      className: "w-full my-2",
    },
    // {
    //   type: "text",
    //   label: "Segundo nombre",
    //   name: "applicant.secondName",
    //   value: applicant.secondName,
    //   onChange: ({ target: { value } }) =>
    //     handleInputChange(["applicant", "secondName"], value),
    // },
    // {
    //   type: "text",
    //   label: "Primer apellido",
    //   name: "applicant.firstLastName",
    //   value: applicant.firstLastName,
    //   onChange: ({ target: { value } }) =>
    //     handleInputChange(["applicant", "firstLastName"], value),
    // },
    // {
    //   type: "text",
    //   label: "Segundo apellido",
    //   name: "applicant.secondLastName",
    //   value: applicant.secondLastName,
    //   onChange: ({ target: { value } }) =>
    //     handleInputChange(["applicant", "secondLastName"], value),
    // },
    // {
    //   type: "datePicker",
    //   label: "Fecha de nacimiento",
    //   value: applicant.birthDate,
    //   onChange: (value) =>
    //     handleInputChange(
    //       ["applicant", "birthDate"],
    //       dayjs(value).format("YYYY-MM-DD")
    //     ),
    // },
    // {
    //   type: "select",
    //   label: "Tipo de documento",
    //   value: applicant.identificationDocumentType,
    //   onChange: ({ target: { value } }) => {
    //     handleInputChange(["applicant", "identificationDocumentType"], value);
    //   },
    //   options: getDocumentTypes(),
    //   styles: { m: 1, width: "23%" },
    // },
    // {
    //   type: "text",
    //   label: "Numero Identificacion",
    //   name: "applicant.identification",
    //   value: applicant.identification,
    //   onChange: ({ target: { value } }) =>
    //     handleInputChange(["applicant", "identification"], value),
    // },
    // {
    //   type: "datePicker",
    //   label: "Fecha de expedición",
    //   value: applicant.expeditionDate,
    //   onChange: (value) =>
    //     handleInputChange(
    //       ["applicant", "expeditionDate"],
    //       dayjs(value).format("YYYY-MM-DD")
    //     ),
    // },
    // {
    //   type: "select",
    //   label: "Género",
    //   value: applicant.gender,
    //   onChange: ({ target: { value } }) => {
    //     handleInputChange(["applicant", "gender"], value);
    //   },
    //   options: getGenderTypes(),
    //   styles: { m: 1, width: "23%" },
    // },
    // {
    //   type: "text",
    //   label: "Celular",
    //   name: "applicant.cellPhone",
    //   value: applicant.cellPhone,
    //   onChange: ({ target: { value } }) =>
    //     handleInputChange(["applicant", "cellPhone"], value),
    // },
    // {
    //   type: "text",
    //   label: "EPS",
    //   name: "applicant.eps",
    //   value: applicant.eps,
    //   onChange: ({ target: { value } }) =>
    //     handleInputChange(["applicant", "eps"], value),
    // },
    // {
    //   type: "select",
    //   label: "Tipo de sangre",
    //   value: applicant.bloodType,
    //   onChange: ({ target: { value } }) => {
    //     handleInputChange(["applicant", "bloodType"], value);
    //   },
    //   options: getBloodTypes(),
    //   styles: { m: 1, width: "23%" },
    // },
    // {
    //   type: "text",
    //   label: "Correo electrónico",
    //   name: "applicant.email",
    //   value: applicant.email,
    //   onChange: ({ target: { value } }) =>
    //     handleInputChange(["applicant", "email"], value),
    // },
    // {
    //   type: "password",
    //   label: "Contraseña",
    //   name: "credentials.password",
    //   value: credentials.password,
    //   onChange: ({ target: { value } }) =>
    //     handleInputChange(["credentials", "password"], value),
    // },
  ] as FormElement[];
}
