import "@fortawesome/fontawesome-free/css/all.min.css";
import "../style/navbar.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface NavbarProps {
  cantProd: number;
}

export default function Navbar({ cantProd }: NavbarProps) {
  const navigate = useNavigate();
  const { role, isAuthenticated } = useAuth();

  const esAdmin = role === "ROLE_ADMIN";
  const esVendedor = role === "ROLE_VENDEDOR";

  return (
    <nav className="navbar">
      <p className="nombre-pagina" onClick={() => navigate("/")}>
        MoviE–Store
      </p>

      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/productos")}>Productos</li>
        <li onClick={() => navigate("/nosotros")}>Nosotros</li>
        <li onClick={() => navigate("/blogs")}>Blogs</li>
        <li onClick={() => navigate("/contacto")}>Contacto</li>

        {/* 🔐 ADMIN */}
        {isAuthenticated && esAdmin && (
          <>
            <li onClick={() => navigate("/admin")}>
              Editar Usuarios
            </li>
            <li onClick={() => navigate("/producto-admin")}>
              Editar Productos
            </li>
          </>
        )}

        {/* 🧑‍💼 VENDEDOR */}
        {isAuthenticated && esVendedor && (
          <li onClick={() => navigate("/producto-admin")}>
            Editar Productos
          </li>
        )}
      </ul>

      {/* 🛒 CARRITO */}
      <p
        className="carrito-compras"
        onClick={() => navigate("/carrito")}
      >
        <i className="fa-solid fa-cart-shopping"></i>
        {` Cart (${cantProd})`}
      </p>
    </nav>
  );
}
