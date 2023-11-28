"use client";

import { Box, List, Button } from "@mui/material";
import { useRef, useState } from "react";
import Schedule from "./components/Schedule";
import ListSubjects from "./components/ListSubjects";
import GlobalIcon from "@/components/GlobalIcon";

const days = [
  { id: 1, name: "Lunes" },
  { id: 2, name: "Martes" },
  { id: 3, name: "Miércoles" },
  { id: 4, name: "Jueves" },
  { id: 5, name: "Viernes" },
  { id: 6, name: "Sábado" },
];

const hours = [
  { id: 1, content: "7:00 am" },
  { id: 2, content: "8:00 am" },
  { id: 3, content: "9:00 am" },
  { id: 4, content: "10:00 am" },
  { id: 5, content: "11:00 am" },
  { id: 6, content: "12:00 am" },
  { id: 7, content: "1:00 pm" },
  { id: 10, content: "2:00 pm" },
  { id: 11, content: "3:00 pm" },
  { id: 12, content: "4:00 pm" },
  { id: 13, content: "5:00 pm" },
  { id: 14, content: "6:00 pm" },
  { id: 15, content: "7:00 pm" },
  { id: 15, content: "8:00 pm" },
];

interface subjectsObj {
  id: number;
  name: string;
  code?: string;
  classroom?: string;
  color: string;
  slots: {
    idDay: number;
    idStart: number;
    duration: number;
  }[];
}

const subjectsEnable: subjectsObj[] = [
  {
    id: 1,
    name: "Flauta I",
    code: "FL2023I",
    classroom: "Sala 315 - Hum",
    color: "bg-[#c63d96]",
    slots: [
      { idDay: 1, idStart: 1, duration: 4 },
      { idDay: 2, idStart: 5, duration: 2 },
    ],
  },
  {
    id: 2,
    name: "Guitarra I",
    code: "GT2023I",
    classroom: "Salón 124 - FIC",
    color: "bg-[#26c019]",
    slots: [
      { idDay: 1, idStart: 13, duration: 2 },
      { idDay: 2, idStart: 1, duration: 4 },
    ],
  },
  {
    id: 3,
    name: "Clarinete I",
    code: "CR2023I",
    classroom: "Sala 310 - FIET",
    color: "bg-[#ffb200]",
    slots: [
      { idDay: 4, idStart: 12, duration: 4 },
      { idDay: 5, idStart: 12, duration: 3 },
    ],
  },
  {
    id: 4,
    name: "Violin I",
    code: "VL2023I",
    classroom: "Sala 220 - Hum",
    color: "bg-[#092167]",
    slots: [
      { idDay: 6, idStart: 2, duration: 4 },
      { idDay: 3, idStart: 5, duration: 2 },
    ],
  },
];

export default function AcademicEnrollmentPage() {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [subjectsAssigned, setSubjectsAssigned] = useState<number[]>([]);
  const [deleteActive, setdeleteActive] = useState("");
  const dragSubject = useRef(0);

  return (
    <div className="w-full m-4 h-[85vh] min-h-[500px] min-w-[860px] mt-4 mb-3 bg-[#ffffff] rounded-bl-3xl rounded-tr-3xl">
      <div className="m-2">
        <p className="w-1/4 py-1 px-3 bg-[#85332A] text-[#ffffff] font-bold font-sans text-base rounded-xl">
          Matrícula Académica
        </p>
      </div>
      <Box className="w-9/10 h-5/6 m-2 flex">
        <div className="w-1/3 flex-1 h-full mr-2 border-[#000066] border-2 rounded-bl-3xl text-center">
          <p className="my-4 font-bold font-sans text-base text-[#000066]">
            Aquí podras realizar tu matrícula académica
          </p>

          <List className="h-[55vh] min-h-[300px] m-0 p-1 overflow-auto">
            <Box className="w-full px-0 pt-0 pb-2 align-top flex">
              <div className="h-7 m-0 px-2 py-0 text-white bg-[#0772B5] rounded-3xl font-bold">
                1
              </div>
              <div className="justify-start">
                <p className="my-0 mx-full font-semibold font-sans text-base text-[#000066]">
                  Puedes arrastrar y soltar en el horario una de las materias
                  disponibles para ti:{" "}
                </p>
                <ListSubjects
                  dragActive={dragActive}
                  setDragActive={setDragActive}
                  dragSubject={dragSubject}
                  hours={hours}
                  subjectsEnable={subjectsEnable}
                  subjectsAssigned={subjectsAssigned}
                />
              </div>
            </Box>
            <Box className="w-full px-0 pt-0 pb-2 align-top flex">
              <div className="h-7 m-0 px-2 py-0 text-white bg-[#0772B5] rounded-3xl font-bold">
                2
              </div>
              <div className="justify-start">
                <Button
                  onClick={() => {
                    return console.log(
                      "Confirmar Matrícula: ",
                      subjectsAssigned
                    );
                  }}
                  endIcon={<GlobalIcon nameIcon="taskIcon" />}
                  className="w-full rounded-2xl bg-[#000066] text-[#ffffff] border border-[#F6F6F6] border-solid font-semibold font-sans text-sm py-2 px-4 mb-5 hover:border-b-2 hover:border-[#000066] hover:bg-[#ffffff] hover:text-[#000066]"
                >
                  CONFIRMAR MATRÍCULA
                </Button>
              </div>
            </Box>
          </List>
        </div>
        <div className="w-3/4">
          <Schedule
            dragActive={dragActive}
            setDragActive={setDragActive}
            dragSubject={dragSubject}
            days={days}
            hours={hours}
            subjectsEnable={subjectsEnable}
            subjectsAssigned={subjectsAssigned}
            setSubjectsAssigned={setSubjectsAssigned}
            deleteActive={deleteActive}
            setdeleteActive={setdeleteActive}
          />
        </div>
      </Box>
    </div>
  );
}
