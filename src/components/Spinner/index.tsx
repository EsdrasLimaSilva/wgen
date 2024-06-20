import { ImSpinner8 } from "react-icons/im";
import StyledSpinner from "./styled";

export default function Spinner() {
    return (
        <StyledSpinner>
            <ImSpinner8 className="spinner" />
        </StyledSpinner>
    );
}
