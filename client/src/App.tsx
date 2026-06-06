import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "./module/LandingPage/LandingPage";
import LoginPage from "./module/Authentication/LoginPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createproject" element={<LoginPage />} />
        <Route path="/dashboard" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
