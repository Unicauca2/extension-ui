"use client";

import Image from "next/image";
import { useAppContext } from "@/app/context/AppContext";

interface programImageProps {
  width: number;
  height: number;
  type: string;
}

const ProgramImage = ({ width, height, type }: programImageProps) => {
  const { program } = useAppContext();
  if (!program || !type) return null;
  switch (type) {
    case "logo":
      return (
        <Image
          height={height - 10}
          className="w-full"
          src={"/" + program?.logo}
          alt="Image"
          width={width - 10}
        />
      );
    default:
      break;
  }
};

export default ProgramImage;
