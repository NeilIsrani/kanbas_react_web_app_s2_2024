import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import AssignmentEditor from "./Kanbas/Courses/Assignments/Editor";
import Assignments from "./Kanbas/Courses/Assignments";


function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/courses/:cid/assignments/:aid" element={<AssignmentEditor />} />
          <Route path="/courses/:cid/assignments" element={<Assignments />} />
          {/* Other routes */}
        </Routes>
        <a href="https://github.com/jannunzi/kanbas-react-web-app-su1-2024">
          Github
        </a>
      </div>
    </HashRouter>
  );
}

export default App;

