import 'bootstrap/dist/css/bootstrap.min.css';
import { TarjetaProducto } from "./TarjetaProducto";
import { useEffect, useState } from 'react';
import type { Producto } from "../../registroProductoComponents/Producto";
import { obtenerProductos } from '../../registroProductoComponents/ProductoService';

interface ProductosProps {
    agregarProd: (idProd: number) => void;
}

export const Productos = ({agregarProd}:ProductosProps) => {
    const [peliculas, setPeliculas] = useState<Producto[]>([]);

    useEffect(() => {
        const cargarProductos = async () => {
            try {
                const data = await obtenerProductos();
                setPeliculas(data);
            } catch(error) {
                alert("Error al obtener las películas. Revisa las consolas");
                console.error("Error al obtener las peliculas", error);
            }
        }

        cargarProductos();
    }, []);

    return(
        <>
        <main className="main-container">
        
            <h1 className="text-center text-uppercase fs-1 my-5">productos</h1>
            
            <article className="row mx-lg-4 mx-md-3 mx-sm-5">
                {peliculas.map((pelicula, index) => (
                    
                    <TarjetaProducto key={index} agregarProd={agregarProd} producto={pelicula} />))}
            </article>
        </main>
        </>
    );
}
