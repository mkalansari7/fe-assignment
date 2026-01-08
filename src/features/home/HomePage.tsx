import { Container, Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Stack spacing={4} alignItems="center">
          <Typography variant="h3" fontWeight={700} sx={{ lineHeight: 1.2 }}>
            Simple Business Registration
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 520 }}
          >
            Register businesses, store their details securely, and manage
            everything in one place. A clean, guided flow designed to be fast
            and easy to use.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 2 }}
          >
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
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
