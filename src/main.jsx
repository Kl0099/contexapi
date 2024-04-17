import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import AppconstextProvider from "./context/Appcontext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppconstextProvider>
      <App />
    </AppconstextProvider>
  </BrowserRouter>
);
