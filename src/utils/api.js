import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const register = (role, data) => API.post(`/auth/register/${role}`, data);
export const login = (role, data) => API.post(`/auth/login/${role}`, data);
export const addProduct = (data, token) =>
  API.post('/product/add', data, { headers: { Authorization: token } });