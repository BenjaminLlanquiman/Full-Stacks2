import { type UseFormRegisterReturn } from "react-hook-form";

interface registroInputProp {
    etiqueta:string;
    etiquetaTexto?:string;
    etiquetaTextoOpcional?: string;
    type:string;
    msgError?:string;
    placeholder?:string;
    registro?: UseFormRegisterReturn;
}

// Componente Inputs formulario
export const RegistroInput = ({etiqueta, etiquetaTexto, etiquetaTextoOpcional, type, msgError, placeholder, registro}:registroInputProp) => {
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
