import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import AssignmentEditor from "./Kanbas/Courses/Assignments/Editor";
import Assignments from "./Kanbas/Courses/Assignments";
import { Provider } from "react-redux";
import store from "./Kanbas/store";


function App() {
  return (
    <Provider store={store}>
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/courses/:cid/assignments/new" element={<AssignmentEditor />} />
          <Route path="/courses/:cid/assignments/:aid/*" element={<AssignmentEditor />} />
          <Route path="/courses/:cid/assignments" element={<Assignments />} />
          {/* Other routes */}
        </Routes>
        <a href="https://github.com/NeilIsrani/kanbas_react_web_app_s2_2024">
          Github
        </a>
      </div>
    </HashRouter>
    </Provider>
  );
}

export default App;
