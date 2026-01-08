import {
  ownerContactStepSchema,
  type OwnerContactStepData,
  registerSchema,
} from "../schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Box } from "@mui/material";
import type { StepProps } from "../types";
import { FormInput } from "../../../shared/components/FormInput";
import { saveRegistration } from "../utils/saveRegistration";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "../../../shared/hooks/useSnackbar";
import { SNACKBAR_TYPE } from "../../../shared/types/ui";
import { FORM_SX } from "../../../shared/styles/form";

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

  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();

  const onSubmit = (values: OwnerContactStepData) => {
    const draft = { ...data, ...values };
    const result = registerSchema.safeParse(draft);

    if (!result.success) {
      showSnackbar(
        "Please fix the highlighted errors and try again.",
        SNACKBAR_TYPE.ERROR
      );
      return;
    }

    try {
      saveRegistration(result.data);
      showSnackbar("Business registered successfully!", SNACKBAR_TYPE.SUCCESS);
      navigate("/businesses");
    } catch {
      showSnackbar(
        "Something went wrong while saving. Please try again.",
        "error"
      );
    }
  };

  return (
    <Box component="form" onSubmit={form.handleSubmit(onSubmit)} sx={FORM_SX}>
      <FormInput
        name="ownerName"
        control={form.control}
        label="Owner Name"
        placeholder="Full name"
      />

      <FormInput
        name="email"
        control={form.control}
        label="Email"
        type="email"
        placeholder="example@email.com"
      />

      <FormInput
        name="phone"
        control={form.control}
        label="Phone"
        placeholder="8–11 digits"
      />

      <FormInput
        name="confirmPhone"
        control={form.control}
        label="Confirm Phone"
        placeholder="Re-enter phone number"
      />

      <Box display="flex" flexDirection="column" gap={1.5} mt={1}>
        <Button type="submit" variant="contained" fullWidth>
          Submit
        </Button>

        {back && (
          <Button variant="outlined" fullWidth onClick={back}>
            Back
          </Button>
        )}
      </Box>
    </Box>
  );
}
