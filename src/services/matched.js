import api from "./apiConfig.js";

export const getMatches = async () => {
  try {
    const resp = await api.get("/user/matches/");
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getMatch = async (id) => {
  try {
    const resp = await api.get(`/user/matches/${id}/`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const addMatch = async (matchData) => {
  try {
    const resp = await api.post("/user/matches/", matchData);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const editMatch = async (id, matchData) => {
	try {
  		const resp = await api.patch(`/user/matches/${id}/`, matchData);
  		return resp.data;
  	} catch (error) {
    		throw error;
  	}
};

