import api from "./apiConfig.js";

export const signUp = async (credentials) => {
  try {
    const resp = await api.post("/user/register/", credentials);
    localStorage.setItem("token", resp.data.access);
    return resp.data.user;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (credentials) => {
  try {
    const resp = await api.post("/user/login/", credentials);
    localStorage.setItem("token", resp.data.access);
    return resp.data.user;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    localStorage.removeItem("token");
    return true;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const resp = await api.get("/user/token/refresh/");
    localStorage.setItem("token", resp.data.access);
    return resp.data.user;
  }
  return false;
};

export const getUserId = async () => {
	try {
		const resp = await api.get("user/token/refresh/");
		return resp.data.user.id
	} catch (error) {
		throw error;
	}
};
