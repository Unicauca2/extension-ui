import Header from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Header
          src={"/unicauca/logo_blanco.png"}
          title={"PROGRAMAS DE EXTENSIÓN"}
          label={"UNIVERSIDAD DEL CAUCA"}
        />
      </header>
      {children}
    </>
  );
}
