import styled from "styled-components";

const StyledConfirmationModal = styled.main`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.sizes.xl};

    .button-container {
        display: flex;
        align-items: center;
        gap: ${(props) => props.theme.sizes.lg};
    }
`;

export default StyledConfirmationModal;
