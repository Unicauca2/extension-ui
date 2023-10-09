"use client"

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import ProgramImage from "@/components/ProgramImage";

const ProgramInfo = () => {
  const router = useSearchParams();
  const program = router.get("programa");
  return (
    <div className=" bg-[#ffffff] rounded-3xl  text-center text-[#092167] px-10 h-5/6">
      <p className="py-5  text-3xl text-[#960D0D] font-bold">
        Sistema de Inscripciones {program}
      </p>
      <div className="object-contain pb-5">
        <ProgramImage width={950} height={440} fileName="login.png" />
      </div>
      <p className="pb-8">
        La Unidad de servicios en lenguas extranjeras, es un proyecto académico
        administrativo adscrito al Departamento de Lenguas Extranjeras y a la
        Facultad de Ciencias Humanas y Sociales de la Universidad del Cauca.
      </p>
    </div>
  );
};

export default ProgramInfo;
