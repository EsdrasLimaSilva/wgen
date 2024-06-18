import styled from "styled-components";

const StyledHome = styled.main`
    align-items: center;
    background: linear-gradient(
        45deg,
        ${(props) => props.theme.colors.primary[600]},
        ${(props) => props.theme.colors.secondary[500]}
    );
    color: ${(props) => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;

    .home-container {
        display: flex;
        flex-direction: column;
        gap: ${(props) => props.theme.sizes.xl};
        max-width: 600px;
        width: 100%;

        & > h2 {
            font-size: 3rem;
            max-width: 500px;
            width: 90%;
        }
    }
`;

export default StyledHome;
