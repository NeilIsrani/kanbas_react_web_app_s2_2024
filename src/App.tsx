import Labs from "./Labs";
import Kanbas from "./Kanbas";
import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div>
          <Routes>
            <Route path="/" element={<Navigate to="Labs" />} />
        <Route path="/Labs/*" element={<Labs />} />
        <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
        <a href="https://github.com/jannunzi/kanbas-react-web-app-su1-2024">
Github
</a>
      </div>
      </HashRouter>
  );
}

export default App;
