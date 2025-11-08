import "@fortawesome/fontawesome-free/css/all.min.css";
import "../style/home_tienda.css";

import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";
import {Link} from 'react-router-dom';

export default function HomeTienda() {
  return (
    <>

      <Navbar />
      {/* CONTENIDO PRINCIPAL */}
      <article className="main-container">
        {/* Opciones usuario */}
        <div className="usuario-container">
          <ul>
            <li><Link to="/Login">Iniciar sesión</Link></li>
            <li><a href="#">Registrar usuario</a></li>
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
              <a href="#">Explorar catálogo</a>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1581905764498-f1b60bae941a?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="Imagen de la tienda"
          />
        </header>

        {/* PRODUCTOS RECOMENDADOS */}
        <section className="productos-recomendados">
          <div className="producto-card">
            <a className="ancla-img" href="./detalle_producto.html">
              <img src="./assets/img/seven-poster.jpg" alt="Imagen poster Seven" />
            </a>
            <div className="prod-titulo">
              <a className="ancla-titulo-prod" href="./detalle_producto.html">
                Los Siete Pecados Capitales
              </a>
            </div>
            <p>$1000</p>
          </div>

          <div className="producto-card">
            <a className="ancla-img" href="#">
              <img src="./assets/img/fast-furious-poster.jpg" alt="Imagen Rapido y Furioso" />
            </a>
            <div className="prod-titulo">
              <a className="ancla-titulo-prod" href="#">
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
      <Footer />  
    </>
  );
}
