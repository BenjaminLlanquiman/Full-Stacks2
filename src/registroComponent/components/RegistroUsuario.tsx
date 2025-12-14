import { useForm } from "react-hook-form";
import { RegistroInput } from "./RegistroInput";
import { RegistroSelect } from "./RegistroSelect";
import {
  validarRUT,
  validarCorreo,
} from "../../validaciones/validacionesRegistroUsuario";
import "../RegistroUsuario.css";
import { useState } from "react";
import { crearUsuario } from "../../usuariosComponents/usuarioService";
import axios from "axios";

/* =========================
   PROPS
========================= */
interface RegistroUsuarioProp {
  tituloPagina: string;
}

/* =========================
   FORM DATA
========================= */
interface FormRegistroUsuario {
  run: string;
  nombre: string;
  apellidos: string;
  correo: string;
  password: string;
  "confirm-pass": string;
  regiones: string;
  fechaNacimiento: string;
  telefono: string;
  tipoUsuario: string;
}

/* =========================
   TOAST
========================= */
interface MsgToastProp {
  nombreUsuario: string;
  apellidosUsuario: string;
  registroExitoso: boolean;
}

const MsgRegistroExitosoToast = ({
  nombreUsuario,
  apellidosUsuario,
  registroExitoso,
}: MsgToastProp) => {
  if (!registroExitoso) return null;

  return (
    <div
      className="toast position-fixed top-50 start-50 translate-middle show p-4 bg-success text-white"
      role="alert"
      style={{ zIndex: 9999 }}
    >
      {nombreUsuario} {apellidosUsuario} se ha registrado con éxito
    </div>
  );
};

/* =========================
   COMPONENT
========================= */
export const RegistroUsuario = ({ tituloPagina }: RegistroUsuarioProp) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<FormRegistroUsuario>();

  const [registroExitoso, setRegistroExitoso] = useState(false);

  // 🔥 ESTADO PARA EL TOAST (CLAVE)
  const [usuarioRegistrado, setUsuarioRegistrado] = useState({
    nombre: "",
    apellidos: "",
  });

  const opcionesRegion = [
    { valor: "arica", valorTexto: "Arica y Parinacota" },
    { valor: "coquimbo", valorTexto: "Coquimbo" },
    { valor: "metropolitana", valorTexto: "Metropolitana de Santiago" },
    { valor: "losRios", valorTexto: "Los Ríos" },
    { valor: "magallanes", valorTexto: "Magallanes y Antártica Chilena" },
  ];

  /* =========================
     SUBMIT
  ========================= */
  const onSubmit = async (data: FormRegistroUsuario) => {
    try {
      const usuario = {
        run: data.run,
        nombre: data.nombre,
        apellidos: data.apellidos,
        correo: data.correo,
        password: data.password,
        regiones: data.regiones,
        fechaNacimiento: data.fechaNacimiento,
        telefono: data.telefono,
        tipoUsuario: {
          id: Number(data.tipoUsuario),
        },
      };

      await crearUsuario(usuario);

      // 🔥 Guardar datos ANTES de reset
      setUsuarioRegistrado({
        nombre: data.nombre,
        apellidos: data.apellidos,
      });

      setRegistroExitoso(true);

      setTimeout(() => {
        reset();
        setRegistroExitoso(false);
      }, 2000);

    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;

        if (status === 409) {
          setError("run", {
            type: "manual",
            message: "Este RUN ya está en uso",
          });
          return;
        }
      }

      setError("run", {
        type: "manual",
        message: "Error inesperado al registrar el usuario",
      });
    }
  };

  /* =========================
     RENDER
  ========================= */
  return (
    <>
      <main className="main-container-form">
        <h1 className="text-center my-5">{tituloPagina}</h1>

        <form
          className="formulario-registro bg-secondary-subtle p-5 mb-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* RUN */}
          <RegistroInput
            etiqueta="run"
            etiquetaTexto="RUN"
            type="text"
            placeholder="12345678k"
            msgError={errors.run?.message}
            registro={register("run", {
              required: "El RUN es obligatorio",
              validate: (value) =>
                validarRUT(value) || "RUN inválido",
            })}
          />

          {/* NOMBRE */}
          <RegistroInput
            etiqueta="nombre"
            type="text"
            placeholder="Nombre"
            msgError={errors.nombre?.message}
            registro={register("nombre", {
              required: "Ingrese nombre",
            })}
          />

          {/* APELLIDOS */}
          <RegistroInput
            etiqueta="apellidos"
            type="text"
            placeholder="Apellidos"
            msgError={errors.apellidos?.message}
            registro={register("apellidos", {
              required: "Ingrese apellidos",
            })}
          />

          {/* CORREO */}
          <RegistroInput
            etiqueta="correo"
            type="email"
            placeholder="correo@duoc.cl"
            msgError={errors.correo?.message}
            registro={register("correo", {
              required: "Correo obligatorio",
              validate: (value) =>
                validarCorreo(value) || "Correo inválido",
            })}
          />

          {/* PASSWORD */}
          <RegistroInput
            etiqueta="password"
            etiquetaTexto="Contraseña"
            type="password"
            msgError={errors.password?.message}
            registro={register("password", {
              required: "Contraseña obligatoria",
              minLength: {
                value: 4,
                message: "Debe tener al menos 4 caracteres",
              },
              maxLength: {
                value: 10,
                message: "Máximo 10 caracteres",
              },
            })}
          />

          {/* CONFIRM PASSWORD */}
          <RegistroInput
            etiqueta="confirm-pass"
            etiquetaTexto="Confirma contraseña"
            type="password"
            msgError={errors["confirm-pass"]?.message}
            registro={register("confirm-pass", {
              required: "Confirme la contraseña",
              validate: (value, formValues) =>
                value === formValues.password ||
                "Las contraseñas no coinciden",
            })}
          />

          {/* REGIÓN */}
          <RegistroSelect
            etiqueta="regiones"
            opcionTextoDefault="Seleccione región"
            opcionesTexto={opcionesRegion}
            msgError={errors.regiones?.message}
            registro={register("regiones", {
              required: "Seleccione región",
            })}
          />

          {/* TIPO USUARIO */}
          <div className="mb-3">
            <label className="form-label">Tipo de usuario</label>
            <select
              className={`form-select ${errors.tipoUsuario ? "is-invalid" : ""}`}
              {...register("tipoUsuario", {
                required: "Seleccione tipo de usuario",
              })}
            >
              <option value="">Seleccione tipo</option>
              <option value="1">Administrador</option>
              <option value="2">Vendedor</option>
            </select>

            {errors.tipoUsuario && (
              <div className="invalid-feedback d-block">
                {errors.tipoUsuario.message}
              </div>
            )}
          </div>

          {/* FECHA NACIMIENTO */}
          <RegistroInput
            etiqueta="fechaNacimiento"
            etiquetaTexto="Fecha nacimiento"
            type="date"
            msgError={errors.fechaNacimiento?.message}
            registro={register("fechaNacimiento", {
              required: "Seleccione fecha de nacimiento",
            })}
          />

          {/* TELÉFONO */}
          <RegistroInput
            etiqueta="telefono"
            type="tel"
            msgError={errors.telefono?.message}
            registro={register("telefono", {
              required: "Teléfono obligatorio",
              pattern: {
                value: /^[2-9]\d{8}$/,
                message: "Teléfono inválido",
              },
            })}
          />

          <div className="text-center">
            <button className="btn btn-primary btn-lg mt-4" type="submit">
              Registrar
            </button>
          </div>
        </form>
      </main>

      {/* TOAST */}
      <MsgRegistroExitosoToast
        nombreUsuario={usuarioRegistrado.nombre}
        apellidosUsuario={usuarioRegistrado.apellidos}
        registroExitoso={registroExitoso}
      />
    </>
  );
};
