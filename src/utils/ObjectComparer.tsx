export default function isObjectWithDefaultValues(
  objA: any,
  objB: any
): boolean {
  if (
    objA === null ||
    objA === undefined ||
    objB === null ||
    objB === undefined
  ) {
    return false;
  }

  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) {
      return false;
    }
    for (let i = 0; i < objA.length; i++) {
      if (!isObjectWithDefaultValues(objA[i], objB[i])) {
        return false;
      }
    }
    return true;
  }

  const keysA = Object.keys(objA);
  for (const key of keysA) {
    if (key in objB) {
      if (typeof objA[key] === "object" && typeof objB[key] === "object") {
        if (isObjectWithDefaultValues(objA[key], objB[key])) {
          return true;
        }
      } else if (objA[key] === objB[key]) {
        return true;
      }
    }
  }
  return false;
}

export function isListWithDefaultValues(objBase: any, list: any) {
  return list.some((obj: any) => isObjectWithDefaultValues(objBase, obj));
}
