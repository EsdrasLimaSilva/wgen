import { ReactNode, Reducer, createContext, useContext, useReducer, useState } from "react";
import { roomInitialState, roomReducer } from "./reducer";
import { RoomAction, RoomState } from "./reducerTypes";

interface ContextProps {
    roomId: string | null;
    loading: boolean;
    createRoom: () => Promise<void>;
}

const RoomContext = createContext<ContextProps>({} as ContextProps);

interface Props {
    children: ReactNode;
}

export default function RoomProvider({ children }: Props) {
    const [state, dispatch] = useReducer(roomReducer, roomInitialState);
    const [loading, setLoading] = useState(false);

    const createRoom = async () => {
        try {
            setLoading(true);
        } catch (e) {
            console.log("Error while creating the room: " + e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <RoomContext.Provider value={{ roomId: state.id, createRoom, loading }}>
            {children}
        </RoomContext.Provider>
    );
}

export function useRoom() {
    return useContext(RoomContext);
}
