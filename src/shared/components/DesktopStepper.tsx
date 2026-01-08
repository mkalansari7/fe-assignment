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
      {labels.map((label) => (
        <Step key={label}>
          <StepLabel
            sx={{
              "& .MuiStepLabel-label": {
                fontWeight: (theme) => theme.typography.fontWeightRegular,
              },
              "& .MuiStepLabel-label.Mui-active": {
                fontWeight: (theme) => theme.typography.fontWeightBold,
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
