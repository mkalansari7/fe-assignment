import { useEffect, useState } from "react";
import { getRegistrations } from "../register/utils/getRegistrations";
import type { RegisterFormData } from "../register/schema";
import { Container, Grid, Typography } from "@mui/material";
import { BusinessCard } from "../../shared/components/BusinessCard";

export default function BusinessesPage() {
  const [businesses, setBusinesses] = useState<RegisterFormData[]>([]);

  useEffect(() => {
    const data = getRegistrations();
    setBusinesses(data);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Registered Businesses
      </Typography>

      {businesses.length === 0 ? (
        <Typography color="text.secondary">
          No businesses registered yet.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {businesses.map((biz, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <BusinessCard business={biz} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
