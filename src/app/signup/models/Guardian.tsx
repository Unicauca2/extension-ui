import { FormElement } from "@/models/FormElement";

export interface Guardian {
  fullName: string;
  identification: string;
  cellPhone: string;
  telePhone: string;
  email: string;
  relationship: number | string;
}

interface Props {
  guardian: Guardian;
  types: {
    [key: string]: {
      value: number | string;
      label: string;
    }[];
  };
}

export function getGuardianElements({ guardian, types }: Props) {
  return [
    {
      type: "text",
      label: "Nombre completo",
      name: "guardian.fullName",
      value: guardian.fullName,
      className: "w-full my-2",
    },
    {
      type: "text",
      label: "Identificación",
      name: "guardian.identification",
      value: guardian.identification,
    },
    {
      type: "select",
      label: "Parentesco",
      value: guardian.relationship,
      name: "guardian.relationship",
      options: types.relationships,
      styles: { m: 1, width: "23%" },
    },
    {
      type: "text",
      label: "Teléfono celular",
      name: "guardian.cellPhone",
      value: guardian.cellPhone,
    },
    {
      type: "text",
      label: "Correo electrónico",
      name: "guardian.email",
      value: guardian.email,
    },
    {
      type: "text",
      label: "Teléfono alternativo",
      name: "guardian.telePhone",
      value: guardian.telePhone,
    },
  ] as FormElement[];
}
