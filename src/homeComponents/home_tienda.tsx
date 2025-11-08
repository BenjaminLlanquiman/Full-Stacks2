import "@fortawesome/fontawesome-free/css/all.min.css";
import "../style/home_tienda.css";
import {Link} from 'react-router-dom';
import { getProductos } from "../productosComponent/accionesProductos";
import { TarjetaProductoHome } from "./TarjetaProductoHome";


export default function HomeTienda() {

  const peliculas = getProductos()

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
        <section className="productos-recomendados">
            {peliculas.map((pelicula, index) => (<TarjetaProductoHome key={index} producto={pelicula} />))}
       </section>
      </article>
    </>
  );
}
