import {
  ownerContactStepSchema,
  type OwnerContactStepData,
  registerSchema,
} from "../schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, Button, Box, Typography } from "@mui/material";
import type { StepProps } from "../types";
import { FormInput } from "../../../shared/components/FormInput";
import { saveRegistration } from "../utils/saveRegistration";

export default function OwnerContactStep({ data, back }: StepProps) {
  const form = useForm<OwnerContactStepData>({
    resolver: zodResolver(ownerContactStepSchema),
    defaultValues: {
      ownerName: data.ownerName,
      email: data.email,
      phone: data.phone,
      confirmPhone: data.confirmPhone,
    },
  });

  const onSubmit = (values: OwnerContactStepData) => {
    const draft = { ...data, ...values };

    const result = registerSchema.safeParse(draft);

    if (!result.success) {
      console.error("Final validation failed", result.error);
      return;
    }

    saveRegistration(result.data);
  };

  return (
    <Box
      component="form"
      onSubmit={form.handleSubmit(onSubmit)}
      sx={{
        width: "100%",
        maxWidth: 400,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        padding: 3,
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        Owner Contact Information
      </Typography>

      <FormControl fullWidth>
        <FormInput
          name="ownerName"
          control={form.control}
          label="Owner Name"
          placeholder="Enter owner name"
          helperText="3-30 characters"
        />
      </FormControl>

      <FormControl fullWidth>
        <FormInput
          name="email"
          control={form.control}
          label="Email"
          type="email"
          placeholder="Enter email address"
          helperText="Enter a valid email address"
        />
      </FormControl>

      <FormControl fullWidth>
        <FormInput
          name="phone"
          control={form.control}
          label="Phone"
          placeholder="Enter phone number"
          helperText="8-11 digits only"
        />
      </FormControl>

      <FormControl fullWidth>
        <FormInput
          name="confirmPhone"
          control={form.control}
          label="Confirm Phone"
          placeholder="Confirm phone number"
          helperText="Phone numbers must match"
        />
      </FormControl>

      {back && (
        <Button variant="outlined" fullWidth onClick={back}>
          Back
        </Button>
      )}

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        disabled={form.formState.isSubmitting}
      >
        {form.formState.isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </Box>
  );
}
