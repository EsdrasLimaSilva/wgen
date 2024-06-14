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

    .login-error {
        color: ${(props) => props.theme.colors.error};
        font-size: ${(props) => props.theme.fontSize.lg};
        font-weight: bold;
    }

    .toggle-login-mode-btn {
        background-color: transparent;
        border: none;
        color: ${(props) => props.theme.colors.black};
        text-align: center;
        width: 100%;
    }

    .spinner-container {
        align-items: center;
        border-radius: ${(props) => props.theme.sizes.md};
        color: ${(props) => props.theme.colors.white};
        display: flex;
        font-size: ${(props) => props.theme.fontSize.xll};
        font-weight: bold;
        gap: ${(props) => props.theme.sizes.sm};
        padding: ${(props) => props.theme.sizes.md} ${(props) => props.theme.sizes.xll};

        .spinner {
            animation: spin 0.9s infinite;
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0);
        }

        100% {
            transform: rotate(359deg);
        }
    }
`;

export default StyledLogin;
