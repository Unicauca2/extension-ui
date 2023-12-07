import Header from "../login/components/Header";
import Main from "./components/Main";
import FooterHome from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header
        src_universidad={"./unicauca/logo_negro.png"}
        width={100}
        height={100}
      />
      <div className="items-center flex-1 mx-auto">
        <Main />
      </div>
      <div>
        <FooterHome
          anyo={"2023"}
          contacto={"contacto@unicauca.edu.co"}
          entidad={"Universidad del Cauca"}
          version={"Versión: v1.0"}
        />
      </div>
    </>
  );
}
