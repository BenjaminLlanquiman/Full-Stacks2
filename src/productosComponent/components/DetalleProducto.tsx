import 'bootstrap/dist/css/bootstrap.min.css'
import { getProductos } from '../accionesProductos';
//import { useNavigate, useParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';

/*
interface DetalleProductoProp {
    productos: {titulo: string, descripcion: string, precio: number, imagenSrc: string, imagenAlt: string, categoria: string}
}
*/

const buscarPeliculaPorId = (id:string|undefined) => {
    const peliculas = getProductos()

    if(!id) {
        return;
    }

    const numId = parseInt(id)

    const pelicula = peliculas.find(peli => peli.id === numId);

    return pelicula;
}

//export const DetalleProducto = ({productos}:DetalleProductoProp) => {
export const DetalleProducto = () => {

    //const navigate = useNavigate();

    const { id } = useParams();

    const pelicula = buscarPeliculaPorId(id);

    console.log(pelicula);

    return(
        <main className="container-sm bg-secondary-subtle">
            <div className="row">
                <div className="col-md-4 p-0">
                    <img src={pelicula.imagenSrc} alt={pelicula.imagenAlt} className="d-block h-100 w-100 rounded img-fluid"/>
                </div>

                <div className="col-md-8">
                    <article className="detalle-producto">
                        <h1 className="my-5">{pelicula.titulo}</h1>

                        <p className="descripcion">{pelicula.descripcion}</p>

                        <p className="precio"><span className="fw-bold">Precio:</span> {`$${pelicula.precio}`}</p>

                        <div className="categoria-container">
                            <p className="mb-5"><span className="fw-bold">Categoría:</span> {pelicula.categoria}</p>
                        </div>

                        <div className="text-center btn-agregar-container">
                            <button className="btn btn-danger py-3 px-5">Añadir al carrito</button>
                        </div>
                    </article>
                </div>
            </div>
        </main>
    );
}