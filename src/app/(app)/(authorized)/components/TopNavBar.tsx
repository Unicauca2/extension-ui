"use client";

import { Stack } from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import GlobalIcon from "@/components/GlobalIcon";

const user = {
  id: "1110101",
  name: "Santiago",
};

export default function TopNavBar() {
  const pathname = usePathname().split("/");
  let cummulativeCrumb = "";

  return (
    <header className="w-full  bg-[#ffffff] px-4 py-2 ">
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
                {crumb}/
              </Link>
            );
          })}
        </div>
        <div className="relative right-0">
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <p className="h-full text-[#000066] font-semibold font-sans text-base">
              {user.name}
            </p>
            <GlobalIcon
              nameIcon="accountCircleOutlined"
              className="text-[#000066]"
            />
            <LogoutButton />
          </Stack>
        </div>
      </Stack>
    </header>
  );
}
