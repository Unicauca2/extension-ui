import { Steps } from "@/app/context/strategies/signUpSteps/IStrategy";
import FormBuilder from "@/utils/FormBuilder";
import {
  Step,
  StepLabel,
  StepContent,
  Box,
  Button,
  Stepper,
} from "@mui/material";
import { FormBuilderStyles } from "./_MainClient.styles";

interface Props {
  formSteps: Steps;
  activeStep: number;
  person: any;
  handleInputChange: any;
  handleNext: any;
  handleBack: any;
  types: any;
}

export default function RegistrySteps({
  formSteps,
  activeStep,
  handleInputChange,
  handleNext,
  handleBack,
  person,
  types,
}: Props) {
  return (
    <>
      <Stepper activeStep={activeStep} orientation="vertical">
        {formSteps.map((step, index) => (
          <Step key={step.label} completed={step.checker(person)}>
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
                    {index === formSteps.length - 1 ? "Finish" : "Continue"}
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
        ))}
      </Stepper>
    </>
  );
}
