"use client"

import { useState, SyntheticEvent } from "react";
import { TabContext } from "@mui/lab";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import TabsSelection from "./tabs";
import FileUploadField from "@/components/FileUploadField";
import { getApplicantForm } from "../models/Applicant";
import { Record } from "@/services/applicantService";
import { usePersonRegister } from "../hooks/usePersonRegister";

export default function CenteredTabs() {
  const { person, handleInputChange } = usePersonRegister();
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
            <TabsSelection
              value={value}
              handleChange={handleChange}
            />
          </Box>
          <TabPanel key={"1"} value={"1"} className="flex">
            <div className="w-2/3">
              {getApplicantForm({ applicant: person.applicant, credentials: person.credentials, handleInputChange })}
            </div>
            <div className="w-1/3">
              <FileUploadField name="applicant.document" label="Adjunto Documento Identidad" />
            </div>
          </TabPanel>
          <TabPanel key={"2"} value={"2"}><div> {Record(person.applicant)}</div></TabPanel>
          <TabPanel key={"3"} value={"3"}>Item Three</TabPanel>
          <TabPanel key={"4"} value={"4"}>Item Three</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
