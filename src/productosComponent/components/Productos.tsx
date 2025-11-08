import { getProductos } from "../accionesProductos";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TarjetaProducto } from "./TarjetaProducto";
import  Navbar from "../../componentes/Navbar";
import Footer from "../../componentes/Footer";

interface ProductosProps {
    agregarProd: (idProd: number) => void;
}

export const Productos = ({agregarProd}:ProductosProps) => {
    const peliculas = getProductos()

    return(
        <>
        <Navbar />
        <main className="main-container">

            <h1 className="text-center text-uppercase fs-1 my-5">productos</h1>

            <article className="row mx-lg-4 mx-md-3 mx-sm-5">
                {peliculas.map((pelicula, index) => (<TarjetaProducto key={index} agregarProd={agregarProd} producto={pelicula} />))}
            </article>
       </main>
       <Footer />
       </>
    );
}
