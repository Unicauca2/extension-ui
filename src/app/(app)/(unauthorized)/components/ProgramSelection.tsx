"use client";

import { Fragment, useEffect } from "react";
import ActionAreaCard from "@/components/ActionAreaCard";
import { useAppContext } from "../../../context/AppContext";
import { signOut } from "next-auth/react";

export default function ProgramSelection() {
  const { programList, handleProgramSelected } = useAppContext();

  useEffect(() => {
    signOut({ redirect: false });
  }, []);

  return (
    <Fragment>
      {Object.values(programList).map((program) => (
        <ActionAreaCard
          key={program.id}
          src={program.logo}
          title={program.name}
          onClick={() => handleProgramSelected(program.id)}
        />
      ))}
    </Fragment>
  );
}
