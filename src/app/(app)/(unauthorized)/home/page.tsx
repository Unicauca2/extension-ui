import Footer from "@/components/Footer";
import Header from "@/app/(app)/(unauthorized)/components/Header";
import Main from "@/app/(app)/(unauthorized)/components/Main";

export default function Home() {
  return (
    <>
      <header>
        <Header
          src={"./unicauca/logo_blanco.png"}
          title={"PROGRAMAS DE EXTENSIÓN"}
          label={"UNIVERSIDAD DEL CAUCA"}
        />
      </header>
      <main className="flex-1 mx-auto">
        <Main />
      </main>
      <footer className="text-[#fff] text-opacity-90">
        <Footer
          anyo={"2023"}
          contacto={"contacto@unicauca.edu.co"}
          entidad={"Universidad del Cauca"}
          version={"Versión: v1.0"}
        />
      </footer>
    </>
  );
}
