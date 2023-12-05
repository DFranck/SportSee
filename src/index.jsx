import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./views/Dashboard";
import "./styles/global.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Dashboard userId="12" />
  </React.StrictMode>
);
