import StyledHomeMenu from "./styled";
import { IoMdAdd, IoMdExit } from "react-icons/io";
import { MdJoinLeft } from "react-icons/md";
import Notification from "../../utils/Notification";
import { useAuth } from "../../contexts/AuthProvider";

export default function HomeMenu() {
    const { logout } = useAuth();

    const exit = async () => {
        const ok = await Notification.confirm("Exit", "Are you sure you want to exit?");
        if (ok) {
            await logout();
        }
    };

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
            <button type="button" onClick={exit}>
                <IoMdExit /> Exit
            </button>
        </StyledHomeMenu>
    );
}
