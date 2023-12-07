import { FormElement } from "@/models/FormElement";
import isObjectWithDefaultValues from "@/utils/ObjectComparer";
import { getApplicantUnilinguaElements } from "@unauthorized/signup/models/Applicant";
import {
  ApplicantRegistry,
  personInitialValues,
} from "@unauthorized/signup/models/ApplicantRegistry";
import {
  getGuardianUnilinguaChecker,
  getGuardianUnilinguaElements,
} from "@unauthorized/signup/models/Guardian";
import { getResidencyElements } from "@unauthorized/signup/models/Residency";
import { TypeProps } from "@unauthorized/signup/models/TypeProps";
import { IStrategy, Steps } from "./IStrategy";
import {
  getScholarShipChecker,
  getScholarShipElements,
} from "@unauthorized/signup/models/Scholarship";
import dayjs from "dayjs";

export class UnilinguaStrategy implements IStrategy {
  getSignUpSteps(): Steps {
    return [
      {
        label: "Información personal",
        content: (person: ApplicantRegistry, { types }: TypeProps) =>
          getApplicantUnilinguaElements({
            applicant: person.applicant,
            types: types,
          }),
        checker: (person: ApplicantRegistry) => {
          const check = !isObjectWithDefaultValues(
            person.applicant,
            personInitialValues.applicant
          );
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
        label: "Información escolar",
        content: (person: ApplicantRegistry, { types }: TypeProps) =>
          getScholarShipElements({
            birthDate: person.applicant.birthDate || dayjs(),
            scholarship: person.scholarship,
          }),
        checker: (person: ApplicantRegistry) =>
          getScholarShipChecker({
            birthDate: person.applicant.birthDate || dayjs(),
            scholarship: person.scholarship,
          }),
      },
      {
        label: "Información Acudiente",
        content: (person: ApplicantRegistry, { types }: TypeProps) =>
          getGuardianUnilinguaElements({
            guardian: person.guardians[0],
            types: types,
          }),
        checker: (person: ApplicantRegistry) =>
          getGuardianUnilinguaChecker(person.guardians[0]),
      },
    ];
  }
}
