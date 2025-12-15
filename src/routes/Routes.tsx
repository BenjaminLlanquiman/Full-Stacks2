import { useRoutes } from "react-router-dom";
import { Productos } from "../productosComponent/components/Productos";
import { DetalleProducto } from "../productosComponent/components/DetalleProducto";
import { CarritoCompras } from "../carritoCompraComponent/CarritoCompras";
import HomeTienda from "../homeComponents/home_tienda";
import LoginForm from "../loginComponents/LoginForm";
import Nosotros from "../nosotrosComponents/nosotros";
import Blogs from "../blogsComponents/blogs";
import Contacto from "../contactoComponents/contacto";
import HomeAdmin from "../homeComponents/home_admin";
import { RegistroUsuario } from "../registroComponent/components/RegistroUsuario";
import { RegistroProducto } from "../registroProductoComponents/RegistroProducto";
import ProductoEditar from "../registroProductoComponents/ProductoEditar";
import ProductoAdmin from "../registroProductoComponents/ProductoAdmin";
import AdminEditar from "../homeComponents/AdminEditar";
import type { Producto } from "../registroProductoComponents/Producto";
import PrivateRoute from "../context/PrivateRoute";

interface RoutesProps {
  carrito: Producto[];
  agregarProd: (idProd: number) => void;
  eliminarProd: (idProd: number) => void;
  limpiarCarrito: () => void;
}

export const Routes = ({
  carrito,
  agregarProd,
  eliminarProd,
  limpiarCarrito,
}: RoutesProps) => {
  const routes = useRoutes([
    // 🌍 PÚBLICAS
    { path: "/", element: <HomeTienda /> },
    { path: "/productos", element: <Productos agregarProd={agregarProd} /> },
    {
      path: "/detalle-pelicula/:id",
      element: <DetalleProducto agregarProd={agregarProd} />,
    },
    { path: "/nosotros", element: <Nosotros /> },
    { path: "/blogs", element: <Blogs /> },
    { path: "/contacto", element: <Contacto /> },
    { path: "/login", element: <LoginForm /> },

    // 🛒 CARRITO (PÚBLICO, SIN LOGIN)
    {
      path: "/carrito",
      element: (
        <CarritoCompras
          carrito={carrito}
          eliminarProd={eliminarProd}
          limpiarCarrito={limpiarCarrito}
        />
      ),
    },

    // 🔐 SOLO ADMIN
    {
      path: "/admin",
      element: (
        <PrivateRoute roles={["ROLE_ADMIN"]}>
          <HomeAdmin />
        </PrivateRoute>
      ),
    },
    {
      path: "/registro-usuario",
      element: (
        <PrivateRoute roles={["ROLE_ADMIN"]}>
          <RegistroUsuario tituloPagina="Registro de Usuario" />
        </PrivateRoute>
      ),
    },
    {
      path: "/registro-producto",
      element: (
        <PrivateRoute roles={["ROLE_ADMIN"]}>
          <RegistroProducto tituloPagina="Registro Productos" />
        </PrivateRoute>
      ),
    },

    // 🔐 ADMIN + VENDEDOR
    {
      path: "/producto-admin",
      element: (
        <PrivateRoute roles={["ROLE_ADMIN", "ROLE_VENDEDOR"]}>
          <ProductoAdmin />
        </PrivateRoute>
      ),
    },

    {
      path: "/Editar/:id",
      element: (
        <PrivateRoute roles={["ROLE_ADMIN"]}>
          <AdminEditar />
        </PrivateRoute>
      ),
    },
    {
      path: "/EditarProducto/:id",
      element: (
        <PrivateRoute roles={["ROLE_ADMIN", "ROLE_VENDEDOR"]}>
          <ProductoEditar />
        </PrivateRoute>
      ),
    },

    // ❌ 404
    {
      path: "*",
      element: (
        <h1 className="fs-1 text-center my-5">
          Página no encontrada
        </h1>
      ),
    },
  ]);

  return routes;
};
