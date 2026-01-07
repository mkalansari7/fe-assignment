import BusinessInfoStep from "./components/BusinessInfoStep";
import { Grid } from "@mui/material";
import OwnerContactStep from "./components/OwnerContactStep";
import LocationStep from "./components/LocationStep";
import { type RegisterFormDraft, type RegisterStep } from "./types";
import { useState } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";

const steps = [BusinessInfoStep, LocationStep, OwnerContactStep] as const;
const stepLabels = [
  "Business Information",
  "Location",
  "Owner Contact",
] as const;

export default function RegisterPage() {
  const [step, setStep] = useState<RegisterStep>(0);

  const [formData, setFormData] = useState<RegisterFormDraft>({
    businessName: "",
    businessType: "",
    registrationNumber: "",
    country: "",
    city: "",
    addressLine1: "",
    addressLine2: "",
    ownerName: "",
    email: "",
    phone: "",
    confirmPhone: "",
  });

  const next = () => {
    setStep((prevStep) => {
      if (prevStep >= steps.length - 1) return prevStep;
      return (prevStep + 1) as RegisterStep;
    });
  };

  const back = () => {
    setStep((prevStep) => {
      if (prevStep <= 0) return prevStep;
      return (prevStep - 1) as RegisterStep;
    });
  };

  const CurrentStep = steps[step];

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Stepper activeStep={step} sx={{ width: "100%", maxWidth: 500 }}>
        {stepLabels.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <CurrentStep
        data={formData}
        setData={setFormData}
        next={next}
        back={back}
      />
    </Grid>
  );
}
