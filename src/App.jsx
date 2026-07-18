import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import CookiePolicy from "./pages/CookiePolicy";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />

      {/* Legacy paths that the footer used before these pages existed */}
      <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
      <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
      <Route path="/cookies" element={<Navigate to="/cookie-policy" replace />} />

      {/* Unknown paths fall back to the experience rather than a blank page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
