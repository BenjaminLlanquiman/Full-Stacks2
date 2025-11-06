import "../style/home_usuario.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function HomeUsuario() {
  return (
    <>  
      <nav className="navbar">
        <p className="nombre-pagina">MoviE-Store</p>

        <ul>
          <li><a href="./home_tienda.html">Home</a></li>
          <li><a href="./productos.html">Productos</a></li>
          <li><a href="./nosotros.html">Nosotros</a></li>
          <li><a href="./blogs.html">Blogs</a></li>
          <li><a href="./contacto_tienda.html">Contacto</a></li>
        </ul>

        <p className="carrito">
          <a href="./carrito_compras.html">
            <i className="fa-solid fa-cart-shopping"></i> Cart (
            <span className="cant-pedido"></span>)
          </a>
        </p>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <article className="main-container">
        {/* USUARIO */}
        <div className="usuario-container">
          <ul>
            <li>Lucía Martinez</li>
            <li>
              <a href="./inicio_sesion.html">
                <i className="fa-solid fa-right-to-bracket"></i> Salir
              </a>
            </li>
          </ul>
        </div>

        {/* BANNER */}
        <header className="banner-pagina">
          <div className="descripcion-container">
            <h1>Tienda Online</h1>

            <p>
              Bienvenido a MoviE-Store, tu destino definitivo para explorar y adquirir
              las mejores películas del momento. Aquí, te ofrecemos una amplia selección
              de títulos que abarcan los géneros de acción, comedia y thrillers.
            </p>

            <div className="btn-explorar-prod">
              <a href="./productos.html">Explorar catálogo</a>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1581905764498-f1b60bae941a?q=80&w=464&auto=format&fit=crop"
            alt="Imagen de la tienda"
          />
        </header>

        {/* PRODUCTOS RECOMENDADOS */}
        <section className="productos-recomendados">

          <div className="producto-card">
            <a className="ancla-img" href="./detalle_producto.html">
              <img src="./assets/img/fast-furious-poster.jpg" alt="Imagen Rapido y Furioso" />
            </a>
            <div className="prod-titulo">
              <a className="ancla-titulo-prod" href="./detalle_producto.html">
                Rápido y Furioso: Reto Tokio
              </a>
            </div>
            <p>$1000</p>
          </div>

          <div className="producto-card">
            <a className="ancla-img" href="#">
              <img src="./assets/img/matilda-poster.jpg" alt="Imagen poster Matilda" />
            </a>
            <div className="prod-titulo">
              <a className="ancla-titulo-prod" href="#">Matilda</a>
            </div>
            <p>$1000</p>
          </div>

          <div className="producto-card">
            <a className="ancla-img" href="#">
              <img src="./assets/img/seven-poster.jpg" alt="Imagen poster Seven" />
            </a>
            <div className="prod-titulo">
              <a className="ancla-titulo-prod" href="#">Los Siete Pecados Capitales</a>
            </div>
            <p>$1000</p>
          </div>

          <div className="producto-card">
            <a className="ancla-img" href="#">
              <img src="./assets/img/mad-max-poster.jpg" alt="Imagen poster Mad Max" />
            </a>
            <div className="prod-titulo">
              <a className="ancla-titulo-prod" href="#">Mad Max: Furia en la carretera</a>
            </div>
            <p>$1000</p>
          </div>

          <div className="producto-card">
            <a className="ancla-img" href="#">
              <img src="./assets/img/superbad-poster.jpg" alt="Imagen poster SuperBad" />
            </a>
            <div className="prod-titulo">
              <a className="ancla-titulo-prod" href="#">SuperBad</a>
            </div>
            <p>$1000</p>
          </div>

        </section>
      </article>

      {/* FOOTER */}
      <footer>
        <p>&copy; 2025 MoviE-Store. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}