import styled from "styled-components";

const StyledLogin = styled.main`
    align-items: center;
    background: linear-gradient(
        45deg,
        ${(props) => props.theme.colors.primary[500]},
        ${(props) => props.theme.colors.secondary[500]}
    );
    display: flex;
    justify-content: center;
    min-height: 100vh;

    .form-container {
        background-color: ${(props) => props.theme.colors.white};
        border-radius: ${(props) => props.theme.sizes.xs};
        color: ${(props) => props.theme.colors.black};
        max-width: 500px;
        padding: ${(props) => props.theme.sizes.lg} ${(props) => props.theme.sizes.md};
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${({ theme }) => theme.sizes.lg};
    }

    .toggle-login-mode-btn {
        background-color: transparent;
        border: none;
        color: ${(props) => props.theme.colors.black};
        text-align: center;
        width: 100%;
    }
`;

export default StyledLogin;
