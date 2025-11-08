import "bootstrap/dist/css/bootstrap.min.css"
import { TotalPago } from "./TotalPago"
import { useState } from "react";
import { ListaProductos } from "./ListaProductos";
import { VistaCarritoVacio } from "./VistaCarritoVacio";
import type { PeliculaType } from "../productosComponent/datosProductos";

interface CarritoComprasProp {
    carrito: PeliculaType[];
    eliminarProd: (idProd: number) => void;
}


export const CarritoCompras = ({carrito, eliminarProd}:CarritoComprasProp) => {

    const cantidadesIniciales = Array(carrito.length).fill(1) // Esto seria tipo [1, 1, 1, 1] si peliculas.length = 4

    const [cantidades, setCantidades] = useState(cantidadesIniciales)

    const updateCantidades = (index: number, nuevaCantidad: number) => {
        setCantidades(
            (prev) => {
                const copiaEstPrev = [...prev]  // Copia del estado previo de 'cantidades'. Se ubica en un espacio de memoria distinto del de 'prev'
                copiaEstPrev[index] = nuevaCantidad
                return copiaEstPrev;
            }
        )
    }

    // Costo total = suma acumulada de la multiplicacion entre precios de las peliculas y las cantidades compradas
    const costoTotal = carrito.reduce((acum, pelicula, index) => acum + (pelicula.precio * cantidades[index]), 0)

    return(
        <main className="main-container">
            <h1 className="text-center fs-1 my-md-5 my-3">Carrito de compras</h1>

            { carrito.length > 0 ? (
                <article className="row carrito-container">
                    <ListaProductos
                        productos = {carrito}
                        cantidades = {cantidades}
                        updateCantidades = {updateCantidades}
                        eliminarProd = {eliminarProd}
                    />

                    <TotalPago costoTotal={costoTotal} />
                </article>
            ) : (
                <VistaCarritoVacio />
            )}
        </main>
    );
}
