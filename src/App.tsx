import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BusinessesPage from "./features/businesses/BusinessesPage";
import RegisterPage from "./features/register/RegisterPage";
import HomePage from "./features/home/HomePage";
import { SnackbarProvider } from "./shared/providers/SnackbarProvider";

function App() {
  return (
    <SnackbarProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/businesses" element={<BusinessesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
