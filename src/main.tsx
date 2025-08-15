import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // Tailwind

const el = document.getElementById("root");
if (!el) throw new Error('Root element "#root" not found');

createRoot(el as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);