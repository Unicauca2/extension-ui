import GlobalIcon from "@/components/GlobalIcon";
import { Box, Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface Props {
  openDialog: boolean;
  subjectsAssigned: number[];
  sub: any;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setDeleteActive: Dispatch<SetStateAction<string>>;
}
export default function DeleteAssignmentDialog({
  openDialog,
  subjectsAssigned,
  sub,
  setOpenDialog,
  setDeleteActive,
}: Props) {
  return (
    <dialog
      open={openDialog}
      onClose={() => {
        setOpenDialog(false);
        setDeleteActive("");
      }}
      className="bg-[#ffffff] rounded-2xl border border-[#000066] top-4 justify-center"
    >
      <Box className="bg-[#ffffff] mx-5 my-2">
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
            setOpenDialog(false);
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
            setOpenDialog(false);
            setDeleteActive("");
          }}
        >
          ELIMINAR
        </Button>
      </Box>
    </dialog>
  );
}
