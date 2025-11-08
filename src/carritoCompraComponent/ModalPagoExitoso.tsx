
interface ModalPagoExitosoProps {
    onClose: () => void;
}

export const ModalPagoExitoso = ({onClose}:ModalPagoExitosoProps) => {
    return(
        <>
        {/* Para fondo oscuro del modal */}
        <div className="modal-backdrop fade show" onClick={onClose}></div>

        {/* Modal */}
        <div id="modalPago" className="modal show" tabIndex={-1} style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Compra exitosa</h5>
                        <button type="button" className="btn-close" onClick={onClose}  aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Su compra se ha procesado con éxito. Ahora será dirigido a la plataforma de pago.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose} >Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
