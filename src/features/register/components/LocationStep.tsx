import { locationStepSchema, type LocationStepData } from "../schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button } from "@mui/material";
import type { StepProps } from "../types";
import { FormInput } from "../../../shared/components/FormInput";
import { useCountries } from "../../../shared/hooks/useCountries";
import { ControlledSelect } from "../../../shared/components/ControlledSelect";
import { FORM_SX } from "../../../shared/styles/form";

export default function LocationStep({ data, setData, next, back }: StepProps) {
  const form = useForm<LocationStepData>({
    resolver: zodResolver(locationStepSchema),
    defaultValues: {
      country: data.country,
      city: data.city,
      addressLine1: data.addressLine1,
      addressLine2: data.addressLine2,
    },
  });

  const onSubmit = (values: LocationStepData) => {
    setData((prev) => ({ ...prev, ...values }));
    next?.();
  };

  const { countries, loading, error } = useCountries();

  return (
    <Box component="form" onSubmit={form.handleSubmit(onSubmit)} sx={FORM_SX}>
      <ControlledSelect
        name="country"
        control={form.control}
        label="Country"
        options={countries}
        placeholder={loading ? "Loading countries..." : "Select country"}
        errorMessage={error ?? "Country is required"}
      />

      <FormInput
        name="city"
        control={form.control}
        label="City"
        placeholder="Enter city name"
        helperText="3–20 characters"
      />

      <FormInput
        name="addressLine1"
        control={form.control}
        label="Address Line 1"
        placeholder="Street address"
      />

      <FormInput
        name="addressLine2"
        control={form.control}
        label="Address Line 2"
        placeholder="Apartment, suite, etc. (optional)"
      />

      <Box display="flex" flexDirection="column" gap={1.5} mt={1}>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={loading || !!error}
        >
          Continue
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
