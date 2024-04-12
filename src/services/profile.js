import api from "./apiConfig.js"

export const getProfile = async () => {
    try {
        const response = await api.get("/user/profile/");
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getProfileById = async (id) => {
    try {
        const response = await api.get(`/user/profile/${id}/`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updateProfile = async (id, profileData) => {
    try {
        const response = await api.put("/user/profile/", profileData);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const deleteProfile = async () => {
    try {
        const response = await api.delete("/user/profile/");
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const addGameForProfile = async (userId, gameId) => {
    try {
        const response = await api.post(`games/usergames/${userId}/`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const removeGameFromProfile = async (userId, gameId) => {
    try {
        const response = await api.post(`games/usergames/${userId}/${gameId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updateGameForProfile = async (profileId, gameId) => {
    try {
        const response = await api.put(`games/usergames/${profileId}/${gameId}/`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getProfiles = async () => {
    try {
        const response = await api.get("/user/profiles/");
        return response.data;
    } catch (error) {
        throw error;
    }
}