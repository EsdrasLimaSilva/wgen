export enum RoomActionType {
    CREATE = "CREATE",
    CONNECT = "CONNECT"
}

export interface RoomAction {
    type: RoomActionType;
    payload: any;
}

export interface RoomState {
    id: string | null;
}
