import type { SxProps, Theme } from "@mui/material";

export const FORM_SX: SxProps<Theme> = {
  width: "100%",
  maxWidth: 420,
  mx: "auto",
  display: "flex",
  flexDirection: "column",
  gap: { xs: 2.5, sm: 3 },
  px: { xs: 1, sm: 3 },
  py: { xs: 2, sm: 3 },
};
