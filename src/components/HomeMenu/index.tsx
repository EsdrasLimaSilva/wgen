import StyledHomeMenu from "./styled";
import { IoMdAdd, IoMdExit } from "react-icons/io";
import { MdJoinLeft } from "react-icons/md";

export default function HomeMenu() {
    return (
        <StyledHomeMenu>
            <button type="button">
                <IoMdAdd />
                Create room
            </button>
            <button type="button">
                <MdJoinLeft />
                Join room
            </button>
            <button type="button">
                <IoMdExit /> Exit
            </button>
        </StyledHomeMenu>
    );
}
