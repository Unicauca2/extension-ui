import { FormElement } from "@/models/FormElement";
import { ApplicantRegistry } from "@/app/signup/models/ApplicantRegistry";
import { TypeProps } from "@/app/signup/models/TypeProps";

export type Steps = {
  label: string;
  content: (
    person: ApplicantRegistry,
    { types }: TypeProps
  ) => FormElement[] | null;
  checker: (person: ApplicantRegistry) => boolean;
}[];

export interface IStrategy {
  getSignUpSteps(): Steps;
}
