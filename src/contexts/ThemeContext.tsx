import { ReactNode, createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme/theme";
import GlobalStyles from "../theme/global";

interface ContextProps {
    theme: string;
    setLightTheme: () => void;
    setDarkTheme: () => void;
}

export const TContext = createContext<ContextProps>({} as ContextProps);

export default function ThemeContext({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState("light");

    const setLightTheme = () => {
        setTheme("light");
    };

    const setDarkTheme = () => {
        setTheme("dark");
    };

    return (
        <TContext.Provider value={{ theme, setLightTheme, setDarkTheme }}>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </TContext.Provider>
    );
}
