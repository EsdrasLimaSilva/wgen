import styled from "styled-components";

const StyledInput = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    gap: ${(props) => props.theme.sizes.xs};
    width: 100%;

    input {
        border-radius: ${(props) => props.theme.sizes.md};
        border: 1.4px solid ${(props) => props.theme.colors.black};
        font-size: ${(props) => props.theme.fontSize.md};
        padding: ${(props) => props.theme.sizes.xs} ${(props) => props.theme.sizes.md};
        width: 100%;

        &:focus {
            outline: 1.4px solid ${(props) => props.theme.colors.black};
        }
    }

    .error-message {
        font-size: ${(props) => props.theme.fontSize.md};
        font-style: italic;
        color: ${(props) => props.theme.colors.error};
    }
`;

export default StyledInput;
