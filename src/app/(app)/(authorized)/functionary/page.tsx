import Footer from "@/components/Footer";

export default function Home() {
  return (
    <body
      className="min-h-screen w-full flex flex-col text-[17px] bg-image bg-center"
      style={{
        backgroundImage: `url("./app/home.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <header>header</header>
      <main className="flex-1 mx-auto">main</main>
      <footer className="text-[#fff] text-opacity-90">
        <Footer
          anyo={"2023"}
          contacto={"contacto@unicauca.edu.co"}
          entidad={"Universidad del Cauca"}
          version={"Versión: v1.0"}
        />
      </footer>
    </body>
  );
}
