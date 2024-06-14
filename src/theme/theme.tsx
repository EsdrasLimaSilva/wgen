export interface ThemeProps {
    colors: {
        white: string;
        black: string;
        base: string;
        baseContrast: string;
        text: string;
        primary: {};
        secondary: {};
    };
}

export const lightTheme: ThemeProps = {
    colors: {
        white: "#ffffff",
        black: "#121212",
        base: "#fdfdfd",
        baseContrast: "#ffffff",
        text: "#222222",
        primary: { 500: "#e75e09" },
        secondary: { 500: "#ce0b4f" }
    }
};
export const darkTheme: ThemeProps = {
    colors: {
        white: "#ffffff",
        black: "#121212",
        base: "#232323",
        baseContrast: "#0a0a0a",
        text: "#fdfdfd",
        primary: { 500: "#e75e09" },
        secondary: { 500: "#ce0b4f" }
    }
};
