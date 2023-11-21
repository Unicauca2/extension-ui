import { getTypes } from "@/services/typesAndCache";

interface ObjetoOriginal {
  id: number;
  value: number;
  description: string;
  label: string;
  parent: number;
}

interface typeObject {
  value: number | string;
  label: string;
}

export async function getAddaptedTypes() {
  const typesResponse = await getTypes();

  if (!typesResponse) return {};

  const response: { [key: string]: typeObject[] } = {};
  for (const key of Object.keys(typesResponse)) {
    const list: ObjetoOriginal[] = typesResponse[key];
    response[key] = list.map((item) => {
      return {
        value: item.id || item.value,
        label: item.description || item.label,
        parent: item.parent,
      };
    });
  }

  return response;
}
