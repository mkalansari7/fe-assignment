import { Controller } from "react-hook-form";
import type { Control, FieldValues, Path } from "react-hook-form";
import { TextField } from "@mui/material";

type FormInputProps<TForm extends FieldValues> = {
  name: Path<TForm>;
  control: Control<TForm>;
  label: string;
  type?: React.InputHTMLAttributes<unknown>["type"];
  placeholder?: string;
  helperText?: string;
  fullWidth?: boolean;
};

export function FormInput<TForm extends FieldValues>({
  name,
  control,
  label,
  type = "text",
  placeholder,
  helperText,
  fullWidth = true,
}: FormInputProps<TForm>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          type={type}
          label={label}
          placeholder={placeholder}
          fullWidth={fullWidth}
          error={!!fieldState.error}
          helperText={fieldState.error?.message || helperText}
        />
      )}
    />
  );
}
