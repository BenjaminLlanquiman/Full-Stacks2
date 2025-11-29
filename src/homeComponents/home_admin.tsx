import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Usuario } from "../usuariosComponents/usuario";
import { eliminarUsuario, obtenerUsuarios } from "../usuariosComponents/usuarioService";

export default function Home_admin() {
  
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  async function cargarUsuarios() {
    try {
      const data = await obtenerUsuarios();
      setUsuarios(data);
    } catch (err) {
      console.error("Error al obtener usuarios:", err);
    } finally {
      setLoading(false);
    }
  }

  async function borrar(id?: number) {
    if (!id) return;

    if (!confirm("¿Seguro que deseas eliminar este usuario?")) return;

    try {
      await eliminarUsuario(id);
      setUsuarios(usuarios.filter(u => u.id !== id));
    } catch (error) {
      alert("No se pudo eliminar el usuario.");
      console.error(error);
    }
  }

  return (
    <div>
      <h1 className="usuarios-wrapper h1.">Panel de usuarios</h1>

      {loading ? <p>Cargando usuarios...</p> : null}

      <button className= "btn-flotante " onClick={() => navigate("/registro-usuario")}>
        Registrar Usuario
      </button>

      <div  className="usuarios-container" style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
        {usuarios.length > 0 ? (
          usuarios.map((u) => (
            <div
              key={u.id}
              style={{
                border: "1px solid gray",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <h3>{u.nombre} {u.apellidos}</h3>
              <p><b>Correo:</b> {u.correo}</p>
              <p><b>Región:</b> {u.regiones}</p>

              <button
                onClick={() => navigate(`/editar/${u.id}`)}
                style={{ marginRight: "10px" }}
              >
                ✏ Editar
              </button>

              <button
                onClick={() => borrar(u.id)}
                style={{ background: "red", color: "white" }}
              >
                🗑 Eliminar
              </button>
            </div>
          ))
        ) : (
          <p>No hay usuarios registrados</p>
        )}
      </div>
    </div>
  );
}