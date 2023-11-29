import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "subjectsEnrollmentState";

export const useSubjectsEnrollment = () => {
    const [subjectsAssigned, setSubjectsAssigned] = useState<number[]>(() => {
        const isLocalStorageAvailable =
          typeof window !== "undefined" && window.localStorage;
    
        const savedProgram = isLocalStorageAvailable
          ? localStorage.getItem(LOCAL_STORAGE_KEY)
          : null;
        if (!savedProgram) return [];
        let aux = JSON.parse(savedProgram);
        return aux;
    });

    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(subjectsAssigned));
    },);

    return {
      subjectsAssigned,
      setSubjectsAssigned
    };
};
