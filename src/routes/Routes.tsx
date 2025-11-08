import { useRoutes } from "react-router-dom"
import { Productos } from "../productosComponent/components/Productos"
import { DetalleProducto } from "../productosComponent/components/DetalleProducto"
import LoginForm from '../loginComponents/LoginForm';
import HomeTienda from "../homeComponents/home_tienda";

export const Routes = () => {
    const routes = useRoutes([
        {path: "/", element: <Productos />},
        {path: "/detalle-pelicula/:id", element: <DetalleProducto />},
        {path: '/Home', element: <HomeTienda />},
        {path: '/Login', element: <LoginForm />}
    ])

    return routes
}