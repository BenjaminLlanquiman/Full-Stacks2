
interface TotalPagoProp {
    costoTotal: number;
    openModal: () => void;
}

export const TotalPago = ({costoTotal, openModal}:TotalPagoProp) => {
    return(
        <section className="col-md-3 d-flex justify-content-center pt-3 bg-secondary-subtle border border-dark border-top-0 border-bottom-0 border-end-0 total-pago">
            <div className="total-pago-content">
                <div className="total-pagar">
                    <p className="total-titulo fw-bold">Total a pagar:</p>
                    <p className="costo-final fw-bold text-center">{`$${costoTotal}`}</p>
                </div>
        
                <div className="btn-pagar-container text-center">
                    <button className="btn btn-success" onClick={openModal}>Pagar</button>
                </div>
            </div>

        </section>
    );
}
