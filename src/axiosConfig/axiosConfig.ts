import axios from "axios";

export const createApi = (token: string | null) => {
  const api = axios.create({
    baseURL: "http://localhost:8080/api/v1/usuarios",
    headers: {
      "Content-Type": "application/json",

    },
  });

  api.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config
  });

  return api;

};
