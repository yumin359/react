import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode> // 나중에 설명 // 콘솔에 두번씩 나오는 거 이거 없애니까 일단 사라짐
  <App />,
  // </StrictMode>,
);
