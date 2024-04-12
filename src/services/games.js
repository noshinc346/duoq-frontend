import api from "./apiConfig.js";

export const getGames = async () => {
    try {
        const response = await api.get("/games/");
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getGameById = async (id) => {
    try {
        const response = await api.get(`/games/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}