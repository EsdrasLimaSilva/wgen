import { RoomAction, RoomActionType, RoomState } from "./reducerTypes";

export function roomReducer(state: RoomState, action: RoomAction): RoomState {
    const { type, payload } = action;

    switch (action.type) {
        case RoomActionType.CONNECT:
            return { ...state, id: payload.id };
            break;
        case RoomActionType.CREATE:
            return { ...state };
            break;
        default:
            return state;
    }
}

export const roomInitialState: RoomState = {
    id: null
};
