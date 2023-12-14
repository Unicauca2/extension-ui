import { Fragment } from "react";
import ProgramSelection from "./ProgramSelection";

export default function Main() {
  return (
    <Fragment>
      <div className="md:pt-10 flex flex-col lg:flex-row gap-y-8 gap-x-20 h-full max-w-[1425px] mx-auto md:px-[90px] justify-center">
        <ProgramSelection />
      </div>
    </Fragment>
  );
}
