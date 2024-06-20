import { Point, TextStyle } from "pixi.js";
import StyledGame from "./styled";
import { Container, Stage, Text } from "@pixi/react";
import { useEffect, useState } from "react";
import { useRoom } from "../../contexts/RoomProvider";
import { MdVideogameAssetOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ImSpinner8 } from "react-icons/im";
import Spinner from "../../components/Spinner";

export default function Game() {
    const [size, setSize] = useState({ x: window.innerWidth - 30, y: window.innerHeight - 30 });
    const { roomId, loading } = useRoom();
    const navigate = useNavigate();

    if (loading)
        return (
            <StyledGame>
                <p className="loading-message">Now loading</p>
                <Spinner />
            </StyledGame>
        );

    if (roomId)
        return (
            <StyledGame>
                <Stage width={size.x} height={size.y} options={{ background: 0xfdf000 }}>
                    <Container width={size.x} height={size.y}>
                        <Text text="GameArea" position={new Point(0, 0)} />
                    </Container>
                </Stage>
            </StyledGame>
        );

    return (
        <StyledGame>
            <h1 className="error-message">
                <MdVideogameAssetOff /> Unable to reach the room
            </h1>
            <button type="button" onClick={() => navigate("/")}>
                Back to home
            </button>
        </StyledGame>
    );
}
