import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/index";   
import "./styles/_global.sass";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);

