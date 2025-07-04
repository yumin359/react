import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App42 from "./App42.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App42 />
  </StrictMode>,
);
