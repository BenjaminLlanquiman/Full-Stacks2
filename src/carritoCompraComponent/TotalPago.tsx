interface TotalPagoProp {
    costoTotal: number;
}

export const TotalPago = ({costoTotal}:TotalPagoProp) => {
    return(
        <section className="col-md-3 total-pago">
            <div className="total-pagar">
                <p className="total-titulo">Total a pagar:</p>
                <p className="costo-final">{`$${costoTotal}`}</p>
            </div>
        
            <div className="btn-pagar-container">
                <button className="btn btn-success">Pagar</button>
            </div>
        </section>
    );
}
