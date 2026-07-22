import axios from "axios";

// Create Axios Instance
const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

// ==========================
// Authentication APIs
// ==========================

// Register User
export const registerUser = (userData) => {
  return API.post("/auth/register", userData);
};

// Login User
export const loginUser = (loginData) => {
  return API.post("/auth/login", loginData);
};

// ==========================
// Dashboard API
// ==========================

export const getDashboard = () => {
  return API.get("/dashboard/");
};

// ==========================
// Analytics API
// ==========================

export const getAnalytics = () => {
  return API.get("/analytics/");
};

// ==========================
// Prediction APIs
// ==========================

export const predictEnergy = (params) => {
  return API.get("/prediction/", {
    params,
  });
};

// Prediction History
export const getPredictionHistory = () => {
  return API.get("/prediction/history");
};

// ==========================
// Dataset Upload API
// ==========================

export const uploadDataset = (formData) => {
  return API.post("/dataset/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Export Axios Instance
export default API;