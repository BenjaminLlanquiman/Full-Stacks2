import { type UseFormRegisterReturn } from "react-hook-form";

interface RegistroInputProp {
  etiqueta: string;
  etiquetaTexto?: string;
  etiquetaTextoOpcional?: string;
  type: string;
  msgError?: string;
  placeholder?: string;
  registro?: UseFormRegisterReturn;
}

export const RegistroInput = ({
  etiqueta,
  etiquetaTexto,
  etiquetaTextoOpcional,
  type,
  msgError,
  placeholder,
  registro,
}: RegistroInputProp) => {
  const textoLabel = etiquetaTexto ?? etiqueta;

  return (
    <div className="mb-3">
      {/* LABEL */}
      <label
        htmlFor={etiqueta}
        className="form-label text-uppercase"
      >
        {textoLabel}
        {etiquetaTextoOpcional && (
          <>
            {" "}
            (<span>opcional</span>)
          </>
        )}
      </label>

      {/* INPUT */}
      <input
        id={etiqueta}
        type={type}
        placeholder={placeholder}
        className={`form-control ${msgError ? "is-invalid" : ""}`}
        {...(registro ?? {})}
      />

      {/* ERROR (frontend + backend) */}
      {msgError && (
        <div className="invalid-feedback d-block">
          {msgError}
        </div>
      )}
    </div>
  );
};
