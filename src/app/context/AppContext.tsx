"use client";

import APIUrls from "@/models/APIUrls";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
interface ProgramData {
  id: number;
  name: string;
  logo: string;
  recordApplicantURL: string;
}
interface AppParams {
  id: number;
  idPeriod: number;
  payDayLimit: string;
  idProcess: number;
}

const programList = {
  "10": {
    id: 10,
    name: "Conservatorio",
    logo: "./conservatorio/logo.png",
    recordApplicantURL: "/v1/applicant/conservatorio/record",
  },
  "85": {
    id: 85,
    name: "Unilingua",
    logo: "./unilingua/logo.png",
    recordApplicantURL: "/v1/applicant/unilingua/record",
  },
} as { [key: string]: ProgramData };

interface AppContextProps {
  handleProgramSelected: (id: number) => void;
  programList: { [key: string]: ProgramData };
  program: ProgramData | undefined;
  appParams: AppParams | undefined;
}

const LOCAL_STORAGE_KEY = "appState";

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [program, setProgram] = useState<ProgramData | undefined>(() => {
    const isLocalStorageAvailable =
      typeof window !== "undefined" && window.localStorage;

    const savedProgram = isLocalStorageAvailable
      ? localStorage.getItem(LOCAL_STORAGE_KEY)
      : null;
    return savedProgram ? JSON.parse(savedProgram) : undefined;
  });
  const handleProgramSelected = (id: number) => {
    setProgram(programList[id]);
  };
  useEffect(() => {
    const isLocalStorageAvailable =
      typeof window !== "undefined" && window.localStorage;
    if (isLocalStorageAvailable && program) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(program));
    }
  }, [program]);

  const [appParams, setAppParams] = useState<AppParams>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API + APIUrls.getAppParams,
          {
            next: { revalidate: 86400 },
          }
        );
        if (!response.ok) {
          setAppParams(undefined);
        }
        const data = await response.json();
        console.log(data);
        setAppParams(data.result);
      } catch (error) {
        setAppParams(undefined);
      }
    };
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        handleProgramSelected,
        programList,
        program,
        appParams,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe ser usado dentro de un AppProvider");
  }
  return context;
};
