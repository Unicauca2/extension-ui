export const modifyObject = (
  properties: string[],
  value: any,
  obj: any
): any => {
  if (properties.length === 0) {
    return value;
  }
  const [property, ...restProperties] = properties;
  if (Array.isArray(obj)) {
    const newArray: any[] = obj.map((item, index) => {
      if (index === parseInt(property, 10)) {
        return modifyObject(restProperties, value, item);
      }
      return item;
    });
    return newArray;
  }
  return {
    ...obj,
    [property]: modifyObject(restProperties, value, obj[property] || {}),
  };
};
