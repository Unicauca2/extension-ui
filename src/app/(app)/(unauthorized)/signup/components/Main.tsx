import { getAddaptedTypes } from "../adapters/TypesAddapter";
import Client from "./_MainClient";

async function getData() {
  return getAddaptedTypes();
}

async function Main() {
  const data = await getData();
  return (
    <div className=" bg-[#ffffff] rounded-3xl text-[#092167] px-10 mt-8 mx-auto min-w-fit max-w-xl">
      <p className="pt-6  text-3xl  font-bold">Registro Aspirante</p>
      <p className="text-lg pt-2 pb-12">
        En el siguiente formulario usted realizará el registro en el Sistema de
        Inscripciones.
      </p>
      <Client types={data} />
    </div>
  );
}

export default Main;
