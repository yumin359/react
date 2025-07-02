import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App24 from "./App24.jsx";
import App23 from "./App23.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      {/*<App24 />*/}
      <App23 />
    </>
  </StrictMode>,
);
