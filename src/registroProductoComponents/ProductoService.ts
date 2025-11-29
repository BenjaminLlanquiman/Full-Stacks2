// @ts-ignore
import apiProducto from "../axiosConfig/axiosConfigProd";

export const obtenerProductos = () => apiProducto.get("/");
export const crearProducto = (producto: any) => apiProducto.post("", producto);