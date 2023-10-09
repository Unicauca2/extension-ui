import { Fragment } from "react";
import ActionAreaCard from "@/components/ActionAreaCard";

export default function Main() {
  return (
    <Fragment>
      <div
        className="md:pt-20 flex flex-col lg:flex-row gap-y-8 gap-x-20 h-full max-w-[1425px] mx-auto md:px-[90px] justify-center"
      >
        <ActionAreaCard src={"./conservatorio/logo.png"} title={"Conservatorio"} />
        <ActionAreaCard src={"./unilingua/logo.png"} title={"Unilingua"} />
      </div>
    </Fragment>
  );
}
