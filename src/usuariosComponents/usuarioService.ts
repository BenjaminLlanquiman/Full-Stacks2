// @ts-ignore
import api from "../axiosConfig/axiosConfig";

export const obtenerUsuarios = () => api.get("/");
export const crearUsuario = (usuario: any) => api.post("", usuario);
