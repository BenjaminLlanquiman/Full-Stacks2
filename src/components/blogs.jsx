import React from 'react';

export default function Blogs() {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar bg-dark text-white px-4 d-flex justify-content-between align-items-center">
                <p className="h4 m-0">MoviE-Store</p>
                <ul className="nav">
                    <li className="nav-item"><a className="nav-link text-white" href="./home_tienda.html">Home</a></li>
                    <li className="nav-item"><a className="nav-link text-white" href="./productos.html">Productos</a></li>
                    <li className="nav-item"><a className="nav-link text-white" href="./nosotros.html">Nosotros</a></li>
                    <li className="nav-item"><a className="nav-link active text-warning" href="./blogs.html">Blogs</a></li>
                    <li className="nav-item"><a className="nav-link text-white" href="./contacto_tienda.html">Contacto</a></li>
                </ul>
                <p className="m-0">
                    <a className="text-white" href="./carrito_compras.html">
                        <i className="fa-solid fa-cart-shopping"></i> Cart (<span className="cant-pedido">0</span>)
                    </a>
                </p>
            </nav>

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

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-3">
                <p>&copy; 2025 MoviE-Store. Todos los derechos reservados.</p>
            </footer>
        </>
    );
}