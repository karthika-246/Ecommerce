import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// Auth
export const register = (role, data) => API.post(`/auth/register/${role}`, data);
export const login = (role, data) => API.post(`/auth/login/${role}`, data);

// Product
export const addProduct = (data, token) =>
  API.post("/product/add", data, { headers: { Authorization: token } });

// ✅ New Collection
export const getNewProducts = () => API.get("/product/new");

export default API;
