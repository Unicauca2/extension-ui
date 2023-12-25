export type CustomUser = {
  person: {
    idPerson: number;
    identification: string;
    username: string;
    fullName: string;
  };
  coordinator: { id: number; program: number };
  students: {
    id: number;
    program: number;
    code: string;
  }[];
};
