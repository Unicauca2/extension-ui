"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";

interface programImageProps {
  width: number;
  height: number;
  fileName: string;
}

const ProgramImage = ({ width, height, fileName }: programImageProps) => {
  const router = useSearchParams();
  const program = router.get("program");
  return (
    <Image
      height={height - 10}
      className="w-full"
      src={"/" + program?.toLowerCase() + "/" + fileName}
      alt="Image"
      width={width - 10}
    />
  );
};

export default ProgramImage;
