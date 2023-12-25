"use client";

import GlobalIcon from "@/components/GlobalIcon";
import { ErrorMap } from "@/models/ErrorMap";
import { Button } from "@mui/material";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const Login = () => {
  const error = useSearchParams().get("error");
  return (
    <div className="my-2 bg-[#F6F6F6] rounded-3xl text-center text-[#000066] h-full">
      <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex flex-col items-center justify-center p-6">
          <h1 className="text-3xl font-bold text-gray-700 mb-2">Bienvenido</h1>
          <p className="text-gray-600">
            Por favor ingresa a través de tu cuenta de google para continuar.
          </p>
          <Button
            variant="outlined"
            color="primary"
            className="flex justify-center items-center w-full gap-1 mt-4"
            onClick={() => signIn("google", { callbackUrl: "/auth" })}
          >
            <div className="w-6">
              <GlobalIcon nameIcon="google-color" />
            </div>
            Inicia sesión con Google
          </Button>
        </div>
        {error && (
          <p className="m-4 text-gray-600">{ErrorMap[error] as string}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
