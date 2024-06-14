import styled from "styled-components";

const StyledSignInCard = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.sizes.md};
    width: 100%;

    h2 {
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: ${(props) => props.theme.sizes.md};
        width: 100%;

        button {
            background-color: ${(props) => props.theme.colors.primary[500]};
            border: none;
            color: ${(props) => props.theme.colors.white};
            font-size: ${(props) => props.theme.fontSize.lg};
            font-weight: bold;
            padding: ${(props) => props.theme.sizes.xs} ${(props) => props.theme.sizes.xll};

            &:hover {
                background-color: ${(props) => props.theme.colors.primary[600]};
                color: ${(props) => props.theme.colors.white};
            }
        }
    }
`;

export default StyledSignInCard;
