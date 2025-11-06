import { useRoutes } from "react-router-dom"
import { Productos } from "../productosComponent/components/Productos"
import { DetalleProducto } from "../productosComponent/components/DetalleProducto"

export const Routes = () => {
    const routes = useRoutes([
        {path: "/", element: <Productos />},
        {path: "/detalle-pelicula/:id", element: <DetalleProducto />}
    ])

    return routes
}