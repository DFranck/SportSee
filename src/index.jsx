import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./views/Dashboard";
import "./styles/global.scss";
console.log(process.env.NODE_ENV);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Dashboard userId="18" />
  </React.StrictMode>
);
