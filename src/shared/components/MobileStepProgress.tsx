import { Box, Typography, LinearProgress } from "@mui/material";

type MobileStepProgressProps = {
  step: number;
  totalSteps: number;
  label: string;
};

export function MobileStepProgress({
  step,
  totalSteps,
  label,
}: MobileStepProgressProps) {
  const progress = ((step + 1) / totalSteps) * 100;

  return (
    <Box
      sx={{
        display: { xs: "block", sm: "none" },
        textAlign: "center",
        mb: 3,
      }}
    >
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={{
          fontWeight: (theme) => theme.typography.fontWeightBold,
        }}
      >
        {label}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            width: 120,
            height: 8,
            borderRadius: 3,
          }}
        />
      </Box>
    </Box>
  );
}
