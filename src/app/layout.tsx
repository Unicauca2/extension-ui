import "./globals.css";
import { AppProvider } from "./context/AppContext";

import type { Metadata } from "next";
import { ReactNode } from "react";
import React from "react";
export const metadata: Metadata = {
  title: "Programas Extension Unicauca",
  description:
    "Sistema academico de Unicauca, programas Unilingua - Conservatorio de musica",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="text-[#092167]">
      <AppProvider>{children}</AppProvider>
    </html>
  );
}
