import Footer from "@/components/Footer";
import Login from "./components/Login";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <>
      <div className="flex-1 mx-auto flex">
        <div className="my-auto">
          <Suspense fallback={<>Loading...</>}>
            <Login />
          </Suspense>
        </div>
      </div>
      <div>
        <Footer
          anyo={"2023"}
          contacto={"contacto@unicauca.edu.co"}
          entidad={"Universidad del Cauca"}
          version={"Versión: v1.0"}
        />
      </div>
    </>
  );
}
