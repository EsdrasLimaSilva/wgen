import styled from "styled-components";

const StyledHomeMenu = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.sizes.md};

    & button {
        align-items: center;
        background-color: transparent;
        border: none;
        color: inherit;
        display: flex;
        font-size: ${(props) => props.theme.fontSize.lg};
        font-weight: bold;
        gap: ${(props) => props.theme.sizes.sm};
        padding: 0;
        transition: transform 0.25s ease-out;
        width: fit-content;

        &:hover {
            transform: translateX(4px);
        }
    }
`;

export default StyledHomeMenu;
