"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import { usePersonRegister } from "../hooks/usePersonRegister";
import FormBuilder from "@/utils/FormBuilder";
import {
  Button,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { TypeProps } from "../models/TypeProps";
import { Steps } from "../models/SignUpSteps";

const BoxStyles = {
  "& .Mui-active": {
    fontSize: 25,
    fontWeight: "semibold",
    lineHeight: "1.4rem",
  },
  "& .MuiTypography-caption": {
    fontSize: 14,
    fontWeight: 500,
  },
  "& .css-14yr603-MuiStepContent-root": {
    paddingRight: 0,
  },
  "& .css-0": {
    display: "flex",
    gap: "0.75rem",
    flexWrap: "wrap",
  },
};

const FormBuilderStyles = {
  background: "inherit",
  "& .MuiFormControl-root .css-1qodfwp-MuiFormControl-root": { mx: 0 },
  "& .MuiTextField-root": { my: 1, mx: "auto", width: "100%" },
  "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
    borderRadius: "25px",
  },
  "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root": {
    borderRadius: "25px",
  },
  "& .MuiStack-root": {
    my: 1,
    width: "100%",
  },
  "& .MuiInputBase-root": {
    backgroundColor: "#ffffff",
  },
  "& .css-h0q0iv-MuiButtonBase-root-MuiTab-root.Mui-selected": {
    color: "inherit",
  },
};

export default function _MainClient(types: TypeProps) {
  const { person, handleInputChange } = usePersonRegister();

  const handleSubmit = () => {};

  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box component="form" className="w-full pb-10" sx={BoxStyles}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {Steps.CONSERVATORIO.map((step, index) => {
          if (step !== null)
            return (
              <Step key={step.label}>
                <StepLabel>{step.label}</StepLabel>
                <StepContent>
                  <div className="bg-[#f6f6f6] shadow rounded-3xl p-4">
                    <FormBuilder
                      boxStyles={FormBuilderStyles}
                      boxType="div"
                      elements={step.content(person, types)}
                      handleInputChange={handleInputChange}
                    />
                  </div>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        className="rounded-3xl bg-[#000066] hover:bg-[#FFFFFF] text-[#ffffff] hover:text-[#000066] hover:border-[#000066] border font-semibold "
                        variant="contained"
                        onClick={handleNext}
                        disabled={!step.checker(person)}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === Steps.CONSERVATORIO.length - 1
                          ? "Finish"
                          : "Continue"}
                      </Button>

                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            );
        })}
      </Stepper>
      {activeStep === Steps.CONSERVATORIO.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography></Typography>
          <Button
            className="rounded-3xl bg-[#000066] hover:bg-[#FFFFFF] text-[#ffffff] hover:text-[#000066] hover:border-[#000066] border font-semibold "
            variant="outlined"
            endIcon={<SendIcon />}
            onClick={handleSubmit}
          >
            Completar registro
          </Button>
          <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
            Back
          </Button>
        </Paper>
      )}
    </Box>
  );
}
