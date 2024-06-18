import styled from "styled-components";

const StyledModal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => props.theme.colors.transparent};
    display: flex;
    justify-content: center;
    align-items: center;

    .content-container {
        background-color: ${(props) => props.theme.colors.base};
        border-radius: ${(props) => props.theme.sizes.lg};
        color: ${(props) => props.theme.colors.text};
        height: 70%;
        max-width: 600px;
        overflow: auto;
        padding: ${(props) => props.theme.sizes.lg};
        width: 100%;

        & > header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            & .modal-close-btn {
                font-size: ${(props) => props.theme.fontSize.xl};
                padding: 0;
                border: none;
            }
        }
    }
`;

export default StyledModal;
