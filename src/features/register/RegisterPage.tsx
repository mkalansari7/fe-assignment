import BusinessInfoStep from "./components/BusinessInfoStep";
import { Box, Container } from "@mui/material";
import OwnerContactStep from "./components/OwnerContactStep";
import LocationStep from "./components/LocationStep";
import { type RegisterFormDraft, type RegisterStep } from "./types";
import { useState } from "react";
import { MobileStepProgress } from "../../shared/components/MobileStepProgress";
import { DesktopStepper } from "../../shared/components/DesktopStepper";

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
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: { xs: "flex-start", sm: "center" },
          py: { xs: 3, sm: 0 },
          gap: 4,
        }}
      >
        <DesktopStepper step={step} labels={stepLabels} />

        <MobileStepProgress
          step={step}
          totalSteps={stepLabels.length}
          label={stepLabels[step]}
        />

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "100%", maxWidth: 420 }}>
            <CurrentStep
              data={formData}
              setData={setFormData}
              next={next}
              back={back}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
