import { FormElement } from "@/models/FormElement";

export interface Residency {
  nationality: number | string;
  country: number | string;
  state: number | string;
  city: number | string;
  residenceAddress: string;
}

interface Props {
  residency: Residency;
  types: {
    [key: string]: {
      value: number | string;
      label: string;
      parent?: number;
    }[];
  };
}

export function getResidencyElements({ residency, types }: Props) {
  return [
    {
      type: "select",
      label: "Nacionalidad",
      name: "residency.nationality",
      value: residency.nationality,
      options: types.countries,
      styles: { my: 1, width: "100%" },
    },
    {
      type: "select",
      label: "Ciudad de residencia",
      name: "residency.city",
      value: residency.city,
      options: types.cities,
      styles: { my: 1, width: "100%" },
    },
    {
      type: "text",
      label: "Dirección de residencia",
      name: "residency.residenceAddress",
      value: residency.residenceAddress,
      className: "w-full my-2",
    },
  ] as FormElement[];
}
