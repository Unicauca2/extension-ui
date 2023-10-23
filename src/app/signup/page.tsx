import Header from "../login/components/Header";
import SignUpContainer from "./components/signupContainer";
import FooterHome from "@/components/Footer";

export default function Home() {
  return (
    <body
      className="bg-image bg-center min-h-screen w-full flex flex-col"
      style={{
        backgroundImage: `url("./app/login.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Header
        src_universidad={"./unicauca/logo_negro.png"}
        width={110}
        height={110}
      />
      <div className="items-center flex-1 mx-auto">
        <SignUpContainer />
      </div>
      <div>
        <FooterHome
          anyo={"2023"}
          contacto={"contacto@unicauca.edu.co"}
          entidad={"Universidad del Cauca"}
          version={"Versión: v1.0"}
        />
      </div>
    </body>
  );
}
