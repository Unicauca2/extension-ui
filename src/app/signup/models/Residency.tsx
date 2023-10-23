import { FormElement } from "@/models/FormElement";

export interface Residency {
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
  const states = types.states.filter(
    (item) => item.parent === residency.country
  );
  let cities: any[] = [];
  if (states.length !== 0)
    cities = types.cities.filter((item) => item.parent === residency.state);
  return [
    {
      type: "text",
      label: "Dirección de residencia",
      name: "residency.residenceAddress",
      value: residency.residenceAddress,
      className: "w-full my-2",
    },
    {
      type: "select",
      label: "Nacionalidad",
      name: "residency.country",
      value: residency.country,
      options: types.countries,
      styles: { m: 1, width: "23%" },
    },
    {
      type: "select",
      label: "Departamento de residencia",
      name: "residency.state",
      value: residency.state,
      options: states,
      styles: { m: 1, width: "23%" },
    },
    {
      type: "select",
      label: "Ciudad de residencia",
      name: "residency.city",
      value: residency.city,
      options: cities,
      styles: { m: 1, width: "23%" },
    },
  ] as FormElement[];
}
