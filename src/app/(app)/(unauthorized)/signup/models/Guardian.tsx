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
      label: "Nombre completo",
      name: "guardians.0.fullName",
      value: guardian.fullName,
      className: "w-full my-2",
    },
    {
      type: "text",
      label: "Teléfono celular",
      name: "guardians.0.cellPhone",
      value: guardian.cellPhone,
    },
    {
      type: "text",
      label: "Correo electrónico",
      name: "guardians.0.email",
      value: guardian.email,
    },
  ] as FormElement[];
}

export function getGuardianUnilinguaElements({ guardian, types }: Props) {
  const unilinguaElements = getGuardianBaseElements({ guardian, types });
  unilinguaElements.push({
    type: "text",
    label: "Número de Whatsapp",
    name: "guardians.0.whatsapp",
    value: guardian.whatsapp,
  });
  return unilinguaElements;
}
export function getGuardianUnilinguaChecker(guardian: Guardian) {
  if (guardian.cellPhone === undefined || guardian.cellPhone.length < 1)
    return false;
  if (guardian.email === undefined || guardian.email.length < 1) return false;
  if (guardian.whatsapp === undefined || guardian.whatsapp.length < 1)
    return false;
  return true;
}

export function getGuardianConservatorioElements({ guardian, types }: Props) {
  const auxAdditionalElements = [
    {
      type: "text",
      label: "Identificación",
      name: "guardians.0.identification",
      value: guardian.identification,
    },
    {
      type: "select",
      label: "Parentesco",
      value: guardian.relationship,
      name: "guardians.0.relationship",
      options: types.relationships,
      styles: { my: 1, width: "100%" },
    },
  ] as FormElement[];
  const conservatorioElements = getGuardianBaseElements({ guardian, types });
  conservatorioElements.splice(0, 0, ...auxAdditionalElements);
  conservatorioElements.push({
    type: "text",
    label: "Teléfono alternativo",
    name: "guardians.0.telePhone",
    value: guardian.telePhone,
  });
  return conservatorioElements;
}
