import Header from "./components/Header";
import Footer from "@/components/Footer";
import ProgramInfo from "./components/ProgramInfo";
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
        <div className="flex-1 mx-auto flex flex-col-reverse xl:flex-row items-center pt-10">
          <div className="lg:w-3/5 w-3/4 xl:mx-5 2xl:mx-10">
            <ProgramInfo />
          </div>
          <div className="lg:w-2/5 w-3/4 sm:w-3/5 xl:mx-5 2xl:mx-10">
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
  )
}
