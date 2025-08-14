import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AgroAmazonasSite from "./pages/AgroAmazonasSite.js";
import ScrollTop from "./utils/ScrollTop.js";

import { Suspense, lazy } from "react";
const PalestrantesPage = lazy(() => import("./pages/PalestrantesPage"));





function App() {


  return (
    <Router>
      <Suspense fallback={<div>Carregando...</div>}>
      <ScrollTop/>
        <Routes>
          <Route path="/" element={<AgroAmazonasSite />} />
          <Route path="/palestrantes" element={<PalestrantesPage />} />
      </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
