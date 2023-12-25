import { getUserData } from "@/services/user";
import { CustomUser } from "../models/CustomUser";

interface IValidateUser {
  email: string;
}
export const validateUser = async ({
  email,
}: IValidateUser): Promise<CustomUser | false> => {
  const result = await getUserData({ email });

  if (!result || result.length === 0) {
    return false;
  }

  return {
    person: {
      idPerson: result.person.idPerson,
      identification: result.person.identification,
      username: result.person.username,
      fullName: result.person.fullName,
    },
    coordinator: result.coordinator,
    students: result.students,
  } as CustomUser;
};
