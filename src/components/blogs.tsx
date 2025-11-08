//import Footer from '../componentes/Footer';
//import Navbar from "../componentes/Navbar.tsx";

export default function Blogs() {
    return (
        <>
          {/*<Navbar />*/}
            {/* Main content */}
            <main className="container my-5">
                <h1 className="mb-4">Noticias Importantes</h1>
                <section className="row">
                    {/* Blog 1 */}
                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <img src="/assets/img/cine_independiente.jpg" className="card-img-top" alt="Cine Independiente" />
                            <div className="card-body">
                                <h5 className="card-title">El poder del Cine independiente</h5>
                                <p className="card-text">
                                    Descubre cómo películas como <em>Parásitos</em> y <em>Whiplash</em> conquistaron al público y la crítica.
                                </p>
                                <a href="./detalle_blog1.html" className="btn btn-outline-primary">Leer más</a>
                            </div>
                        </div>
                    </div>

                    {/* Blog 2 */}
                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <img src="/assets/img/peliculas_historicas.jpg" className="card-img-top" alt="Películas históricas" />
                            <div className="card-body">
                                <h5 className="card-title">5 películas que cambiaron la historia del cine</h5>
                                <p className="card-text">
                                    Desde <em>Ciudadano Kane</em> hasta <em>Matrix</em>, repasamos los títulos que revolucionaron el cine.
                                </p>
                                <a href="./detalle_blog2.html" className="btn btn-outline-primary">Leer más</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

           {/*<Footer />*/}
        </>
    );
}