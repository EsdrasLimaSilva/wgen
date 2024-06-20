import styled from "styled-components";

const StyledGame = styled.main`
    align-items: center;
    background: ${(props) => props.theme.colors.base};
    color: ${(props) => props.theme.colors.text};
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.sizes.md};
    height: 100vh;
    justify-content: center;

    .error-message {
        align-items: center;
        color: ${(props) => props.theme.colors.error};
        display: flex;
        font-weight: normal;
        gap: ${(props) => props.theme.sizes.md};
    }

    .loading-message {
        font-size: ${(props) => props.theme.fontSize.lg};
    }
`;

export default StyledGame;
