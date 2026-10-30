import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./app";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Elemento principal da página não encontrado.");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
