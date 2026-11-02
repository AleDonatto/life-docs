import axios from "axios";

import { useAuthStore } from "../store/useAuthStore"; 

export const apiUrl = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiUrl.interceptors.request.use(async (config) => {
  const token = useAuthStore.getState().token;
    if (token) {  
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})