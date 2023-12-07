export interface TypeProps {
  types: {
    [key: string]: {
      value: number | string;
      label: string;
    }[];
  };
}
