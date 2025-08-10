import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgroAmazonasSite from "./pages/AgroAmazonasSite.js";
import PalestrantesPage from "./pages/PalestrantesPage.js";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Detecta o modo escuro do sistema
    const matchDark = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(matchDark.matches);
    const handler = (e) => setIsDarkMode(e.matches);
    matchDark.addEventListener('change', handler);
    // Aplica classe no body
    if (matchDark.matches) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    return () => {
      matchDark.removeEventListener('change', handler);
      document.body.classList.remove('dark-mode');
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AgroAmazonasSite />} />
        <Route path="/palestrantes" element={<PalestrantesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
