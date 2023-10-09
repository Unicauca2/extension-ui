import React from "react";
import TabContext from "./tabContext";

const InfoPrograma = () => {
  return (
    <div className=" bg-[#ffffff] rounded-3xl text-[#092167] px-10 mt-8 mx-4  h-auto">
      <p className="pt-6  text-3xl  font-bold">Registro Aspirante</p>
      <p className="text-lg pt-2 pb-12">
        En el siguiente formulario usted realizará el registro en el Sistema de
        Inscripciones a Unilingua, una vez completado el proceso podrá iniciar
        sesión e inscribirse a los programas de la Unidad de Servicios en
        Lenguas Extranjeras de la Universidad del Cauca que están disponibles en
        el actual periodo académico.
      </p>
      <TabContext />
      <p className="pb-6">
        La Unidad de servicios en lenguas extranjeras, es un proyecto académico
        administrativo adscrito al Departamento de Lenguas Extranjeras y a la
        Facultad de Ciencias Humanas y Sociales de la Universidad del Cauca.
      </p>
    </div>
  );
};

export default InfoPrograma;
