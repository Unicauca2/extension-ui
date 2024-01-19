import Footer from "@/components/Footer";
import Login from "./components/Login";

export default function Home() {
  return (
    <>
      <div className="flex-1 mx-auto flex">
        <div className="my-auto">
          <Login />
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
