import { FormElement } from "@/models/FormElement";
import isObjectWithDefaultValues from "@/utils/ObjectComparer";
import { getApplicantConservatorioElements } from "@/app/signup/models/Applicant";
import {
  ApplicantRegistry,
  personInitialValues,
} from "@/app/signup/models/ApplicantRegistry";
import { getGuardianElements } from "@/app/signup/models/Guardian";
import { getResidencyElements } from "@/app/signup/models/Residency";
import { TypeProps } from "@/app/signup/models/TypeProps";
import { IStrategy, Steps } from "./IStrategy";

export class ConservatorioStrategy implements IStrategy {
  getSignUpSteps(): Steps {
    return [
      {
        label: "Información personal",
        content: (person: ApplicantRegistry, { types }: TypeProps) =>
          getApplicantConservatorioElements({
            applicant: person.applicant,
            types: types,
          }),
        checker: (person: ApplicantRegistry) => {
          const check =
            !isObjectWithDefaultValues(
              person.applicant,
              personInitialValues.applicant
            ) && person.credentials.password;
          return check !== false || check;
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
        checker: (person: ApplicantRegistry) => {
          return (
            person.applicant.document != undefined || person.applicant.document
          );
        },
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
        checker: (person: ApplicantRegistry) =>
          person.applicant.photo != undefined || person.applicant.photo,
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
    ];
  }
}
