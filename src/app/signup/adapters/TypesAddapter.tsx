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

function orderByLabel(list: typeObject[]) {
  list.sort((a, b) => {
    const labelA = a.label.toUpperCase();
    const labelB = b.label.toUpperCase();
    if (labelA < labelB) {
      return -1;
    }
    if (labelA > labelB) {
      return 1;
    }
    return 0;
  });
  return list;
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
    response[key] = orderByLabel(response[key]);
  }

  return response;
}
