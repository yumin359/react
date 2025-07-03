import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App32 from "./App32.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <App32 />
    </>
  </StrictMode>,
);
