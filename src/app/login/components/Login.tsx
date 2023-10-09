"use client"

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Login = () => {
  const router = useSearchParams();
  const program = router.get("program");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate the username and password
    if (!username || !password) {
      return;
    }

    // Authenticate the user
    const data = {
      username,
      password,
    };

    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {

        }
      });
  };

  return (
    <div className=" bg-[#ffffff] rounded-3xl text-center text-[#092167] h-full">
      <p className="pt-5  text-3xl text-[#092167] font-bold">Iniciar Sesión</p>
      <form className="mt-4 sm:mt-14">
        <div className="flex mx-2 sm:mx-10  pb-5 items-center">
          <FontAwesomeIcon className="w-14 pl-0" icon={faUser} color="black" />
          <label className="block w-full">
            <input
              type="email"
              name="email"
              className=" mt-1 px-3 py-2 w-11/12 text-black bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none  block sm:w-full rounded-md sm:text-sm "
              placeholder="Usuario o identificación"
            />
          </label>
        </div>
        <div className="flex mx-2 sm:mx-10 pb-10 items-center ">
          <FontAwesomeIcon className="w-14" icon={faKey} color="black" />
          <label className="block w-full">
            <input
              type="email"
              name="email"
              className=" mt-1 px-3 py-2 w-11/12 text-black bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none  block sm:w-full rounded-md sm:text-sm "
              placeholder="Contraseña"
            />
          </label>
        </div>
        <div>
          <input
            className="w-1/2 rounded-2xl bg-[#092167] hover:bg-pink-700 text-[#ffffff] font-bold py-2 px-4 mb-2"
            type="submit"
            value={"Ingresar"}
          />
        </div>
      </form>

      <p className="font-medium underline">¿Olvidaste tu contraseña?</p>

      <p className="mt-10 sm:mt-16">
        ¿No tienes cuenta? Puedes registrarte utilizando el siguiente botón
      </p>

      <div className="my-6 pb-5">
        <Link className="w-1/2 rounded-2xl bg-[#092167] hover:bg-pink-700 text-[#ffffff] font-bold py-2 px-4 mb-2"
          href={{ pathname: `/signup`, query: { program: program } }}>
          Registrar
        </Link>
      </div>
    </div>
  );
};

export default Login;
