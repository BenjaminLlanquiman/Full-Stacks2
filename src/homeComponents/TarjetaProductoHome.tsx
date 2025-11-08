import { useNavigate } from "react-router-dom";
import type { PeliculaType } from "../productosComponent/datosProductos";

interface TarjetaProductoProps {
    producto: PeliculaType;
}

export const TarjetaProductoHome = ({producto}:TarjetaProductoProps) => {
    const navigate = useNavigate()

    return(
        <div className="producto-card">
            <div className="ancla-img" onClick={() => navigate(`/detalle-pelicula/${producto.id}`)}>
                <img src={producto.imagenSrc} alt={producto.imagenAlt} />
            </div>
            <div className="prod-titulo">
                <div className="ancla-titulo-prod" onClick={() => navigate(`./detalle-pelicula/${producto.id}`)}>
                    {producto.titulo}
                </div>
            </div>
            <p>{`$${producto.precio}`}</p>
        </div>
    )
}
