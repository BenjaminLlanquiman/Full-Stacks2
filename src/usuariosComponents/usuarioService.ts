import apiPublic from "../axiosConfig/axiosPublic";
import type { Usuario } from "./usuario"



// GET /usuarios/{id}
export const obtenerUsuarioPorId = (id: number) => 
  apiPublic.get(`/usuarios/${id}`);

// GET /usuarios
export const obtenerUsuarios = async () => {
    const response = await apiPublic.get("/usuarios");
    return response.data;
};

// POST /usuarios
export const crearUsuario = async (usuario: Usuario) => {
    return apiPublic.post("/usuarios", usuario);
};

// DELETE /usuarios/{id}
export const eliminarUsuario = async (id: number) => {
    return apiPublic.delete(`/usuarios/${id}`);
};

// PUT /usuarios/{id}
export const actualizarUsuario = async (id: number, usuario: Usuario) => {
    return apiPublic.put(`/usuarios/${id}`, usuario);
};