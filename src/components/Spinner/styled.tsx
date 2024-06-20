import styled from "styled-components";

const StyledSpinner = styled.span`
    .spinner {
        animation: spin 0.5s infinite linear;
        font-size: ${(props) => props.theme.fontSize.lg};
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }
`;

export default StyledSpinner;
