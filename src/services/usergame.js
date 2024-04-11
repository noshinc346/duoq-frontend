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
};

export const getAUserGame = async (gameid) => {
	try {
		const resp = await api.get(`/games/usergames/detail/${gameid}/`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const editUserGame = async (gameid, newData) => {
	try {
		const resp = await api.put(`/games/usergames/detail/${gameid}/`, newData);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const deleteUserGame = async (gameid) => {
	try {
		const resp = await api.delete(`/games/usergames/detail/${gameid}/`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

