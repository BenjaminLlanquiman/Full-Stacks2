import axios from "axios";

const apiProducto = axios.create({
  baseURL: "http://localhost:8080/api/v1/productos", // tu backend Spring Boot
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiProducto;
