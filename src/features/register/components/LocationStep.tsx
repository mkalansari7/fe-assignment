import { locationStepSchema, type LocationStepData } from "../schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, FormControl, Typography } from "@mui/material";
import type { StepProps } from "../types";
import { FormInput } from "../../../shared/components/FormInput";
import { useCountries } from "../../../shared/hooks/useCountries";
import { ControlledSelect } from "../../../shared/components/ControlledSelect";

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
        Location
      </Typography>

      <FormControl fullWidth>
        <ControlledSelect
          name="country"
          control={form.control}
          label="Country"
          options={countries}
          placeholder={loading ? "Loading countries..." : "Select country"}
          errorMessage={error ?? "Country is required"}
        />
      </FormControl>
      {error && (
        <Typography color="error" variant="body2">
          {error}
        </Typography>
      )}

      <FormControl fullWidth>
        <FormInput
          name="city"
          control={form.control}
          label="City"
          placeholder="Enter city name"
          helperText="3-20 characters, alphanumeric and spaces only"
        />
      </FormControl>

      <FormControl fullWidth>
        <FormInput
          name="addressLine1"
          control={form.control}
          label="Address Line 1"
          placeholder="Enter address line 1"
          helperText="3-20 characters, alphanumeric and spaces only"
        />
      </FormControl>

      <FormControl fullWidth>
        <FormInput
          name="addressLine2"
          control={form.control}
          label="Address Line 2"
          placeholder="Enter address line 2"
          helperText="3-20 characters, alphanumeric and spaces only"
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
        sx={{ mt: 1 }}
        disabled={form.formState.isSubmitting || loading || !!error}
      >
        Continue
      </Button>
    </Box>
  );
}
