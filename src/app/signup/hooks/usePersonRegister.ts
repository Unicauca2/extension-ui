import { useState } from "react";
import { personInitialValues } from "../models/ApplicantRegistry";

export const usePersonRegister = () => {
  const [person, setPerson] = useState(personInitialValues);

  const handleInputChange = ({ target }: any | File, name?: string) => {
    const file = name?.includes("document") ? target.files && target.files[0] : undefined;
    const [objectName, propertyName] = target.name !== "" ? target?.name?.split(".") : name?.split(".");
    setPerson(prevState => ({
      ...prevState,
      [objectName]: {
        ...(prevState[objectName as keyof typeof prevState] as object),
        [propertyName]: file || target.value,
      },
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  }

  return {
    person,
    handleInputChange,
    handleSubmit
  }
}