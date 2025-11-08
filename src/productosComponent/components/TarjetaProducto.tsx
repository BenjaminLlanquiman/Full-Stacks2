import { useNavigate } from "react-router-dom";
import type { PeliculaType } from "../datosProductos";

interface TarjetaProductoProps {
    agregarProd: (idProd: number) => void;
    producto: PeliculaType;
}

export const TarjetaProducto = ({agregarProd, producto}:TarjetaProductoProps) => {
    const navigate = useNavigate();

    const navegarDetallePelicula = (pelicula: PeliculaType) => {
        navigate(`/detalle-pelicula/${pelicula.id}`)
    }

    return(
        <div className="col-12 col-md-3 mb-4">
            <div className="card w-100 h-100">
                <img
                    src={`${producto.imagenSrc}`}
                    className="card-img-top cursor-pointer object-fit-cover"
                    alt={`${producto.imagenAlt}`}
                    onClick={() => navegarDetallePelicula(producto)}
                    style={{cursor: 'pointer'}}
                />
                <div className="card-body">
                    <h5 className="card-title">
                        <a onClick = {() => {navegarDetallePelicula(producto)}} style={{cursor: 'pointer', color: '#042dd1'}}>
                            {producto.titulo}
                        </a>
                    </h5>
                    <p className="card-text">{`Precio: $${producto.precio}`}</p>
                    <button className="btn btn-primary" onClick={() => agregarProd(producto.id)}>Añadir</button>
                </div>
            </div>
        </div>
    );
}
