import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Lenis from "lenis";
import "./index.css";

// Smooth scroll (respects reduced-motion).
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 });
  const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
