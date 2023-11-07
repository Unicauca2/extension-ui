import { FormElement } from "@/models/FormElement";

export interface Guardian {
  fullName: string;
  identification: string;
  cellPhone: string;
  telePhone: string;
  email: string;
  relationship: number | string;
  whatsapp: string;
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

function getGuardianBaseElements({ guardian }: Props) {
  return [
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
  ] as FormElement[];
}

export function getGuardianUnilinguaElements({ guardian, types }: Props) {
  const unilinguaElements = getGuardianBaseElements({ guardian, types });
  unilinguaElements.push({
    type: "text",
    label: "Número de Whatsapp",
    name: "guardian.whatsapp",
    value: guardian.whatsapp,
  });
  return unilinguaElements;
}

export function getGuardianConservatorioElements({ guardian, types }: Props) {
  const auxAdditionalElements = [
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
      styles: { my: 1, width: "100%" },
    },
  ] as FormElement[];
  const conservatorioElements = getGuardianBaseElements({ guardian, types });
  conservatorioElements.splice(0, 0, ...auxAdditionalElements);
  conservatorioElements.push({
    type: "text",
    label: "Teléfono alternativo",
    name: "guardian.telePhone",
    value: guardian.telePhone,
  });
  return conservatorioElements;
}