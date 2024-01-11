"use client";

import { useAppContext } from "@/app/context/AppContext";
import { useSession } from "next-auth/react";
import Parametrizer from "./components/Parametrizer";

export default function ClassGroups() {
  const { program } = useAppContext();
  const { data } = useSession();
  return (
    <div className="m-4 pb-10 bg-[#ffffff] w-full rounded-3xl">
      <Parametrizer idProgram={program?.id} user={data?.user?.email} />
    </div>
  );
}
