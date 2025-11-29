import { useForm } from "react-hook-form";
import { RegistroInput } from './RegistroInput'
import { RegistroSelect } from './RegistroSelect'
import { validarRUT, validarCorreo } from '../../validaciones/validacionesRegistroUsuario'
import '../RegistroUsuario.css'
import { useState } from "react";
import { crearUsuario } from "../../usuariosComponents/usuarioService";

interface RegistroUsuarioProp {
    tituloPagina: string;
}

interface MsgToastProp {
    nombreUsuario: string;
    apellidosUsuario: string;
    registroExitoso: boolean;
}

const MsgRegistroExitosoToast = ({nombreUsuario, apellidosUsuario, registroExitoso}:MsgToastProp) => {
    return(
        <div className={`toast position-fixed top-50 start-50 p-4 bg-primary align-items-center ${registroExitoso ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true">
          <div className="d-flex">
            <div className="toast-body">
              {` ${nombreUsuario} ${apellidosUsuario} se ha registrado con éxito`}
            </div>
          </div>
        </div>
    );
}


export const RegistroUsuario = ({tituloPagina}:RegistroUsuarioProp) => {

    const {register, handleSubmit, formState: {errors}, watch, reset} = useForm()

    const [registroExitoso, setRegistroExitoso] = useState(false);

    // Se obtiene el valor del input de nombre (name) 'password'. Sera usado para validar confirmacion de password
    const valorPassword = watch("password")

    const nombreUsuario = watch("nombre")
    const apellidoUsuario = watch("apellidos")

    const opcionesRegion = [
        {valor: "arica", valorTexto: "Arica y Parinacota"},
        {valor: "coquimbo", valorTexto: "Coquimbo"},
        {valor: "metropolitana", valorTexto: "Metropolitana de Santiago"},
        {valor: "losRios", valorTexto: "Los Ríos"},
        {valor: "magallanes", valorTexto: "Magallanes y de la Antártica Chilena"}
    ]

    const onSubmit = async (data: any) => {
         try {console.log("Enviando",data);

            const usuario = {
            run: data.run,
            nombre: data.nombre,
            apellidos: data.apellidos,
            correo: data.correo,
            password: data.password,
            regiones: data.regiones,
            fechaNacimiento: data.fechaNacimiento, // 👈 importante este cambio
            telefono: data.telefono
        };

        console.log("📤 Enviando al backend:", usuario);

            await crearUsuario(usuario);

        setRegistroExitoso(true)

        setTimeout(() => {
            reset()
            setRegistroExitoso(false);
        }, 2000);
    } catch(error){
        console.error("error al registrar usuario", error)
        alert("hubo un error al registrar al usuario");
        
        }
    };

    return(
        <>
        <main className="main-container-form">
            <h1 className="text-center my-2 my-md-5">{tituloPagina}</h1>
        
            <form className="formulario-registro bg-secondary-subtle p-5 mb-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="p-3">
                <RegistroInput
                    etiqueta="run"
                    etiquetaTexto = "run"
                    type="text"
                    msgError = {errors.run ? "RUN inválido: No debe contener puntos ni guión. Si no es el caso, revise si lo escribió correctamente." : ""}
                    placeholder = "Ej: Si 12.345.678-k, entonces 12345678k"
                    registro = {register("run", {required: true, validate: validarRUT})}
                />

                <fieldset name="nombre-usuario" className="border border-dark p-3 mb-3">
                    <legend className="text-uppercase fs-6">nombre completo</legend>
                    <RegistroInput
                        etiqueta = "nombre"
                        type = "text"
                        msgError = {errors.nombre ? "Debe ingresar el nombre" : ""}
                        placeholder = "Nombre"
                        registro = {register("nombre", {required: true})}
                    />

                    <RegistroInput
                        etiqueta = "apellidos"
                        type = "text"
                        msgError = {errors.apellidos ? "Debe ingresar los apellidos" : ""}
                        placeholder = "Apellidos"
                        registro = {register("apellidos", {required: true})}
                    />
                </fieldset>

                <RegistroInput
                    etiqueta = "correo"
                    etiquetaTexto = "correo"
                    type = "email"
                    msgError = {errors.correo ? "Correo inválido: Debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com.": ""}
                    placeholder = "Ej: pia@duoc.cl"
                    registro = {register("correo", {required: true, validate: validarCorreo})}
                />

                <RegistroInput
                    etiqueta = "password"
                    etiquetaTexto = "contraseña"
                    type = "password"
                    msgError = {errors.password ? "Contraseña inválida: Debe contener entre 4 a 10 caracteres." : ""}
                    registro = {register("password", {required: true, minLength: 4, maxLength: 10})}
                />

                <RegistroInput
                    etiqueta = "confirm-pass"
                    etiquetaTexto = "confirmar contraseña"
                    type = "password"
                    msgError = {errors["confirm-pass"] ? "La contraseña no coincide con la ingresada en el campo anterior." : ""}
                    registro = {register("confirm-pass", {required: true, validate: value => value === valorPassword})}
                />

                <fieldset name = "ubicacion" className="border border-dark p-3 mb-3">
                    <legend className="text-uppercase fs-6">ubicación</legend>

                    <RegistroInput
                        etiqueta = "direccion"
                        type = "text"
                        msgError = {errors.direccion ? "Debe ingresar una dirección." : ""}
                        registro = {register("direccion", {required: true})}
                        placeholder="Dirección"
                    />

                    <RegistroSelect
                        etiqueta = "regiones"
                        opcionTextoDefault = "-- Seleccione la región --"
                        opcionesTexto = {opcionesRegion}
                        msgError = {errors.regiones ? "Debe elegir una región." : ""}
                        registro = {register("regiones", {required: true})}
                    />
                </fieldset>

                <RegistroInput
                    etiqueta = "fechaNacimiento"
                    type = "date"
                    etiquetaTextoOpcional = "fecha de nacimiento"
                    registro={register("fechaNacimiento", {required: true})}
                />

                <RegistroInput
                    etiqueta = "telefono"
                    type = "tel"
                    etiquetaTextoOpcional = "teléfono"
                    msgError = {errors.telefono ? "Teléfono inválido: Son 9 dígitos y no debes incluir '+56'." : ""}
                    registro = {register("telefono", {required: true, pattern: {value:  /^(|[2-9]\d{8})$/, message: ""}})}
                />

                <div className="text-center btn-container">
                    <button className="btn btn-primary btn-lg text-uppercase mt-4" type="submit">registrar</button>
                </div>
                </div>
        
            </form>
        </main>

        <MsgRegistroExitosoToast
            nombreUsuario = {nombreUsuario}
            apellidosUsuario = {apellidoUsuario}
            registroExitoso = {registroExitoso}
        />
        </>
    );
}
