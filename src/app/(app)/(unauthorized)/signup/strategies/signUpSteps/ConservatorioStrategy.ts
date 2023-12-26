import { FormElement } from "@/models/FormElement";
import isObjectWithDefaultValues from "@/utils/ObjectComparer";
import {
  ApplicantRegistry,
  personInitialValues,
} from "@unauthorized/signup/models/ApplicantRegistry";
import { getGuardianConservatorioElements } from "@unauthorized/signup/models/Guardian";
import { getResidencyElements } from "@unauthorized/signup/models/Residency";
import { TypeProps } from "@unauthorized/signup/models/TypeProps";
import { IStrategy, Steps } from "./IStrategy";
import { getApplicantConservatorioElements } from "@unauthorized/signup/models/Applicant";
import dayjs, { Dayjs } from "dayjs";
import {
  getScholarShipElements,
  getScholarShipChecker,
} from "../../models/Scholarship";

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
          const check = !isObjectWithDefaultValues(
            person.applicant,
            personInitialValues.applicant
          );

          const check2 = dayjs(person.applicant.birthDate).isAfter(
            dayjs().subtract(11, "year")
          );

          return (check && check2) === true;
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
          getGuardianConservatorioElements({
            guardian: person.guardians[0],
            types: types,
          }),
        checker: (person: ApplicantRegistry) =>
          !isObjectWithDefaultValues(
            person.guardians,
            personInitialValues.guardians
          ),
      },
    ];
  }
}
