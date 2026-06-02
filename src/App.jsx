import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./page/LandingPage";
import AboutPage from "./page/AboutPage";
import AdminPolicies from "./page/AdminPolicies";
import PoliciesPage from "./page/PoliciesPage";
import PolicyViewerPage from "./page/PolicyViewerPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/policies" element={<PoliciesPage />} />
        <Route path="/policy-viewer" element={<PolicyViewerPage />} />
        <Route path="/admin" element={<AdminPolicies />} />
      </Routes>
  );
}

export default App;
