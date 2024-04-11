import api from "./apiConfig.js";

export const getGames = async () => {
  try {
    const resp = await api.get("/games/");
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getGame = async (id) => {
  try {
    const resp = await api.get(`/games/${id}/`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

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


