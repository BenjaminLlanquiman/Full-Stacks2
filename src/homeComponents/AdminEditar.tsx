import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  actualizarUsuario,
  obtenerUsuarioPorId,
} from "../usuariosComponents/usuarioService";
import type { Usuario } from "../usuariosComponents/usuario";

export default function AdminEditar() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

const [usuario, setUsuario] = useState<Usuario>({
  run: "",
  nombre: "",
  apellidos: "",
  correo: "",
  password: "",
  regiones: "",
  fechaNacimiento: "",
  telefono: "",
  tipoUsuario: {
    id: 2, // vendedor por defecto
  },
});

  /* =========================
     CARGAR USUARIO
  ========================= */
  useEffect(() => {
    async function cargarUsuario() {
      if (!id) return;

      try {
        const response = await obtenerUsuarioPorId(Number(id));
        setUsuario(response.data);
      } catch (error) {
        alert("Usuario no encontrado");
        navigate("/admin");
      }
    }

    cargarUsuario();
  }, [id, navigate]);

  /* =========================
     HANDLE CHANGE
  ========================= */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUsuario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================
     GUARDAR CAMBIOS
  ========================= */
  const guardarCambios = async () => {
    if (!id) return;

    try {
      await actualizarUsuario(Number(id), usuario);
      alert("Usuario actualizado correctamente 🎉");
      navigate("/admin");
    } catch (error) {
      alert("Error al actualizar usuario");
    }
  };

  /* =========================
     RENDER
  ========================= */
  return (
    <div className="editar-container">
      <h2>✏ Editar Usuario</h2>

      <div className="form">
        <label>RUN</label>
        <input
          name="run"
          value={usuario.run}
          onChange={handleChange}
          disabled
        />

        <label>Nombre</label>
        <input
          name="nombre"
          value={usuario.nombre}
          onChange={handleChange}
        />

        <label>Apellidos</label>
        <input
          name="apellidos"
          value={usuario.apellidos}
          onChange={handleChange}
        />

        <label>Correo</label>
        <input
          name="correo"
          value={usuario.correo}
          onChange={handleChange}
        />

        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          value={usuario.password}
          onChange={handleChange}
        />

        <label>Fecha de nacimiento</label>
        <input
          type="date"
          name="fechaNacimiento"
          value={usuario.fechaNacimiento}
          onChange={handleChange}
        />

        <label>Región</label>
        <input
          name="regiones"
          value={usuario.regiones}
          onChange={handleChange}
        />

        <label>Teléfono</label>
        <input
          name="telefono"
          value={usuario.telefono}
          onChange={handleChange}
        />
      </div>

      <div className="btn-group">
        <button className="guardar" onClick={guardarCambios}>
          Guardar Cambios
        </button>

        <button
          className="cancelar"
          onClick={() => navigate("/admin")}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
