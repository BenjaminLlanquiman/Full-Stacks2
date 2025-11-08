import "@fortawesome/fontawesome-free/css/all.min.css";
import "../style/navbar.css";
import {Link} from 'react-router-dom';

interface NavbarProps {
    cantProd: number;
}

export default function Navbar({cantProd}:NavbarProps) {
  return (
    <nav className="navbar">
      <p className="nombre-pagina">MoviE–Store</p>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
      <p>
        <Link to="/carrito"><i className="fa-solid fa-cart-shopping"></i>{` Cart (${cantProd})`}</Link>
      </p>
    </nav>
  );
}
