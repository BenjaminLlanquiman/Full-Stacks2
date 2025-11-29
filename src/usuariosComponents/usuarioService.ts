import api from "../axiosConfig/axiosConfig";
import type { Usuario } from "./usuario";
export const obtenerUsuarioPorId = (id: number) => api.get(`/${id}`);


export const obtenerUsuarios = async () => {
    const response = await api.get("");
    return response.data;
};

export const crearUsuario = async (usuario: Usuario) => {
    return api.post("", usuario); // <-- SIN "/"
};

export const eliminarUsuario = async (id: number) => {
    return api.delete(`/${id}`);
};

export const actualizarUsuario = async (id: number, usuario: Usuario) => {
    return api.put(`/${id}`, usuario);
};
