import { Stepper, Step, StepLabel } from "@mui/material";

type DesktopStepperProps = {
  step: number;
  labels: readonly string[];
};

export function DesktopStepper({ step, labels }: DesktopStepperProps) {
  return (
    <Stepper
      activeStep={step}
      sx={{
        width: "100%",
        maxWidth: 600,
        display: { xs: "none", sm: "flex" },
      }}
    >
      {labels.map((label, index) => (
        <Step key={label}>
          <StepLabel
            sx={{
              "& .MuiStepLabel-label": {
                fontWeight: index === step ? 700 : 400,
                fontSize: "1rem",
              },
            }}
          >
            {label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
