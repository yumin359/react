import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App21 from "./App21.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <App21 />
    </>
  </StrictMode>,
);
