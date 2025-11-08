import { Routes as ReactRoutes, Route } from "react-router-dom"
import { Productos } from "../productosComponent/components/Productos"
import { DetalleProducto } from "../productosComponent/components/DetalleProducto"
import { CarritoCompras } from "../carritoCompraComponent/CarritoCompras"
import type { PeliculaType } from "../productosComponent/datosProductos"
import HomeTienda from "../homeComponents/home_tienda"
import LoginForm from "../loginComponents/LoginForm"
import Nosotros from "../components/nosotros"
import Blogs from "../components/blogs"
import Contacto from "../components/contacto"
import { RegistroUsuario } from "../registroComponent/components/RegistroUsuario"

interface RoutesProps {
    carrito: PeliculaType[];
    agregarProd: (idProd: number) => void;
    eliminarProd: (idProd: number) => void;
}

export const Routes = ({carrito, agregarProd, eliminarProd}:RoutesProps) => {
    return(
        <ReactRoutes>
            <Route path="/" element={<HomeTienda />}/>
            <Route path="/productos" element={<Productos agregarProd = {agregarProd}/>} />
            <Route path="/detalle-pelicula/:id" element={<DetalleProducto agregarProd = {agregarProd} />} />
            <Route path="/carrito" element={<CarritoCompras carrito={carrito} eliminarProd = {eliminarProd} />} />
            <Route path="/login" element={<LoginForm />}/>
            <Route path="/nosotros" element={<Nosotros />}/>
            <Route path="/blogs" element={<Blogs />}/>
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="/registro-usuario" element={<RegistroUsuario tituloPagina="Registro de Usuario" />}/>
            <Route path="*" element={<h1 className="fs-1 text-center my-5">Página no encontrada</h1>}/>
        </ReactRoutes>
    );
}