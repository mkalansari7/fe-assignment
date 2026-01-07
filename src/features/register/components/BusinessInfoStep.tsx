import { businessInfoStepSchema, type BusinessInfoStepData } from "../schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, Button, Box, Typography } from "@mui/material";
import { BUSINESS_TYPES, type StepProps } from "../types";
import { ControlledSelect } from "../../../shared/components/ControlledSelect";
import { FormInput } from "../../../shared/components/FormInput";

export default function BusinessInfoStep({ data, setData, next }: StepProps) {
  const form = useForm<BusinessInfoStepData>({
    resolver: zodResolver(businessInfoStepSchema),
    defaultValues: {
      businessName: data.businessName,
      businessType: data.businessType as BusinessInfoStepData["businessType"],
      registrationNumber: data.registrationNumber,
    },
  });

  const onSubmit = (values: BusinessInfoStepData) => {
    setData((prev) => ({ ...prev, ...values }));
    next?.();
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
        Business Information
      </Typography>

      <FormControl fullWidth>
        <FormInput
          name="businessName"
          control={form.control}
          label="Business Name"
          placeholder="Enter business name"
          helperText="3-30 characters, alphanumeric and spaces only"
        />
      </FormControl>

      <FormControl fullWidth>
        <ControlledSelect
          name="businessType"
          control={form.control}
          label="Business Type"
          options={BUSINESS_TYPES}
          placeholder="Select business type"
          errorMessage="Please select a business type"
        />
      </FormControl>

      <FormControl fullWidth>
        <FormInput
          name="registrationNumber"
          control={form.control}
          label="Registration Number"
          placeholder="Enter 12-digit registration number"
          helperText="Must be exactly 12 digits"
        />
      </FormControl>

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        disabled={form.formState.isSubmitting}
      >
        Continue
      </Button>
    </Box>
  );
}
