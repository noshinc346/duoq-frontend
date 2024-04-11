import api from "./apiConfig.js";

export const getChats = async () => {
  try {
    const resp = await api.get("/chat/");
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getChat = async (otherid) => {
  try {
    const resp = await api.get(`/chat/${otherid}/`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const addChat = async (chatData) => {
  try {
    const resp = await api.post("/chat/", chatData);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const deleteChat = async (otherid) => {
	try {
		const resp = await api.delete(`/chat/${otherid}/`);
		return resp.data;
	} catch (error) {
		throw error;
	}
};

export const getMesssages = async (chatid) => {
  try {
    const resp = await api.get(`/chat/messages/${chatid}/`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const addMessage = async (chatid, chatData) => {
  try {
    const resp = await api.post(`/chat/message/${chatid}/`, chatData);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

