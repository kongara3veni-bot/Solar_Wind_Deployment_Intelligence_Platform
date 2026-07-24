import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:8000"
});

// Authentication

export const loginUser = async (data) => {
    const response = await API.post("/auth/login", data);
    return response.data;
};

export const registerUser = async (data) => {
    const response = await API.post("/auth/register", data);
    return response.data;
};

// Projects

export const getProjects = async () => {
    const response = await API.get("/projects");
    return response.data;
};

export const addProject = async (data) => {
    const response = await API.post("/projects", data);
    return response.data;
};

// Dataset

export const uploadDataset = async (data) => {
    const response = await API.post("/datasets/upload", data);
    return response.data;
};

export const readDataset = async () => {
    const response = await API.get("/datasets");
    return response.data;
};

// Prediction

export const predictEnergy = async (data) => {
    const response = await API.get("/prediction/predict", {
        params: data,
    });

    return response.data;
};

export const getPredictionHistory = async () => {
    const response = await API.get("/prediction/history");
    return response.data;
};

// Dashboard

export const getDashboard = async () => {
    const response = await API.get("/dashboard");
    return response.data;
};

// Analytics

export const getAnalytics = async () => {
    const response = await API.get("/analytics");
    return response.data;
};

export default API;