export interface ThemeProps {
    colors: {
        base: string;
        baseContrast: string;
        text: string;
    };
}

export const lightTheme: ThemeProps = {
    colors: { base: "#fdfdfd", baseContrast: "#ffffff", text: "#222222" }
};
export const darkTheme: ThemeProps = {
    colors: { base: "#232323", baseContrast: "#0a0a0a", text: "#fdfdfd" }
};
