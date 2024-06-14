import React from "react";
import AppRouter from "./src/routes/index";
import ThemeContext from "./src/contexts/ThemeContext";

export default function App() {
    return (
        <ThemeContext>
            <AppRouter />
        </ThemeContext>
    );
}
