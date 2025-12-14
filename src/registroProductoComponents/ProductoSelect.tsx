import { type UseFormRegisterReturn } from "react-hook-form";

interface ProductoSelectProps {
    etiqueta: string;
    opcionTextoDefault: string;
    opcionesTexto: {valor: string, valorTexto: string}[];
    msgError?: string;
    registro?: UseFormRegisterReturn;
}

export const ProductoSelect = ({etiqueta, opcionTextoDefault, opcionesTexto, msgError, registro}:ProductoSelectProps) => {
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
