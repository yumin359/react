import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App20 from "./App20.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <App20 />
    </>
  </StrictMode>,
);
