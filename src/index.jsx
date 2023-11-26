import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./pages/Dashboard";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Dashboard userId="12" />
  </React.StrictMode>
);
