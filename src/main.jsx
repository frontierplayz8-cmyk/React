import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Portfolio from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Portfolio />
  </BrowserRouter>
);
