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
  let cities: any[] = [];
  if (residency.state)
    cities = types.cities.filter((item) => item.parent === residency.state);
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
      type: "text",
      label: "Dirección de residencia",
      name: "residency.residenceAddress",
      value: residency.residenceAddress,
      className: "w-full my-2",
    },
    {
      type: "select",
      label: "Departamento de residencia",
      name: "residency.state",
      value: residency.state,
      options: types.states,
      styles: { my: 1, width: "100%" },
    },
    {
      type: "select",
      label: "Ciudad de residencia",
      name: "residency.city",
      value: residency.city,
      options: cities,
      styles: { my: 1, width: "100%" },
    },
  ] as FormElement[];
}
