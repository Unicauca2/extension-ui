import GlobalIcon from "@/components/GlobalIcon";
import { Box, Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface Props {
  openDialogDelete: boolean;
  subjectsAssigned: number[];
  sub: any;
  setOpenDialogDelete: Dispatch<SetStateAction<boolean>>;
  setDeleteActive: Dispatch<SetStateAction<string>>;
}
export default function DeleteAssignmentDialog({
  openDialogDelete,
  subjectsAssigned,
  sub,
  setOpenDialogDelete,
  setDeleteActive,
}: Props) {
  return (
    <dialog
      open={openDialogDelete}
      onClose={() => {
        setOpenDialogDelete(false);
        setDeleteActive("");
      }}
      className="bg-[#F6F6F6] rounded-xl shadow-2xl top-4 justify-center"
    >
      <Box className="bg-[#F6F6F6] mx-5 my-2">
        <GlobalIcon
          nameIcon="warningIcon"
          className="text-[#000066] text-7xl h-full"
        />
        <p className="mb-4 text-[#000066] font-sans text-base font-semibold">
          ¿Desea eliminar la materia asignada {sub[1]}?
        </p>
        <Button
          className="w-2/5 mr-4 rounded-2xl bg-[#000066] text-[#ffffff] border border-[#F6F6F6] border-solid font-bold py-2 px-4 mb-5 hover:border-b-2 hover:border-[#000066] hover:bg-[#ffffff] hover:text-[#000066]"
          onClick={() => {
            setOpenDialogDelete(false);
            setDeleteActive("");
          }}
        >
          CANCELAR
        </Button>
        <Button
          className="w-2/5 ml-4 rounded-2xl bg-[#000066] text-[#ffffff] border border-[#F6F6F6] border-solid font-bold py-2 px-4 mb-5 hover:border-b-2 hover:border-[#000066] hover:bg-[#ffffff] hover:text-[#000066]"
          onClick={() => {
            subjectsAssigned.splice(
              subjectsAssigned.findIndex((e) => e == sub[0]),
              1
            );
            setOpenDialogDelete(false);
            setDeleteActive("");
          }}
        >
          ELIMINAR
        </Button>
      </Box>
    </dialog>
  );
}
