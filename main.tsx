import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import ThemeContext from "./src/contexts/ThemeContext";

const node = document.getElementById("root")!;
const root = createRoot(node);

root.render(<App />);
