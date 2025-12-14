import axios from "axios";

const apiPublic = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  withCredentials: true, // 🔥 OBLIGATORIO para cookies HttpOnly
});

export default apiPublic;
