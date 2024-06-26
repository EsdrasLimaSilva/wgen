import axios, { AxiosInstance, AxiosResponse } from "axios";
import { ApiResponse } from "./types";

class Api {
    #instance: AxiosInstance;

    constructor() {
        this.#instance = axios.create({ baseURL: process.env.API_BASE_URL });
    }

    async getDummy(authToken: string) {
        const response: AxiosResponse<ApiResponse> = await this.#instance.get("/", {
            headers: { Authorization: `Bearer ${authToken}` }
        });
        return response.data;
    }

    async createPlayer(playerId: string, authToken: string) {
        const response: AxiosResponse<ApiResponse> = await this.#instance.post(
            "/player",
            { id: playerId },
            { headers: { Authorization: `Bearer ${authToken}` } }
        );
        const data = response.data;
        return data;
    }

    async getPlayer(playerId: string, authToken: string) {
        const response: AxiosResponse<ApiResponse> = await this.#instance.get(`/player/${playerId}`, {
            headers: { Authorization: `Bearer ${authToken}` }
        });
        const data = response.data;
        return data;
    }
}

export default new Api();
