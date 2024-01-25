"use client";

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { usePersonRegister } from "../hooks/usePersonRegister";
import { Button, Paper, Skeleton, Typography } from "@mui/material";
import { TypeProps } from "../models/TypeProps";
import { useAppContext } from "@/app/context/AppContext";
import { SignUpStepsContext } from "@unauthorized/signup/strategies/signUpSteps/SignUpStepsContext";
import {
  IStrategy,
  Steps,
} from "@unauthorized/signup/strategies/signUpSteps/IStrategy";
import { ConservatorioStrategy } from "@unauthorized/signup/strategies/signUpSteps/ConservatorioStrategy";
import { UnilinguaStrategy } from "@unauthorized/signup/strategies/signUpSteps/UnilinguaStrategy";
import { BoxStyles } from "./_MainClient.styles";
import StepsComponent from "./_Steps";
import { record } from "../services/applicantService";
import GlobalIcon from "@/components/GlobalIcon";
import { useSearchParams, redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const StrategyList = {
  "10": new ConservatorioStrategy(),
  "85": new UnilinguaStrategy(),
} as { [key: string]: IStrategy };

export default function _MainClient(types: TypeProps) {
  const { person, handleInputChange } = usePersonRegister();
  const { program, appParams } = useAppContext();
  const router = useRouter();

  const [activeStep, setActiveStep] = useState(0);
  const [formSteps, setFormSteps] = useState<Steps | undefined>(undefined);
  const [accepted, setAccepted] = useState(false);

  const email = useSearchParams().get("email");
  if (!email) redirect("/");

  const handleFormStepsInitialization = (strategy: IStrategy) => {
    const context = new SignUpStepsContext(strategy);
    setFormSteps(context.getSignUpSteps());
  };

  const handleSubmit = async () => {
    const aux = await record(
      person,
      program?.recordApplicantURL as string,
      appParams?.idPeriod as number,
      appParams?.payDayLimit as string,
      appParams?.idProcess as number
    );
    if (aux.success) {
      setAccepted(true);
      alert("Registro aceptado!");
      router.push("/home");
    } else alert("Ocurrio un error: " + aux.result);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    if (program?.id) handleFormStepsInitialization(StrategyList[program.id]);
  }, [program]);

  return (
    <>
      <div className="mb-4">
        Su ingreso a la plataforma durante su etapa de aspirante se llevará a
        cabo a través del correo: <strong>{email}</strong>
      </div>
      <Box component="form" className="w-full pb-10" sx={BoxStyles}>
        {formSteps ? (
          <StepsComponent
            activeStep={activeStep}
            formSteps={formSteps}
            handleBack={handleBack}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
            person={person}
            types={types}
          />
        ) : (
          <>
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              className="my-4"
            />
            <Skeleton variant="rectangular" width={"100%"} height={60} />
          </>
        )}
        {formSteps && activeStep === formSteps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography></Typography>
            <Button
              className="rounded-3xl bg-[#000066] hover:bg-[#FFFFFF] text-[#ffffff] hover:text-[#000066] hover:border-[#000066] border font-semibold "
              variant="outlined"
              endIcon={<GlobalIcon nameIcon="sendIcon" />}
              onClick={handleSubmit}
              disabled={accepted}
            >
              Completar registro
            </Button>
            <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
              Atrás
            </Button>
          </Paper>
        )}
      </Box>
    </>
  );
}
