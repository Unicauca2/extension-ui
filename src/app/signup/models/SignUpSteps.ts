import { FormElement } from "@/models/FormElement";
import isObjectWithDefaultValues from "@/utils/ObjectComparer";
import { getApplicantElements } from "./Applicant";
import { ApplicantRegistry, personInitialValues } from "./ApplicantRegistry";
import { getGuardianElements } from "./Guardian";
import { getResidencyElements } from "./Residency";
import { TypeProps } from "./TypeProps";

export const Steps = {
  CONSERVATORIO: [
    {
      label: "Información personal",
      content: (person: ApplicantRegistry, { types }: TypeProps) =>
        getApplicantElements({
          applicant: person.applicant,
          credentials: person.credentials,
          types: types,
        }),
      checker: (person: ApplicantRegistry) => {
        const check =
          !isObjectWithDefaultValues(
            person.applicant,
            personInitialValues.applicant
          ) && person.credentials.password;
        console.log(check);
        return check;
      },
    },
    {
      label: "Documento de identidad",
      content: (person: ApplicantRegistry, _: TypeProps) => {
        return [
          {
            type: "file",
            label: "Documento de identidad",
            name: "applicant.document",
            value: person.applicant.document,
            multiple: false,
            accepts: ".pdf, .jpg, .jpeg, .png",
            className: "w-full my-2",
          },
        ] as FormElement[];
      },
      checker: (person: ApplicantRegistry) => person.applicant.document,
    },
    {
      label: "Foto 3x4",
      content: (person: ApplicantRegistry, _: TypeProps) => {
        return [
          {
            type: "file",
            label: "Foto perfil 3x4",
            name: "applicant.photo",
            value: person.applicant.photo,
            multiple: false,
            accepts: ".pdf, .jpg, .jpeg, .png",
            className: "w-full my-2",
          },
        ] as FormElement[];
      },
      checker: (person: ApplicantRegistry) => person.applicant.photo,
    },
    {
      label: "Información Residencia",
      content: (person: ApplicantRegistry, { types }: TypeProps) =>
        getResidencyElements({
          residency: person.residency,
          types: types,
        }),
      checker: (person: ApplicantRegistry) =>
        !isObjectWithDefaultValues(
          person.residency,
          personInitialValues.residency
        ),
    },
    {
      label: "Información Acudiente",
      content: (person: ApplicantRegistry, { types }: TypeProps) =>
        getGuardianElements({
          guardian: person.guardian,
          types: types,
        }),
      checker: (person: ApplicantRegistry) =>
        !isObjectWithDefaultValues(
          person.guardian,
          personInitialValues.guardian
        ),
    },
  ],
  UNILINGUA: [{}],
};
