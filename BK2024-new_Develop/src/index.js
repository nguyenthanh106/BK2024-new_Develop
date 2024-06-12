import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Admin from "./Admin";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import './assets/admin/css/argon-dashboard.css'


const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </BrowserRouter>
);
