import { useNavigate } from "react-router-dom";
import type { Producto } from "../../registroProductoComponents/Producto";

interface TarjetaProductoProps {
    agregarProd: (idProd: number) => void;
    producto: Producto;
}

export const TarjetaProducto = ({agregarProd, producto}:TarjetaProductoProps) => {
    const navigate = useNavigate();

    const navegarDetallePelicula = (pelicula: Producto) => {
        navigate(`/detalle-pelicula/${pelicula.id}`)
    }

    const imagenUrl = producto.imgUrl;

    return(
        <div className="col-12 col-md-3 mb-4">
            <div className="card w-100 h-100">
                <img
                    src={`http://localhost:8081${imagenUrl}`}
                    className="card-img-top cursor-pointer object-fit-cover"
                    alt={`Poster de pelicula ${producto.nombreProducto}`}
                    onClick={() => navegarDetallePelicula(producto)}
                    style={{cursor: 'pointer'}}
                />
                <div className="card-body">
                    <h5 className="card-title">
                        <a onClick = {() => {navegarDetallePelicula(producto)}} style={{cursor: 'pointer', color: '#042dd1'}}>
                            {producto.nombreProducto}
                        </a>
                    </h5>
                    <p className="card-text">{`Precio: $${producto.precio}`}</p>
                    <button className="btn btn-primary" onClick={() => agregarProd(producto.id!)}>Añadir</button>
                </div>
            </div>
        </div>
    );
}
