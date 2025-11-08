import React from 'react';
import Footer from "../componentes/Footer.tsx";
import Navbar from "../componentes/Navbar.tsx";
import '../style/NavBar.css'


const Nosotros: React.FC = () => {
    return (
        <>
            <Navbar />
            {/* Main content */}
            <main className="container my-5">
                <h1 className="text-center mb-5 text-dark">Conoce nuestro propósito</h1>

                <div className="mb-5">
                    <img
                        src="/assets/img/nuestro_equipo.jpg"
                        alt="Nuestro equipo"
                        className="img-fluid rounded mb-3"
                    />
                    <h2>Pasión por el cine</h2>
                    <p>
                        En <strong>Tienda Online</strong>, creemos que el cine es más que entretenimiento: es cultura, memoria y emoción.
                        Nuestro equipo está formado por cinéfilos, desarrolladores y curadores editoriales que trabajan para acercarte
                        las mejores películas, desde clásicos hasta estrenos independientes.
                    </p>
                </div>

                <div className="mb-5">
                    <h2>Misión y visión</h2>
                    <p>
                        Nuestra misión es democratizar el acceso al cine de calidad, ofreciendo una plataforma intuitiva, estética y funcional.
                        Nuestra visión es convertirnos en el referente latinoamericano en distribución digital de películas, promoviendo la diversidad,
                        el pensamiento crítico y la experiencia cinematográfica.
                    </p>
                </div>

                <div className="mb-5">
                    <img
                        src="/assets/img/comunidad.jpg"
                        alt="Comunidad"
                        className="img-fluid rounded mb-3"
                    />
                    <h2>Compromiso con la comunidad</h2>
                    <p>
                        Cada usuario forma parte de una comunidad que valora el arte, la narrativa y la innovación. Promovemos el diálogo,
                        la recomendación editorial y el descubrimiento de nuevas voces cinematográficas. En Tienda Online, el cine se vive,
                        se comparte y se transforma.
                    </p>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default Nosotros;