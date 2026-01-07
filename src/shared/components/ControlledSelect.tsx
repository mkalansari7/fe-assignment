import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { TextField, MenuItem } from "@mui/material";

type ControlledSelectProps<TForm extends FieldValues, TValue extends string> = {
  name: Path<TForm>;
  control: Control<TForm>;
  label: string;
  options: readonly TValue[];
  placeholder?: string;
  errorMessage?: string;
  fullWidth?: boolean;
};

export function ControlledSelect<
  TForm extends FieldValues,
  TValue extends string
>({
  name,
  control,
  label,
  options,
  placeholder = "Select an option",
  errorMessage,
  fullWidth = true,
}: ControlledSelectProps<TForm, TValue>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          select
          label={label}
          fullWidth={fullWidth}
          error={!!fieldState.error}
          helperText={fieldState.error?.message || errorMessage}
        >
          <MenuItem value="" disabled>
            {placeholder}
          </MenuItem>

          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
}
