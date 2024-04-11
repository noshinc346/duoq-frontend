import api from "./apiConfig.js";

export const getUserGame = async (id) => {
    try {
        const response = await api.get(`games/usergames/${id}/`);
        return response.data;
    } catch (error) {
        throw error
    }
};

export const addUserGame = async (id, userGameData) => {
    try {
        const response =await api.post(`games/usergames/${id}/`, userGameData);
        return response.data;
    } catch (error) {
        throw error;
    }
}