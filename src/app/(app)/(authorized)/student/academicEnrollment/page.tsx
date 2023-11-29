"use client";

import { Box, List, Button, Alert } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import Schedule from "./components/Schedule";
import ListSubjects from "./components/ListSubjects";
import GlobalIcon from "@/components/GlobalIcon";
import { useSubjectsEnrollment } from "./hooks/useSubjectsEnrollment";
import AcceptAssignmentDialog from "./components/_ScheduleAcceptAssignment";
import { subjectsEnable as subjectsEnableInitialValues } from "./models/subjectsEnableInitialValues";

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

const LOCAL_STORAGE_KEY = "subjectsEnable";

export default function AcademicEnrollmentPage() {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const { subjectsAssigned, setSubjectsAssigned } = useSubjectsEnrollment();
  const [deleteActive, setDeleteActive] = useState("");
  const dragSubject = useRef(0);
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const [openDialogAccept, setOpenDialogAccept] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const [subjectsEnable, setsubjectsEnable] = useState<
    typeof subjectsEnableInitialValues
  >(() => {
    const isLocalStorageAvailable =
      typeof window !== "undefined" && window.localStorage;

    const savedSubjectsEnable = isLocalStorageAvailable
      ? localStorage.getItem(LOCAL_STORAGE_KEY)
      : null;
    if (!savedSubjectsEnable) return subjectsEnableInitialValues;
    let aux = JSON.parse(savedSubjectsEnable);
    return aux;
  });

  useEffect(() => {
    setTimeout(() => {
      setOpenAlert(false);
    }, 3000);
  }, [openAlert]);

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
                    if (!openDialogAccept && !openDialogDelete) {
                      if (subjectsAssigned.length > 0) {
                        setOpenDialogAccept(true);
                        setOpenAlert(false);
                      } else {
                        setOpenAlert(true);
                      }
                    }
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
            setDeleteActive={setDeleteActive}
            openDialogDelete={openDialogDelete}
            setOpenDialogDelete={setOpenDialogDelete}
            openDialogAccept={openDialogAccept}
          />
        </div>
      </Box>
      <AcceptAssignmentDialog
        openDialogAccept={openDialogAccept}
        setOpenDialogAccept={setOpenDialogAccept}
        subjectsAssigned={subjectsAssigned}
      />
      {openAlert ? (
        <Alert
          severity="warning"
          className="w-[60vh] shadow-2xl bottom-4 justify-end right-0 absolute"
        >
          No se ha asignado ninguna de las materias disponibles
        </Alert>
      ) : null}
    </div>
  );
}
