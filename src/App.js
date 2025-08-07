import React, { useEffect, useState } from "react";
import AgroAmazonasSite from "./pages/AgroAmazonasSite.js";

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

  return <AgroAmazonasSite />;
}

export default App;
