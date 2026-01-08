import { createContext, useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import { SNACKBAR_TYPE, type SnackbarType } from "../types/ui";

type SnackbarContextValue = {
  showSnackbar: (message: string, type?: SnackbarType) => void;
};

export const SnackbarContext = createContext<SnackbarContextValue | null>(null);

export function SnackbarProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<SnackbarType>(SNACKBAR_TYPE.INFO);

  const showSnackbar = (
    msg: string,
    severity: SnackbarType = SNACKBAR_TYPE.INFO
  ) => {
    setMessage(msg);
    setType(severity);
    setOpen(true);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={type} variant="filled">
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
}
