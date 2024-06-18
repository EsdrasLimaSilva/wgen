export interface ThemeProps {
    colors: {
        white: string;
        black: string;
        base: string;
        error: string;
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
    lg: "1.25rem",
    xl: "1.4rem",
    xll: "2.1rem"
};

export const lightTheme: ThemeProps = {
    sizes: { ...sizes },
    fontSize: { ...fontSize },
    colors: {
        white: "#ffffff",
        black: "#121212",
        base: "#fdfdfd",
        baseContrast: "#ffffff",
        error: "#790000",
        text: "#222222",
        primary: { 500: "#e75e09", 600: "#b54601" },
        secondary: { 500: "#ce0b4f", 600: "#9e005c" }
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
        error: "#f85374",
        text: "#fdfdfd",
        primary: { 500: "#e75e09", 600: "#b54601" },
        secondary: { 500: "#ce0b4f", 600: "#9c0037" }
    }
};
