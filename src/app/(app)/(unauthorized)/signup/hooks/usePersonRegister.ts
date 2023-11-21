import { useEffect, useState } from "react";
import {
  ApplicantRegistry,
  personInitialValues,
} from "../models/ApplicantRegistry";
import { modifyObject } from "@/utils/RecursiveObjects";

const LOCAL_STORAGE_KEY = "applicantRegistryState";

export const usePersonRegister = () => {
  const [person, setPerson] = useState<ApplicantRegistry>(() => {
    const isLocalStorageAvailable =
      typeof window !== "undefined" && window.localStorage;

    const savedProgram = isLocalStorageAvailable
      ? localStorage.getItem(LOCAL_STORAGE_KEY)
      : null;
    if (!savedProgram) return personInitialValues;
    let aux = JSON.parse(savedProgram);
    aux.applicant.document = undefined;
    aux.applicant.photo = undefined;
    return aux;
  });
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(person));
  }, [person]);

  const handleInputChange = (propsPath: string[], value: any) => {
    setPerson(modifyObject(propsPath, value, person));
  };

  return {
    person,
    handleInputChange,
  };
};
