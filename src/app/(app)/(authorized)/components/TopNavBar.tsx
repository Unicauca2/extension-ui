"use client";

import { Stack } from "@mui/material";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Translator } from "../util/Translator";
import LogoutButton from "./LogoutButton";

export default function TopNavBar() {
  const { data }: any = useSession();
  const pathname = usePathname().split("/");
  let cummulativeCrumb = "";

  return (
    <header className="bg-[#ffffff] px-4 py-2 min-w-[310px]">
      <Stack direction="row" className="items-center justify-between">
        <div>
          {pathname.map((crumb, index) => {
            cummulativeCrumb += crumb + "/";
            return (
              <Link
                key={index}
                href={cummulativeCrumb}
                className="text-[#000066] font-semibold font-sans text-base hover:border-b-[#F58220] border-[#ffffff] border-b-2"
              >
                {Translator({ word: crumb })}/
              </Link>
            );
          })}
        </div>
        <div className="relative right-0">
          <Stack direction="row" alignItems="center" spacing={2}>
            <p className="h-full text-[#000066] font-semibold font-sans text-base">
              {data?.user?.name}
            </p>
            <div className="border-4 border-[#000066]/50 rounded-full pl-1 pb-1">
              <LogoutButton />
            </div>
          </Stack>
        </div>
      </Stack>
    </header>
  );
}
