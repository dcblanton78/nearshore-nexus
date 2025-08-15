import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // Tailwind
var el = document.getElementById("root");
if (!el)
    throw new Error('Root element "#root" not found');
createRoot(el).render(_jsx(StrictMode, { children: _jsx(App, {}) }));
