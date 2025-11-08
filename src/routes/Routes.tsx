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
//import LoginForm from '../loginComponents/LoginForm';
//import HomeTienda from "../homeComponents/home_tienda";
//import Nosotros from "../components/nosotros";
//import Contacto from "../components/contacto";
//import Blogs from "../components/blogs";
//
//
//export const Routes = () => {
//    const routes = useRoutes([
//        {path: "/", element: <Productos />},
//        {path: "/detalle-pelicula/:id", element: <DetalleProducto />},
//        {path: '/Home', element: <HomeTienda />},
//        {path: '/Login', element: <LoginForm />},
//        {path: '/Nosotros', element: <Nosotros />},
//        {path: '/Blogs', element: <Blogs />},
//        {path: '/Contacto', element:<Contacto />}
//    ])

export const Routes = ({carrito, agregarProd, eliminarProd}:RoutesProps) => {
    return(
        <ReactRoutes>
            <Route path="/" element={<Productos agregarProd = {agregarProd}/>} />
            <Route path="/detalle-pelicula/:id" element={<DetalleProducto agregarProd = {agregarProd} />} />
            <Route path="/carrito" element={<CarritoCompras carrito={carrito} eliminarProd = {eliminarProd} />} />
        </ReactRoutes>
    );
}