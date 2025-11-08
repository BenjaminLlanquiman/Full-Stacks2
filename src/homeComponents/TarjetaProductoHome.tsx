import { Link } from "react-router-dom";
import type { PeliculaType } from "../productosComponent/datosProductos";

interface TarjetaProductoProps {
    producto: PeliculaType;
}

export const TarjetaProductoHome = ({producto}:TarjetaProductoProps) => {
    return(
        <div className="producto-card">
            <Link className="ancla-img" to={`/detalle-pelicula/${producto.id}`}>
                <img src={producto.imagenSrc} alt={producto.imagenAlt} />
            </Link>
            <div className="prod-titulo">
                <Link className="ancla-titulo-prod" to={`./detalle-pelicula/${producto.id}`}>
                    {producto.titulo}
                </Link>
            </div>
            <p>{`$${producto.precio}`}</p>
        </div>
    )
}
