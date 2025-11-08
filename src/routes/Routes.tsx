import { Routes as ReactRoutes, Route } from "react-router-dom"
import { Productos } from "../productosComponent/components/Productos"
import { DetalleProducto } from "../productosComponent/components/DetalleProducto"
import { CarritoCompras } from "../carritoCompraComponent/CarritoCompras"
import type { PeliculaType } from "../productosComponent/datosProductos"

interface RoutesProps {
    carrito: PeliculaType[];
    agregarProd: (idProd: number) => void;
    eliminarProd: (idProd: number) => void;
}

export const Routes = ({carrito, agregarProd, eliminarProd}:RoutesProps) => {
    return(
        <ReactRoutes>
            <Route path="/" element={<Productos agregarProd = {agregarProd}/>} />
            <Route path="/detalle-pelicula/:id" element={<DetalleProducto agregarProd = {agregarProd} />} />
            <Route path="/carrito" element={<CarritoCompras carrito={carrito} eliminarProd = {eliminarProd} />} />
        </ReactRoutes>
    );
}