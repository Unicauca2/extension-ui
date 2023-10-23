"use client";

import { useState, SyntheticEvent } from "react";
import { TabContext } from "@mui/lab";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import TabsSelection from "./Tabs";
import FileUploadField from "@/components/FileUploadField";
import { getApplicantElements } from "../models/Applicant";
import { usePersonRegister } from "../hooks/usePersonRegister";
import FormBuilder from "@/utils/FormBuilder";
import { getResidencyElements } from "../models/Residency";
import { getGuardianElements } from "../models/Guardian";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const styles = {
  "& .MuiTextField-root": { m: 1, width: "23%" },
  "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
    borderRadius: "25px",
  },
  "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root": {
    borderRadius: "25px",
  },
  "& .MuiStack-root": {
    width: "24.6%",
  },
  "& .MuiSelect-select": {
    backgroundColor: "inherit",
  },
  "& .css-h0q0iv-MuiButtonBase-root-MuiTab-root.Mui-selected": {
    color: "inherit",
  },
};

interface Props {
  types: {
    [key: string]: {
      value: number | string;
      label: string;
    }[];
  };
}

export default function TabsContext({ types }: Props) {
  const { person, handleInputChange } = usePersonRegister();
  const [value, setValue] = useState("1");
  const [completed, setCompleted] = useState(false);
  const handleTabChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const handleSubmit = () => {};

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "#092167", color: "white" }}>
          <TabsSelection
            object={person}
            value={value}
            handleChange={handleTabChange}
            handleComplete={setCompleted}
          />
        </Box>
        <TabPanel key={"1"} value={"1"} className={value === "1" ? "flex" : ""}>
          <div className="w-2/3">
            <FormBuilder
              boxType="div"
              boxStyles={styles}
              elements={getApplicantElements({
                applicant: person.applicant,
                credentials: person.credentials,
                types: types,
              })}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="w-1/3">
            <FileUploadField
              name="applicant.document"
              label={
                person.applicant.document
                  ? "Cambiar documento adjunto"
                  : "Adjunto Documento Identidad"
              }
              document={person.applicant.document}
              className=""
              handleInputChange={handleInputChange}
            />
          </div>
        </TabPanel>
        <TabPanel key={"2"} value={"2"}>
          <FormBuilder
            boxType="div"
            boxStyles={styles}
            elements={getResidencyElements({
              residency: person.residency,
              types: types,
            })}
            handleInputChange={handleInputChange}
          />
        </TabPanel>
        <TabPanel key={"3"} value={"3"}>
          <FormBuilder
            boxType="div"
            boxStyles={styles}
            elements={getGuardianElements({
              guardian: person.guardian,
              types: types,
            })}
            handleInputChange={handleInputChange}
          />
        </TabPanel>
      </TabContext>
      <div className="mx-auto text-center mt-4 mb-8">
        <Button
          disabled={!completed}
          variant={completed ? "contained" : "outlined"}
          sx={{ background: completed ? "bg-[#092167]" : "" }}
          className="mx-auto"
          size="large"
          endIcon={<SendIcon />}
          onClick={handleSubmit}
        >
          Completar registro
        </Button>
      </div>
    </Box>
  );
}
