import axios from "axios";

export const api = axios.create({
    baseURL: process.env.API_URL || 'http://localhost:3001',
    responseType: 'json',
});

export const setAuthToken = token => {
    if (token) api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    else delete api.defaults.headers.common['Authorization'];
};