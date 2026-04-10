import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Impressum from "./components/Impressum";
import ScrollToTop from "./ScrollToTop";
import { LanguageProvider } from "./contexts/LanguageContext";
import "./i18n";

// Home Page Component
const HomePage = () => {
  return (
    <>
      <Hero />
    </>
  );
};

const AppContent = () => {
  return (
    <div className="max-w-[1536px] mx-auto">
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Default (English) routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/impressum" element={<Impressum />} />

        {/* Localized routes for German */}
        <Route path="/de" element={<HomePage />} />
        <Route path="/de/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/de/impressum" element={<Impressum />} />

        {/* Redirect all other routes to the home page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
};

const App = () => {


  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
