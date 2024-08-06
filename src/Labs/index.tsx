import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route, Routes, Link } from "react-router-dom";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import TOC from "./TOC";
import Lab4 from "./Lab4";

export default function Labs() {
  return (
    <Provider store={store}>
    <div>
      <h1>Neil Israni</h1>
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
        <Route path="Lab4" element={<Lab4 />} />
      </Routes>
    </div>
    </Provider>
  );
}

