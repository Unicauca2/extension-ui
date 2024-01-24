"use client";

import { useAppContext } from "@/app/context/AppContext";
import { useSession } from "next-auth/react";
import Main from "./components/Main";

export default function ClassGroups() {
  const { program } = useAppContext();
  const { data } = useSession();
  return (
    <div className="m-4 pb-10 bg-[#ffffff] w-full rounded-3xl">
      <Main idProgram={program?.id} user={data?.user?.email} />
    </div>
  );
}
