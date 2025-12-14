import "./ProductosAgregados.css"
import type { PeliculaType } from "../productosComponent/datosProductos";
import type { Producto } from "../registroProductoComponents/Producto";

export interface ProductoAgregadoProp {
    pelicula: Producto;
    cantidad: number;
    updateCantidad: (nuevaCantidad: number) => void;
    eliminarProd: (idProducto: number) => void;
}

export const ProductosAgregados = ({pelicula, cantidad, updateCantidad, eliminarProd}:ProductoAgregadoProp) => {

    const gestionConteo = (seAumenta:boolean = true) => {
        if(seAumenta) {
            updateCantidad(cantidad + 1)
        } else if(!seAumenta && cantidad > 1) {
            updateCantidad(cantidad - 1)
        }
    }

    return(
        <div className="row py-2 bg-secondary-subtle producto-container producto-01" data-id="1">
            <img
                className="col-md-3 d-inline-block mb-3 m-md-0 img-pelicula"
                src={`http://localhost:8081${pelicula.imgUrl}`}
                alt={`Poster de ${pelicula.nombreProducto}`}
            />
            
            <div className="col-md-5 d-flex align-items-center descr-producto">
                <div className="descr-prod-content">
                    <h2>{pelicula.nombreProducto}</h2>
            
                    <p className="descripcion">{pelicula.descripcion}</p>
            
                    <div className="btn-eliminar-container">
                        <button className="btn btn-danger" onClick={() => eliminarProd(pelicula.id!)}>Eliminar</button>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4 d-flex align-items-center justify-content-center text-center precio-prod">
                <div className="precio-prod-content">
                    <p className="fw-bold precio">{`$${pelicula.precio * cantidad}`}</p>
            
                    <div className="cantidad-container">
                        <button className="bg-primary text-light me-1 border-0 rounded-pill fw-bold restar" onClick={() => gestionConteo(false)}> - </button>
                        <input className="text-center num-cantidad" type="number" name="num-cantidad" min="1" value={`${cantidad}`} readOnly/>
                        <button className="bg-primary text-light ms-1 border-0 rounded-pill fw-bold sumar" onClick={() => gestionConteo()}> + </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
