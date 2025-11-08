import { useState } from "react"
import type { PeliculaType } from "./productosComponent/datosProductos"
import { getProductos } from "./productosComponent/accionesProductos"
import { BrowserRouter } from "react-router-dom"
import { Routes } from "./routes/Routes"
import { Navbar } from "./Navbar"

export const App = () => {
    const peliculas = getProductos()

    const [carrito, setCarrito] = useState<PeliculaType[]>([])

    const agregarAlCarrito = (idProducto: number) => {
        const pelicula = peliculas.find(pelicula => pelicula.id === idProducto)

        if(!pelicula) return;

        setCarrito(prev => {
            const existeItem = prev.find(item => item.id === idProducto)

            if(existeItem) {
                return prev
            } else {
                return [...prev, pelicula]
            }
        })
    }

    const eliminarDelCarrito = (idProducto: number) => {
        setCarrito(prev => prev.filter(item => item.id !== idProducto))
    }

    return(
        <BrowserRouter>
            <Navbar cantProd={carrito.length} />
            <Routes
                carrito={carrito}
                eliminarProd={eliminarDelCarrito}
                agregarProd={agregarAlCarrito}
            />
        </BrowserRouter>
    );
}
