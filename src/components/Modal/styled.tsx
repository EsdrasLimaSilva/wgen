import styled from "styled-components";

const StyledModal = styled.div`
    align-items: center;
    background: ${(props) => props.theme.colors.transparent};
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;

    .content-container {
        align-items: center;
        background-color: ${(props) => props.theme.colors.base};
        border-radius: ${(props) => props.theme.sizes.lg};
        color: ${(props) => props.theme.colors.text};
        display: flex;
        flex-direction: column;
        gap: ${(props) => props.theme.sizes.lg};
        max-width: 600px;
        overflow: auto;
        padding: ${(props) => props.theme.sizes.lg};
        position: relative;
        width: 100%;

        & .modal-close-btn {
            border: none;
            font-size: ${(props) => props.theme.fontSize.xl};
            padding: 0;
            position: absolute;
            right: 16px;
            top: 8px;
        }
    }
`;

export default StyledModal;
