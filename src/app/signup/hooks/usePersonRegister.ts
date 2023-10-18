import { useState } from "react";
import { personInitialValues } from "../models/ApplicantRegistry";
import { modifyObject } from "@/utils/RecursiveObjects";

export const usePersonRegister = () => {
  const [person, setPerson] = useState(personInitialValues);

  const handleInputChange = (propsPath: string[], value: any) => {
    setPerson(modifyObject(propsPath, value, person));
  };

  const handleSubmit = (e: any) => {
    // e.preventDefault();
  };

  return {
    person,
    handleInputChange,
    handleSubmit,
  };
};
