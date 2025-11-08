import React from 'react';
import Footer from '../componentes/Footer';
import Navbar from "../componentes/Navbar.tsx";

const Contacto: React.FC = () => {
    return (
        <>
        <Navbar />
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
            <div className="p-4 rounded shadow bg-white" style={{ maxWidth: '500px', width: '100%' }}>
                <h1 className="text-center mb-4 text-primary">MoviE-Store</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre Usuario</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nombre"
                            placeholder="Nombre"
                            required
                        />
                        <div className="form-text text-danger">Debe ingresar el nombre.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="correo" className="form-label">Correo</label>
                        <input
                            type="email"
                            className="form-control"
                            id="correo"
                            placeholder="Ej: pia@duoc.cl"
                            required
                        />
                        <div className="form-text text-danger">
                            Correo inválido: debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="contenido" className="form-label">Contenido</label>
                        <textarea
                            className="form-control"
                            id="contenido"
                            rows={4}
                            placeholder="Mensaje"
                            maxLength={500}
                            required
                        ></textarea>
                        <div className="form-text text-danger">Solo se permite hasta 500 caracteres.</div>
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            <i className="fa-solid fa-paper-plane me-2"></i>Enviar Mensaje
                        </button>
                    </div>
                </form>
            </div>
            </div>

            <Footer />
        </>
    );
};

export default Contacto;