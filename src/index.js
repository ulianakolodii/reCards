import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./variables.css";
import App from "./App";
import { Dashboard, Main } from "./scenes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Main>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="add-pacient" element={<App />} />
        <Route path="add-doctor" element={<div>Hello</div>} />
        <Route path="invoices" element={<div>Hello 2</div>} />
      </Routes>
    </Main>
  </BrowserRouter>
);