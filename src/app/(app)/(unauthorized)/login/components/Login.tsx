"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@mui/material";

const Login = () => {
  const router = useSearchParams();
  const program = router.get("program");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!username || !password) {
      return;
    }
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
    <div className="bg-[#F6F6F6] rounded-3xl text-center text-[#000066] h-full">
      <p className="pt-5  text-2xl font-bold">Iniciar Sesión en</p>
      <p className="text-2xl font-bold">{program}</p>
      <form className="mt-4">
        <div className="flex mx-2 sm:mx-10  pb-5 ">
          <label className="w-full flex flex-col">
            <p className="text-left ml-4 text-base font-sans font-semibold mb-2">
              Usuario
            </p>
            <input
              type="text"
              name="user"
              className="mx-4 px-4 py-4 w-11/12 text-[#000066] bg-[#ffffff] rounded-3xl focus:text-[#454444] outline-[#000066]"
              placeholder="usuario"
            />
          </label>
        </div>
        <div className="flex mx-2 sm:mx-10 pb-10  ">
          <label className="w-full flex flex-col">
            <p className="text-left ml-4 text-base font-sans font-semibold mb-2">
              Contraseña
            </p>
            <input
              type="password"
              name="password"
              className="mx-4 px-4 py-4 w-11/12 text-[#000066] bg-[#ffffff] rounded-3xl focus:text-[#454444] outline-[#000066]"
              placeholder="********"
            />
          </label>
        </div>
        <div>
          {/* <Button
            onClick={() => {
              return;
            }}
            sx={{
              width: "40%",
              borderRadius: "24px",
              backgroundColor: "#000066 !important",
              color: "#ffffff",
              border: "1px",
              borderColor: "#F6F6F6",
              borderStyle: "solid",
              fontWeight: "700",
              py: "2",
              px: "4",
              mb: "2",
              "&:hover": {
                backgroundColor: "#ffffff !important",
                color: "#000066",
                borderColor: "#000066",
              },
            }}
          >
            Ingresar
          </Button> */}
          <Link
            href={{ pathname: `/functionary` }}
            className="w-1/2 rounded-2xl hover:bg-[#ffffff] bg-[#000066] hover:text-[#000066] text-[#ffffff] border border-[#000066] font-bold py-2 px-4 mb-2"
          >
            Registrar
          </Link>
        </div>
      </form>

      <p className="font-medium underline mt-2">¿Olvidaste tu contraseña?</p>

      <p className="mt-10 sm:mt-16 mx-4">
        ¿No tienes cuenta? Puedes registrarte utilizando el siguiente botón
      </p>

      <div className="mb-6 py-5">
        <Link
          href={{ pathname: `/signup` }}
          className="w-1/2 rounded-2xl bg-[#ffffff] hover:bg-[#000066] hover:text-[#ffffff] border border-[#000066] font-bold py-2 px-4 mb-2"
        >
          Registrar
        </Link>
      </div>
    </div>
  );
};

export default Login;
