import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Producto } from "./Producto";
import { eliminarProducto, obtenerProductos } from "./ProductoService";

export default function ProductoAdmin() {
  
  const navigate = useNavigate();
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargarProductos();
  }, []);

  async function cargarProductos() {
    try {
      const data = await obtenerProductos();
      setProductos(data);
    } catch (err) {
      console.error("Error al obtener productos:", err);
    } finally {
      setLoading(false);
    }
  }

  async function borrar(id?: number) {
    if (!id) return;

    if (!confirm("¿Seguro que deseas eliminar este producto?")) return;

    try {
      await eliminarUsuario(id);
      setProductos(productos.filter(u => u.id !== id));
    } catch (error) {
      alert("No se pudo eliminar el producto.");
      console.error(error);
    }
  }

  return (
    <div>
      <h1 className="usuarios-wrapper h1.">Panel de productos</h1>

      {loading ? <p>Cargando productos...</p> : null}

      <button className= "btn-flotante " onClick={() => navigate("/registro-producto")}>
        Registrar Producto
      </button>

      <div  className="usuarios-container" style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
        {productos.length > 0 ? (
          productos.map((p) => (
            <div
              key={p.id}
              style={{
                border: "1px solid gray",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <h3>{p.nombreProducto}</h3>
              <p><b>Descripción:</b> {p.descripcion}</p>
              <p><b>Categoría:</b> {p.categoria}</p>

              <button
                onClick={() => navigate(`/editarproducto/${p.id}`)}
                style={{ marginRight: "10px" }}
              >
                ✏ Editar
              </button>

              <button
                onClick={() => borrar(p.id)}
                style={{ background: "red", color: "white" }}
              >
                🗑 Eliminar
              </button>
            </div>
          ))
        ) : (
          <p>No hay productos registrados</p>
        )}
      </div>
    </div>
  );
}