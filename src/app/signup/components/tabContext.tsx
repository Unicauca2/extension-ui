"use client";

import { useState, SyntheticEvent } from "react";
import { TabContext } from "@mui/lab";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import TabsSelection from "./tabs";
import FileUploadField from "@/components/FileUploadField";
import { getApplicantElements } from "../models/Applicant";
import { Record } from "@/services/applicantService";
import { usePersonRegister } from "../hooks/usePersonRegister";
import FormBuilder from "@/utils/FormBuilder";
import { getResidencyElements } from "../models/Residency";

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

export default function CenteredTabs() {
  const { person, handleInputChange } = usePersonRegister();

  console.log(person);

  const [value, setValue] = useState("1");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <div className="mx-0 2xl:mx-20">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "green", color: "white" }}>
            <TabsSelection value={value} handleChange={handleChange} />
          </Box>
          <TabPanel
            key={"1"}
            value={"1"}
            className={value === "1" ? "flex" : ""}
          >
            <div className="w-2/3">
              <FormBuilder
                boxType="div"
                boxStyles={styles}
                elements={getApplicantElements({
                  applicant: person.applicant,
                  credentials: person.credentials,
                  handleInputChange,
                })}
              />
            </div>
            <FileUploadField
              name="applicant.document"
              label={
                person.applicant.document
                  ? "Cambiar documento adjunto"
                  : "Adjunto Documento Identidad"
              }
              document={person.applicant.document}
              className="w-1/3"
              handleInputChange={handleInputChange}
            />
          </TabPanel>
          <TabPanel key={"2"} value={"2"}>
            <FormBuilder
              boxType="div"
              boxStyles={styles}
              elements={getResidencyElements({
                residency: person.residency,
                handleInputChange,
              })}
            />
          </TabPanel>
          <TabPanel key={"3"} value={"3"}>
            <FormBuilder
              boxType="div"
              boxStyles={styles}
              elements={getApplicantElements({
                applicant: person.applicant,
                credentials: person.credentials,
                handleInputChange,
              })}
            />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
