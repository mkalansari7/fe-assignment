import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome
      </Typography>

      <Button
        variant="contained"
        size="large"
        onClick={() => navigate("/register")}
      >
        Register a Business
      </Button>

      <Button
        variant="outlined"
        size="large"
        onClick={() => navigate("/businesses")}
      >
        View Businesses
      </Button>
    </Box>
  );
}
