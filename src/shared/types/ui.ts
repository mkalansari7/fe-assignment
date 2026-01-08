export const SNACKBAR_TYPE = {
  SUCCESS: "success",
  ERROR: "error",
  INFO: "info",
  WARNING: "warning",
} as const;

export type SnackbarType = (typeof SNACKBAR_TYPE)[keyof typeof SNACKBAR_TYPE];
