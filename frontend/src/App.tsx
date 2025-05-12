import { Routes, Route, Navigate } from "react-router-dom";
import TopPage from "./pages/TopPage";
import SecondPage from "./pages/SecondPage";
import ManagePage from "./pages/ManagePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/top" />} />
      <Route path="/top" element={<TopPage />} />
      <Route path="/second" element={<SecondPage />} />
      <Route path="/manage" element={<ManagePage />} />
    </Routes>
  );
}

export default App;
