import { type UseFormRegisterReturn } from "react-hook-form";

interface ProductoInputProp {
    etiqueta:string;
    etiquetaTexto?:string;
    etiquetaTextoOpcional?: string;
    type:string;
    msgError?:string;
    placeholder?:string;
    registro?: UseFormRegisterReturn;
}

export const ProductoInput = ({etiqueta, etiquetaTexto, etiquetaTextoOpcional, type, msgError, placeholder, registro}:ProductoInputProp) => {
    return(
        <div>
            {etiquetaTexto && <label className="form-label text-uppercase" htmlFor={etiqueta}>{etiquetaTexto}</label>}
            {etiquetaTextoOpcional && <label className="form-label text-uppercase" htmlFor={etiqueta}>{etiquetaTextoOpcional} (<span>opcional</span>)</label>}
            {msgError && <span className="d-block text-danger msg-error activo">{msgError}</span>}
            <input
                className="form-control mb-3"
                id={etiqueta}
                type={type}
                {...(registro ? registro : {})}
                placeholder={placeholder}
            />
        </div>
    );
}
