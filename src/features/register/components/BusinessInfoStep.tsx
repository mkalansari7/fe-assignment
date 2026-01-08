import { businessInfoStepSchema, type BusinessInfoStepData } from "../schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Box } from "@mui/material";
import { type StepProps } from "../types";
import { ControlledSelect } from "../../../shared/components/ControlledSelect";
import { FormInput } from "../../../shared/components/FormInput";
import { BUSINESS_TYPES } from "../../../shared/types/business";
import { FORM_SX } from "../../../shared/styles/form";

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
    <Box component="form" onSubmit={form.handleSubmit(onSubmit)} sx={FORM_SX}>
      <FormInput
        name="businessName"
        control={form.control}
        label="Business Name"
        placeholder="Enter business name"
        helperText="3–30 characters"
      />

      <ControlledSelect
        name="businessType"
        control={form.control}
        label="Business Type"
        options={BUSINESS_TYPES}
        placeholder="Select business type"
        errorMessage="Please select a business type"
      />

      <FormInput
        name="registrationNumber"
        control={form.control}
        label="Registration Number"
        placeholder="12-digit registration number"
        helperText="Exactly 12 digits"
      />

      <Box mt={1}>
        <Button type="submit" variant="contained" fullWidth>
          Continue
        </Button>
      </Box>
    </Box>
  );
}
