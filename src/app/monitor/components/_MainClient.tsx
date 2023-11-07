"use client";

import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import List from "./List";

export default function MainClient() {
  return (
    <main className="bg-[#ffffff] h-5/6 my-auto flex">
      <Box
        sx={{
          m: 2,
          width: "30%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <section className="flex">
          <div className="my-auto">
            <Link className="rounded-2xl" href={"/student"}>
              <ArrowBackIcon fontSize="large" />
            </Link>
          </div>
          <p className="bg-[#85332A] text-[#ffffff] w-full border border-black rounded-xl p-2 self-center">
            Matricula Academica
          </p>
        </section>
        <section className="mt-4 flex-1 h-full border-slate-950 border-2 rounded-md">
          <List
            icon="inboxIcon"
            title="Primer semestre"
            items={[{ label: "Clarinete" }, { label: "Saxofon" }]}
          />
        </section>
      </Box>
      <Box sx={{ height: "100%", width: "100%" }}>Grilla horario</Box>
    </main>
  );
}
