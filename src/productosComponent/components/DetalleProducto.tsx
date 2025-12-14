import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Producto } from '../../registroProductoComponents/Producto';
import { obtenerProductoPorId } from '../../registroProductoComponents/ProductoService';

interface DetalleProductoProps {
    agregarProd: (idProd: number) => void;
}

export const DetalleProducto = ({agregarProd}:DetalleProductoProps) => {

    const [pelicula, setPelicula] = useState<Producto | null>(null);
    const [error, setError] = useState<string | null>(null);

    const { id } = useParams<{id: string}>();

    useEffect(() => {
        const cargarPelicula= async() => {
            if(id) {
                try {
                    const response = await obtenerProductoPorId(parseInt(id));
                    setPelicula(response.data);
                } catch(error) {
                    setError("Pelicula no encontrada o error al cargar");
                }
            }
        }

        cargarPelicula();
    }, [id]);

    if(error) return <p className="text-center text-danger">{error}</p>;

    if(!pelicula) return <p className="text-center">Película no encontrada</p>

    return(
        <main className="container-sm bg-secondary-subtle my-3 my-md-5">
            <div className="row">
                <div className="col-md-4 p-0">
                    <img
                        src={`http://localhost:8081${pelicula.imgUrl}`}
                        alt={`Poster de ${pelicula.nombreProducto}`}
                        className="d-block h-100 w-100 rounded img-fluid"
                    />
                </div>

                <div className="col-md-8">
                    <article className="detalle-producto">
                        <h1 className="my-5">{pelicula.nombreProducto}</h1>

                        <p className="descripcion">{pelicula.descripcion}</p>

                        <p className="precio"><span className="fw-bold">Precio:</span> {`$${pelicula.precio}`}</p>

                        <div className="categoria-container">
                            <p className="mb-5"><span className="fw-bold">Categoría:</span> {pelicula.categoria}</p>
                        </div>

                        <div className="text-center btn-agregar-container">
                            <button className="btn btn-danger py-3 px-5" onClick={() => agregarProd(pelicula.id!)}>Añadir al carrito</button>
                        </div>
                    </article>
                </div>
            </div>
        </main>
    );
}