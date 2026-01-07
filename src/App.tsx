import { BrowserRouter, Routes, Route } from "react-router-dom";
import BusinessesPage from "./features/businesses/BusinessesPage";
import RegisterPage from "./features/register/RegisterPage";
import HomePage from "./features/home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/businesses" element={<BusinessesPage />} />
        {/* This for unkown routes, but it does not redirect the users. Should I keep it or change it? */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
