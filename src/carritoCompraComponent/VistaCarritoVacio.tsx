
export const VistaCarritoVacio = () => {
    return(
        <div className="row mx-md-5 mb-3 mb-md-5 pagina-carrito-vacio">
            <div className="col-md-6 ps-md-4 pe-0 d-flex flex-column justify-content-evenly bg-secondary-subtle texto-carrito-vacio">
                <h2>Tu carrito está vacío</h2>
                <p>Agrega películas en tu carrito de compras para visualizarlas acá.</p>
                <a href="./productos.html">Ir a productos `{'>>'}`</a>
            </div>
            <img className="d-block mw-100 col-md-6 px-0" src="/imgPosters/carrito-vacio.jpg" alt="Imagen de carrito vacío." />
        </div>
    );
}
