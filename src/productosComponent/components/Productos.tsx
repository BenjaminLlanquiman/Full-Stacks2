import { getProductos } from "../accionesProductos";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TarjetaProducto } from "./TarjetaProducto";

interface ProductosProps {
    agregarProd: (idProd: number) => void;
}

export const Productos = ({agregarProd}:ProductosProps) => {
    const peliculas = getProductos()

    return(
        <>
        <main className="main-container">
        
            <h1 className="text-center text-uppercase fs-1 my-5">productos</h1>
            
            <article className="row mx-lg-4 mx-md-3 mx-sm-5">
                {peliculas.map((pelicula, index) => (<TarjetaProducto key={index} agregarProd={agregarProd} producto={pelicula} />))}
            </article>
        </main>
        </>
    );
}
