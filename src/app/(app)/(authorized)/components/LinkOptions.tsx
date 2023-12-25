"use client";

import GlobalIcon from "@/components/GlobalIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  options: { link: string; label: string }[];
}
export default function LinkOptions({ options }: Props) {
  const pathname = usePathname();
  const headPathName = pathname.slice(0, pathname.lastIndexOf("/"));
  const tailPathname = pathname.slice(pathname.lastIndexOf("/") + 1);
  const active = options.find((option) => option.link === tailPathname);
  return (
    <>
      <div className="absolute float-left flex m-4">
        <Link href={"/" + pathname.split("/")[1]} className="z-10">
          <div className="flex items-center">
            <GlobalIcon nameIcon="back" />
            <span className="ml-2">Volver</span>
          </div>
        </Link>
      </div>
      <div className="m-4 flex flex-wrap justify-center relative">
        {options.map((option, index) => (
          <Link key={index} href={`${headPathName}/${option.link}`}>
            <div
              className={`font-semibold text-md ${
                active?.link === option.link
                  ? "bg-[#85332A] text-[#ffffff]"
                  : "bg-[#ffffff] text-[#092167]"
              } border rounded-md p-2 mx-4`}
            >
              {option.label}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
