import api from "./apiConfig.js";

export const getUserGame = async (id) => {
    try {
        const response = await api.get(`/games/usergames/${id}/`);
        return response.data;
    } catch (error) {
        throw error
    }
};

export const addUserGame = async (userGameData) => {
    try {
        const response =await api.post('/games/usergames/', userGameData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAUserGame = async (gameid) => {
	try {
		const resp = await api.get(`/games/usergames/detail/${gameid}/`);
		return resp.data;
	} catch (error) {
		throw error;
	}
};

export const editUserGame = async (gameid, newData) => {
	try {
		const resp = await api.patch(`/games/usergames/detail/${gameid}/`, newData);
		return resp.data;
	} catch (error) {
		throw error;
	}
};

export const deleteUserGame = async (gameid) => {
	try {
		const resp = await api.delete(`/games/usergames/detail/${gameid}/`);
		return resp.data;
	} catch (error) {
		throw error;
	}
};

export const getUserGamesByGame = async (gameid) => {
	try {
		const resp = await api.get(`/games/usergames/for/${gameid}/`);
		return resp.data;
	} catch (error) {
		throw error;
	}
};
