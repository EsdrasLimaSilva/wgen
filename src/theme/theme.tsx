export interface ThemeProps {
    colors: {
        white: string;
        black: string;
        base: string;
        baseContrast: string;
        text: string;
        primary: { [key: number]: string };
        secondary: { [key: number]: string };
    };

    sizes: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xll: string;
    };

    fontSize: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xll: string;
    };
}

const sizes = {
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xll: "42px"
};

const fontSize = {
    xs: "0.82rem",
    sm: "0.9rem",
    md: "1rem",
    lg: "1.2rem",
    xl: "1.28rem",
    xll: "1.4rem"
};

export const lightTheme: ThemeProps = {
    sizes: { ...sizes },
    fontSize: { ...fontSize },
    colors: {
        white: "#ffffff",
        black: "#121212",
        base: "#fdfdfd",
        baseContrast: "#ffffff",
        text: "#222222",
        primary: { 500: "#e75e09", 600: "#b54601" },
        secondary: { 500: "#ce0b4f" }
    }
};
export const darkTheme: ThemeProps = {
    sizes: { ...sizes },
    fontSize: { ...fontSize },
    colors: {
        white: "#ffffff",
        black: "#121212",
        base: "#232323",
        baseContrast: "#0a0a0a",
        text: "#fdfdfd",
        primary: { 500: "#e75e09", 600: "#b54601" },
        secondary: { 500: "#ce0b4f" }
    }
};
