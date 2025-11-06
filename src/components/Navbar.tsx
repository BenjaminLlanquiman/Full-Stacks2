import "../style/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <p className="nombre-pagina">MoviE–Store</p>

      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/nosotros">Nosotros</a></li>
        <li><a href="/blogs">Blogs</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>

      <p>
        <a href="./carrito_compras.html">Cart ()</a>
      </p>
    </nav>
  );
}
