import { apiProducto, apiProductoImagen } from "../axiosConfig/axiosConfigProd";
import type { Producto } from "./Producto";

export const obtenerProductoPorId = (id: number) => apiProducto.get(`/${id}`);

export const obtenerProductos = async () => {
    const response = await apiProducto.get("");
    return response.data;
};

export const crearProducto = async (producto: Producto) => {
    return await apiProducto.post("", producto); 
};

export const eliminarProducto = async (id: number) => {
    return apiProducto.delete(`/${id}`);
};

export const actualizarProducto = async (id: number, producto: Producto) => {
    return apiProducto.put(`/${id}`, producto);
};

export const crearImagen = async(id: number, formData: FormData) => {
    return apiProductoImagen.post(`/${id}/image`, formData)
};