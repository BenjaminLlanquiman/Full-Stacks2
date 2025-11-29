import { useEffect, useState } from "react";
import { obtenerUsuarios, crearUsuario } from "./usuarioService";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  // Obtener la lista al cargar
  useEffect(() => {
    obtenerUsuarios()
      .then(response => {
        setUsuarios(response.data);
      })
      .catch(error => {
        console.error("Error al obtener usuarios:", error);
      });
  }, []);

  // Registrar usuario de prueba
  const registrarUsuario = () => {
    const nuevo = {
      run: "12345678-9",
      nombre: "Juan",
      apellidos: "Pérez",
      correo: "juan@test.com",
      password: "123456",
      regiones: "Chile",
      fechaNacimiento: "2000-01-01",
      telefono: "987654321"
    };

    crearUsuario(nuevo)
      .then(() => {
        alert("Usuario creado correctamente");

        // Refrescar lista
        return obtenerUsuarios();
      })
      .then(response => {
        setUsuarios(response.data);
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      <button onClick={registrarUsuario}>Registrar usuario</button>

      <ul>
        {usuarios.map((u: any) => (
          <li key={u.id}>
            {u.nombre} — {u.correo}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Usuarios;
