export interface ThemeProps {
    colors: {
        base: string;
        baseContrast: string;
        black: string;
        error: string;
        primary: { [key: number]: string };
        secondary: { [key: number]: string };
        text: string;
        transparent: string;
        white: string;
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
        base: "#fdfdfd",
        baseContrast: "#ffffff",
        black: "#121212",
        error: "#790000",
        primary: { 500: "#e75e09", 600: "#b54601" },
        secondary: { 500: "#ce0b4f", 600: "#9e005c" },
        text: "#222222",
        transparent: "#22222230",
        white: "#ffffff"
    }
};
export const darkTheme: ThemeProps = {
    sizes: { ...sizes },
    fontSize: { ...fontSize },
    colors: {
        base: "#232323",
        baseContrast: "#0a0a0a",
        black: "#121212",
        error: "#f85374",
        primary: { 500: "#e75e09", 600: "#b54601" },
        secondary: { 500: "#ce0b4f", 600: "#9c0037" },
        text: "#fdfdfd",
        transparent: "#22222230",
        white: "#ffffff"
    }
};
