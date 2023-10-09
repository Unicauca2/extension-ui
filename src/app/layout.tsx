import "./globals.css";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Programas Extension Unicauca",
  description: "Sistema academico de Unicauca, programas Unilingua - Conservatorio de musica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" >
      {children}
    </html>
  );
}
