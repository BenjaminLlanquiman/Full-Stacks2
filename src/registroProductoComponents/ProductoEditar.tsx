import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { actualizarProducto, obtenerProductoPorId } from "./ProductoService";
import type { Producto } from "./Producto";


export default function ProductoEditar() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [producto, setProducto] = useState<Usuario>({
    codigo: "",
    nombreProducto: "",
    descripcion: "",
    precio: "",
    stockCritico: "",
    stock: "",
    categoria: ""
  });

useEffect(() => {
  async function cargarProducto() {
    if (!id) return;

    try {
      const response = await obtenerProductoPorId(Number(id));
      setProducto(response.data);
    } catch {
      alert("Producto no encontrado");
      navigate("/home-admin");
    }
  }

  cargarProducto();
}, [id]);

  const handleChange = (e: any) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const guardarCambios = async () => {
    try {
      await actualizarProducto(Number (id), producto);
      alert("Producto actualizado correctamente 🎉");
      navigate("/producto-admin");1
    } catch (err) {
      alert("Error al actualizar el producto");
    }
  };

  return (
    <>
      <div className="editar-container">
        <h2>✏ Editar Producto</h2>

        <div className="form">
          <label>Código</label>
          <input name="codigo" value={producto.codigo} onChange={handleChange} />

          <label>Nombre Producto</label>
          <input name="nombreProducto" value={producto.nombreProducto} onChange={handleChange} />

          <label>Descripción</label>
          <input
            name="descripcion"
            value={producto.descripcion}
            onChange={handleChange}
          />

          <label>Precio</label>
          <input name="precio" value={producto.precio} onChange={handleChange} />

          <label>Stock Crítico</label>
          <input
            type="number"
            name="stockCritico"
            value={producto.stockCritico}
            onChange={handleChange}
          />

          <label>Stock</label>
          <input
            type="number"
            name="stock"
            value={producto.stock}
            onChange={handleChange}
          />

          <label>Categorías</label>
          <input
            name="categoria"
            value={producto.categoria}
            onChange={handleChange}
          />
        </div>

        <div className="btn-group">
          <button className="guardar" onClick={guardarCambios}>
             Guardar Cambios
          </button>
          <button className="cancelar" onClick={() => navigate("/home-admin")}>
             Cancelar
          </button>
        </div>
      </div>
    </>
  );

}