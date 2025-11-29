import { useRoutes } from "react-router-dom"
import { Productos } from "../productosComponent/components/Productos"
import { DetalleProducto } from "../productosComponent/components/DetalleProducto"
import { CarritoCompras } from "../carritoCompraComponent/CarritoCompras"
import type { PeliculaType } from "../productosComponent/datosProductos"
import HomeTienda from "../homeComponents/home_tienda"
import LoginForm from "../loginComponents/LoginForm"
import Nosotros from "../nosotrosComponents/nosotros"
import Blogs from "../blogsComponents/blogs"
import Contacto from "../contactoComponents/contacto"
import HomeAdmin from "../homeComponents/home_admin"
import { RegistroUsuario } from "../registroComponent/components/RegistroUsuario"
import AdminEditar from "../homeComponents/AdminEditar"

interface RoutesProps {
    carrito: PeliculaType[];
    agregarProd: (idProd: number) => void;
    eliminarProd: (idProd: number) => void;
    limpiarCarrito: () => void;
}

export const Routes = ({carrito, agregarProd, eliminarProd, limpiarCarrito}:RoutesProps) => {
        const routes = useRoutes([
            { path:"/", element: <HomeTienda />},
            { path:"/productos", element: <Productos agregarProd = {agregarProd}/>},
            { path:"/detalle-pelicula/:id", element: <DetalleProducto agregarProd = {agregarProd} />},
            { path:"/carrito", element: <CarritoCompras carrito={carrito} eliminarProd = {eliminarProd} limpiarCarrito={limpiarCarrito} />},
            { path:"/login", element: <LoginForm />},
            { path:"/nosotros", element: <Nosotros />},
            { path:"/blogs", element: <Blogs />},
            { path:"/contacto", element: <Contacto />},
            { path:"/registro-usuario", element: <RegistroUsuario tituloPagina="Registro de Usuario" />},
            { path:"*", element: <h1 className="fs-1 text-center my-5">Página no encontrada</h1>},
            { path:"/admin",element: <HomeAdmin/>},
            { path:"//Editar/:id", element:<AdminEditar/>}
            
        ]);

        return routes;
}