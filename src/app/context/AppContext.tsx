"use client";

import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
interface ProgramData {
  id: number;
  name: string;
  logo: string;
  record: string;
}

const programList = {
  "10": {
    id: 10,
    name: "Conservatorio",
    logo: "./conservatorio/logo.png",
    record: "/v1/applicant/conservatorio/record",
  },
  "85": {
    id: 85,
    name: "Unilingua",
    logo: "./unilingua/logo.png",
    record: "/v1/applicant/unilingua/record",
  },
} as { [key: string]: ProgramData };

interface AppContextProps {
  handleProgramSelected: (id: number) => void;
  programList: { [key: string]: ProgramData };
  program: ProgramData | undefined;
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

  return (
    <AppContext.Provider
      value={{
        handleProgramSelected,
        programList,
        program,
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
