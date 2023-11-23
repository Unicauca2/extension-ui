"use client";

import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import GlobalIcon from "@/components/GlobalIcon";
import DeleteAssignmentDialog from "./_ScheduleDeleteAssignment";

interface Props {
  dragActive: any;
  setDragActive: any;
  dragSubject: any;
  days: {
    id: number;
    name: string;
  }[];
  hours: {
    id: number;
    content: string;
  }[];
  subjectsEnable: {
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
  }[];
  subjectsAssigned: number[];
  setSubjectsAssigned: Dispatch<SetStateAction<number[]>>;
}

export default function Schedule({
  dragActive,
  setDragActive,
  dragSubject,
  days,
  hours,
  subjectsEnable,
  subjectsAssigned,
}: Props) {
  const dragMap = new Map();
  const spanDragMap = new Map();
  const selectMap = new Map();
  const spanSelectMap = new Map();
  const [deleteActive, setdeleteActive] = useState("");
  const [openDialog, setopenDialog] = useState(false);

  subjectsEnable
    .find((e) => e.id == dragSubject.current)
    ?.slots.map((slot) => {
      dragMap.set(slot.idDay + "-" + slot.idStart, [
        dragSubject.current,
        slot.duration,
      ]);
      for (let i = 1; i < slot.duration; i++) {
        spanDragMap.set(slot.idDay + "-" + (slot.idStart + i), dragSubject);
      }
    });

  subjectsAssigned?.forEach((idAsigned) => {
    let subjectAux = subjectsEnable.find((e) => e.id == idAsigned);
    if (subjectAux) {
      subjectAux.slots.map((slot) => {
        selectMap.set(slot.idDay + "-" + slot.idStart, [
          subjectAux?.id,
          subjectAux?.name,
          subjectAux?.classroom,
          subjectAux?.color,
          slot.duration,
        ]);
        for (let i = 1; i < slot.duration; i++) {
          spanSelectMap.set(slot.idDay + "-" + (slot.idStart + i), idAsigned);
        }
      });
    }
  });

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  function handleOnDragEnd(e: React.DragEvent, idS: number) {
    e.preventDefault();
    setDragActive(false);
    subjectsAssigned.push(idS);
    console.log(subjectsAssigned);
  }

  return (
    <table className="w-full h-full rounded-tr-3xl">
      <tbody>
        <tr className="w-full">
          <th className="w-[110px] bg-[#0772B5] text-white font-semibold text-center">
            Hora
          </th>
          {days.map((itemD, indexD) => (
            <th
              key={"d-" + indexD}
              className="bg-[#0772B5] text-white font-semibold text-center"
            >
              {itemD.name}
            </th>
          ))}
        </tr>
        {hours.map((itemH, indexH) =>
          indexH.valueOf() != 6 && indexH.valueOf() < hours.length - 1 ? (
            <tr key={"h" + indexH} className="w-full">
              {(indexH % 2 == 0 && indexH < 6) ||
              (indexH % 2 != 0 && indexH > 6) ? (
                <td
                  key={"hour-" + indexH}
                  rowSpan={2}
                  className="h-full text-center border border-[#0772b567]"
                >
                  {itemH.content + "-" + hours[indexH.valueOf() + 2].content}
                </td>
              ) : null}
              {days.map((itemD, indexD) => {
                if (selectMap.has(itemD.id + "-" + itemH.id)) {
                  let sub = selectMap.get(itemD.id + "-" + itemH.id);
                  return (
                    <td
                      key={indexD + "-" + indexH}
                      rowSpan={sub[4]}
                      className={`h-full w-[110px] text-center border ${sub[3]}`}
                      onMouseOver={() => {
                        if (!openDialog) {
                          setdeleteActive(sub[0] + "-" + sub[4]);
                        }
                      }}
                      onMouseLeave={() => {
                        if (!openDialog) {
                          setdeleteActive("");
                        }
                      }}
                    >
                      {deleteActive != "" &&
                      deleteActive == sub[0] + "-" + sub[4] ? (
                        <div>
                          <Button
                            className="h-full w-full text-[#ffffff]"
                            onClick={() => {
                              if (!openDialog) {
                                setopenDialog(true);
                              }
                            }}
                          >
                            <GlobalIcon nameIcon="deleteIcon" />
                          </Button>
                          <DeleteAssignmentDialog
                            openDialog={openDialog}
                            subjectsAssigned={subjectsAssigned}
                            sub={sub}
                            setDeleteActive={setdeleteActive}
                            setOpenDialog={setopenDialog}
                          />
                        </div>
                      ) : (
                        <p className="text-white">
                          {sub[1]}
                          <br></br>
                          {sub[2]}
                        </p>
                      )}
                    </td>
                  );
                } else {
                  return spanSelectMap.has(
                    itemD.id + "-" + itemH.id
                  ) ? null : dragActive ? (
                    dragMap.has(itemD.id + "-" + itemH.id) ? (
                      <td
                        key={indexD + "-" + indexH}
                        rowSpan={dragMap.get(itemD.id + "-" + itemH.id)[1]}
                        className={`text-center border bg-gray-300 rounded-xl`}
                        onDragOver={(e) => {
                          handleDragOver(e);
                        }}
                        onDrop={(e) => {
                          handleOnDragEnd(e, dragSubject.current);
                        }}
                      ></td>
                    ) : spanDragMap.has(itemD.id + "-" + itemH.id) ? null : (
                      <td
                        key={indexD + "-" + indexH}
                        className="h-[29px] w-1/7 text-center border border-[#0772b567]"
                      ></td>
                    )
                  ) : (
                    <td
                      key={indexD + "-" + indexH}
                      className="h-[29px] w-1/7 text-center border border-[#0772b567]"
                    ></td>
                  );
                }
              })}
            </tr>
          ) : null
        )}
      </tbody>
    </table>
  );
}
