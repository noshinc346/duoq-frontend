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

export const addGame = async (gameData) => {
  try {
    const resp = await api.post("/games/", gameData);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const editGame = async (id, gameData) => {
	try {
  		const resp = await api.put(`/games/${id}/`, gameData);
  		return resp.data;
  	} catch (error) {
    		throw error;
  	}
};

export const deleteGame = async (id) => {
	try {
		const resp = await api.delete(`/games/${id}/`);
		return resp.data;
	} catch (error) {
		throw error;
	}
};
