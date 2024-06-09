import React from "react";
import useStyle from "./src/hooks/useStyle";

export default function App() {
    const { setDarkTheme, setLightTheme } = useStyle();

    return (
        <>
            <h2>Hello My Dear</h2>
            <button type="button" onClick={setLightTheme}>
                light
            </button>
            <button type="button" onClick={setDarkTheme}>
                dark
            </button>
        </>
    );
}
