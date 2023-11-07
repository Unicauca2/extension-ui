"use client";

import { Fragment } from "react";
import ActionAreaCard from "@/components/ActionAreaCard";
import { useAppContext } from "../context/AppContext";

export default function ProgramSelection() {
  const { programList, handleProgramSelected } = useAppContext();
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
