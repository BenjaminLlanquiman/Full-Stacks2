import { useNavigate } from "react-router-dom";
import { getProductos } from "../accionesProductos";
import 'bootstrap/dist/css/bootstrap.min.css';

interface peliculaProps {
        id: number;
        titulo: string;
        descripcion: string;
        precio: number;
        imagenSrc: string;
        imagenAlt: string;
        categoria: string;
}

export const Productos = () => {
    const peliculas = getProductos()

    const navigate = useNavigate();

    const navegarDetallePelicula = (pelicula: peliculaProps) => {
        navigate(`/detalle-pelicula/${pelicula.id}`)
    }

    return(
        <main className="main-container">

            <h1 className="text-center text-uppercase fs-1 my-5">productos</h1>

            <div className="row mx-lg-4 mx-md-3 mx-sm-5">
                {peliculas.map(
                    (pelicula, index) => (
                        <div key={index} className="col-12 col-md-3 mb-4">
                            <div className="card w-100 h-100">
                                <a onClick={() => navegarDetallePelicula(pelicula)}>
                                    <img src={`${pelicula.imagenSrc}`} className="card-img-top object-fit-cover" alt={`${pelicula.imagenAlt}`} />
                                </a>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <a onClick = {() => {navegarDetallePelicula(pelicula)}}>
                                            {pelicula.titulo}
                                        </a>
                                    </h5>
                                    <p className="card-text">{`Precio: $${pelicula.precio}`}</p>
                                    <a href="#" className="btn btn-primary">Añadir</a>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
       </main>
    );
}
