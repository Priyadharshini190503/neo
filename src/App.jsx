import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./page/LandingPage";
import AboutPage from "./page/AboutPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
  );
}

export default App;
