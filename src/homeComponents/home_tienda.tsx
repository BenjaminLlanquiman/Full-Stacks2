import "@fortawesome/fontawesome-free/css/all.min.css";
import "../style/home_tienda.css";
import {Link} from 'react-router-dom';

export default function HomeTienda() {
  return (
    <>
      {/* CONTENIDO PRINCIPAL */}
      <article className="main-container">
        {/* Opciones usuario */}
        <div className="usuario-container">
          <ul>
            <li><Link to="/login">Iniciar sesión</Link></li>
            <li><Link to="/registro-usuario">Registrar usuario</Link></li>
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
              <Link to="/productos">Explorar catálogo</Link>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1581905764498-f1b60bae941a?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="Imagen de la tienda"
          />
        </header>

        {/* PRODUCTOS RECOMENDADOS */}
        {/* Los Siete Pecados Capitales */}

        <section className="productos-recomendados">
          <div className="producto-card">
            <Link className="ancla-img" to="/detalle-pelicula/0">
              <img src="./imgPosters/seven-poster.jpg" alt="Imagen poster Seven" />
            </Link>
            <div className="prod-titulo">
              <Link className="ancla-titulo-prod" to="./detalle-pelicula/0">
                Los Siete Pecados Capitales
              </Link>
            </div>
            <p>$1000</p>
          </div>


          {/* Rápido y Furioso: Reto Tokio */}

          <div className="producto-card">
             <Link className="ancla-img" to="/detalle-pelicula/3">
              <img src="./imgPosters/fast-furious-poster.jpg" alt="Imagen Rapido y Furioso" />
            </Link>
            <div className="prod-titulo">
              <Link className="ancla-titulo-prod" to="./detalle-pelicula/3">
                Rápido y Furioso: Reto Tokio
              </Link>
            </div>
            <p>$1000</p>
          </div>


          {/* Matilda */}

          <div className="producto-card">
            <Link className="ancla-img" to="/detalle-pelicula/1">
              <img src="./imgPosters/matilda-poster.jpg" alt="Imagen poster Matilda" />
            </Link>
            <div className="prod-titulo">
              <Link className="ancla-titulo-prod" to="./detalle-pelicula/1">
                Matilda
              </Link>
            </div>
            <p>$1000</p>
          </div>

          {/* Mad Max: Furia en la carretera */}

          <div className="producto-card">
            <Link className="ancla-img" to="/detalle-pelicula/4">
              <img src="./imgPosters/mad-max-poster.jpg" alt="Imagen poster Mad Max" />
            </Link>
            <div className="prod-titulo">
              <Link className="ancla-titulo-prod" to="/detalle-pelicula/4">
              Mad Max: Furia en la carretera
              </Link>
            </div>
            <p>$1000</p>
          </div>


          {/* SuperBad */}

          <div className="producto-card">
            <Link className="ancla-img" to="/detalle-pelicula/2">
              <img src="./imgPosters/superbad-poster.jpg" alt="Imagen poster SuperBad" />
            </Link>
            <div className="prod-titulo">
              <Link className="ancla-titulo-prod" to="/detalle-pelicula/2">SuperBad</Link>
            </div>
            <p>$1000</p>
          </div>
        </section>
      </article>
      {/*<Footer />*/}
    </>
  );
}
