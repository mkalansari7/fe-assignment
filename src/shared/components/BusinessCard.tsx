import { Card, CardContent, Typography, Box } from "@mui/material";
import type { Business } from "../types/business";

type BusinessCardProps = {
  business: Business;
};

export function BusinessCard({ business }: BusinessCardProps) {
  return (
    <Card sx={cardSx}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="h6" fontWeight={600}>
          {business.businessName}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {business.businessType} • {business.country}
        </Typography>

        <Box mt={1}>
          <Typography variant="body2">
            <strong>Owner:</strong> {business.ownerName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {business.email}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

const cardSx = {
  height: "100%",
  borderRadius: 3,
  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  },
};
