import { useEffect, useState } from "react";
import { getRegistrations } from "../register/utils/getRegistrations";
import type { RegisterFormData } from "../register/schema";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default function BusinessesPage() {
  const [businesses, setBusinesses] = useState<RegisterFormData[]>([]);

  useEffect(() => {
    const data = getRegistrations();
    setBusinesses(data);
  }, []);

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Registered Businesses
      </Typography>

      {businesses.length === 0 ? (
        <Typography color="text.secondary">
          No businesses registered yet.
        </Typography>
      ) : (
        businesses.map((biz, index) => (
          <Card key={index} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6">{biz.businessName}</Typography>

              <Typography variant="body2" color="text.secondary">
                {biz.businessType} • {biz.country}
              </Typography>

              <Typography variant="body2">
                Owner: {biz.ownerName} ({biz.email})
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
}
