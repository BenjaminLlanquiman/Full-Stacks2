import { type UseFormRegisterReturn } from "react-hook-form";

interface registroSelectProp {
    etiqueta: string;
    opcionTextoDefault: string;
    opcionesTexto: {valor: string, valorTexto: string}[];
    msgError?: string;
    registro?: UseFormRegisterReturn;
}

// Componente select formulario
export const RegistroSelect = ({etiqueta, opcionTextoDefault, opcionesTexto, msgError, registro}:registroSelectProp) => {
    return(
        <>
            {msgError && <span className="msg-error activo">{msgError}</span>}
            <select id={etiqueta} {...(registro ? registro : {})} defaultValue = "">
                <option value="" disabled>{opcionTextoDefault}</option>
                {opcionesTexto.map(
                    (opcion, index) => (
                        <option key={index} value={opcion.valor}>{opcion.valorTexto}</option>
                    )
                )}
            </select>
        </>
    );
}
