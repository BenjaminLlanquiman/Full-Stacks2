import { ProductosAgregados } from "./ProductosAgregados";
import type { PeliculaType } from "../productosComponent/datosProductos";

interface ListaProductosProp {
    productos: PeliculaType[];
    cantidades: number[];
    updateCantidades: (index:number, nuevaCantidad: number) => void;
    eliminarProd: (idProducto: number) => void;
}

export const ListaProductos = ({productos, cantidades, updateCantidades, eliminarProd}:ListaProductosProp) => {
    return(
        <section className="col-md-9 lista-productos">
            {productos.map((producto, index) => (
                <ProductosAgregados
                    key={index}
                    pelicula = {producto}
                    cantidad = {cantidades[index]}
                    updateCantidad = {(nuevaCantidad) => updateCantidades(index, nuevaCantidad)}
                    eliminarProd = {() => eliminarProd(producto.id)}
                />
            ))}
        </section>

    );
}
