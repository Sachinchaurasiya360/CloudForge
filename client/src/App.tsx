import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "./module/LandingPage/LandingPage";
import LoginPage from "./module/Authentication/LoginPage";
import Dashboard from "./module/dashboard/Dashboard";
import CodeEditor from "./module/editor/CodeEditor";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editor" element={<CodeEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
