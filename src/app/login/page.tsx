import Header from "./components/Header";
import Footer from "@/components/Footer";
import Login from "./components/Login";

export default function Home() {
  return (
    <body>
      <div
        className="bg-image bg-center absolute min-h-screen w-full flex flex-col"
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
      </div>
    </body>
  );
}
