import axios from "axios";

let authToken: string | null = null;

// función para actualizar el token desde el AuthContext
export const setAuthToken = (token: string | null) => {
  authToken = token;
};

const apiPublic = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

apiPublic.interceptors.request.use((config) => {
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});

export default apiPublic;
