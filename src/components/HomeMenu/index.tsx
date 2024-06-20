import StyledHomeMenu from "./styled";
import { IoMdAdd, IoMdExit } from "react-icons/io";
import { MdJoinLeft } from "react-icons/md";
import Notification from "../../utils/Notification";
import { useAuth } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function HomeMenu() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const exit = async () => {
        const ok = await Notification.confirm("Exit", "Are you sure you want to exit?");
        if (ok) {
            await logout();
        }
    };

    const createRoom = async () => {
        navigate("/game");
    };

    return (
        <StyledHomeMenu>
            <button type="button" onClick={createRoom}>
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
