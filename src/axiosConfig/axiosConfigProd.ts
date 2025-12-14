import axios from "axios";

export const apiProducto = axios.create({
  baseURL: "http://localhost:8081/api/v1/productos",
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiProductoImagen = axios.create({
    baseURL: "http://localhost:8081/api/v1/productos",
});