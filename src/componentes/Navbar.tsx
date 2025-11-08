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
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/">Productos</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
      <p>
        {/*<a href="./carrito_compras.html">Cart ({cantProd})</a>*/}
        <Link to="/carrito">{`Cart (${cantProd})`}</Link>
      </p>
    </nav>
  );
}
