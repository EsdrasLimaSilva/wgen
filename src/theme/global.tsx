import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        background-color: ${(props) => props.theme.colors.base};
        color: ${(props) => props.theme.colors.text};
        font-family: Arial, Helvetica, sans-serif;
    }

    button {
        background-color: ${(props) => props.theme.colors.baseContrast};
        border-radius: 32px;
        border: 1px solid ${(props) => props.theme.colors.text};
        color: ${(props) => props.theme.colors.text};
        cursor: pointer;
        font-size: 1.1rem;
        padding: 2px 24px;
    }
`;

export default GlobalStyles;
