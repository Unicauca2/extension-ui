import { FormElement } from "@/models/FormElement";
import { ApplicantRegistry } from "@unauthorized/signup/models/ApplicantRegistry";
import { TypeProps } from "@unauthorized/signup/models/TypeProps";

export type Steps = {
  label: string;
  content: (person: ApplicantRegistry, { types }: TypeProps) => FormElement[];
  checker: (person: ApplicantRegistry) => boolean;
}[];

export interface IStrategy {
  getSignUpSteps(): Steps;
}
