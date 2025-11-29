import { useForm } from "react-hook-form";
import { RegistroInput } from '../registroComponent/components/RegistroInput'
import { RegistroSelect } from '../registroComponent/components/RegistroSelect'
//import { validarRUT, validarCorreo } from '../../validaciones/validacionesRegistroUsuario'
import '../registroComponent/RegistroUsuario.css'
import { useState } from "react";
import { crearProducto } from "./ProductoService";

interface RegistroUsuarioProp {
    tituloPagina: string;
}

/*interface MsgToastProp {
    nombreUsuario: string;
    apellidosUsuario: string;
    registroExitoso: boolean;
}*/

/*const MsgRegistroExitosoToast = ({nombreUsuario, apellidosUsuario, registroExitoso}:MsgToastProp) => {
    return(
        <div className={`toast position-fixed top-50 start-50 p-4 bg-primary align-items-center ${registroExitoso ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true">
          <div className="d-flex">
            <div className="toast-body">
              {` ${nombreUsuario} ${apellidosUsuario} se ha registrado con éxito`}
            </div>
          </div>
        </div>
    );
}*/


export const RegistroProducto = ({tituloPagina}:RegistroUsuarioProp) => {

    const {register, handleSubmit, formState: {errors}, watch, reset} = useForm()

    const [registroExitoso, setRegistroExitoso] = useState(false);

    // Se obtiene el valor del input de nombre (name) 'password'. Sera usado para validar confirmacion de password
    /*const valorPassword = watch("password")

    const nombreUsuario = watch("nombre")
    const apellidoUsuario = watch("apellidos")*/

    /*const opcionesRegion = [
        {valor: "arica", valorTexto: "Arica y Parinacota"},
        {valor: "coquimbo", valorTexto: "Coquimbo"},
        {valor: "metropolitana", valorTexto: "Metropolitana de Santiago"},
        {valor: "losRios", valorTexto: "Los Ríos"},
        {valor: "magallanes", valorTexto: "Magallanes y de la Antártica Chilena"}
    ]*/

    const opcionesCategorías = [
        {valor: "accion", valorTexto: "Acción"},
        {valor: "comedia", valorTexto: "Comedia"},
        {valor: "thriller", valorTexto: "Thriller"}
    ]

    const onSubmit = async (data: any) => {
         try {console.log("Enviando",data);

            const producto = {
            codigo: data.codigo,
            nombreProducto: data.nombreProducto,
            descripcion: data.descripcion,
            precio: data.precio,
            stockCritico: data.stockCritico,
            stock: data.stock,
            categoria: data.categoria
        };

        console.log("📤 Enviando al backend:", producto);

        await crearProducto(producto);

        setRegistroExitoso(true)

        setTimeout(() => {
            reset()
            setRegistroExitoso(false);
        }, 2000);
    } catch(error){
        console.error("error al registrar producto", error)
        alert("hubo un error al registrar al producto");
        
        }
    };

    return(
        <>
        <main className="main-container-form">
            <h1 className="text-center my-2 my-md-5">{tituloPagina}</h1>
        
            <form className="formulario-registro bg-secondary-subtle p-5 mb-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="p-3">
                <RegistroInput
                    etiqueta="codigo"
                    etiquetaTexto = "codigo"
                    type="text"
                    msgError = {errors.codigo ? "Debe ingresar un código." : ""}
                    placeholder = "Ej: A25"
                    registro = {register("codigo", {required: true})}
                />

                <fieldset name="nombre-usuario" className="border border-dark p-3 mb-3">
                    <legend className="text-uppercase fs-6">Producto</legend>
                    <RegistroInput
                        etiqueta = "nombreProducto"
                        type = "text"
                        msgError = {errors.nombreProducto ? "Debe ingresar el nombre del producto" : ""}
                        placeholder = "Nombre"
                        registro = {register("nombreProducto", {required: true})}
                    />

                    <RegistroInput
                        etiqueta = "descripcion"
                        type = "text"
                        etiquetaTextoOpcional = "descripción"
                        registro = {register("descripcion")}
                    />
                </fieldset>

                <RegistroInput
                    etiqueta = "precio"
                    etiquetaTexto = "precio"
                    type = "number"
                    msgError = {errors.precio ? "Debe ingresar un precio válido": ""}
                    registro = {register("precio", {required: true, min: 0})}
                />

                <RegistroInput
                    etiqueta = "stockCritico"
                    etiquetaTexto = "stock crítico"
                    type = "number"
                    msgError = {errors.stockCritico ? "Debe ingresar un stock crítico válido." : ""}
                    registro = {register("stockCritico", {required: true, min: 0})}
                />

                <RegistroInput
                    etiqueta = "stock"
                    etiquetaTexto = "stock"
                    type = "number"
                    msgError = {errors.stock ? "Debe ingresar un stock válido." : ""}
                    registro = {register("stock", {required: true, min: 0})}
                />

                <fieldset name = "ubicacion" className="border border-dark p-3 mb-3">
                    <legend className="text-uppercase fs-6">Categorías</legend>

                    <RegistroSelect
                        etiqueta = "categoria"
                        opcionTextoDefault = "-- Seleccione una categoría --"
                        opcionesTexto = {opcionesCategorías}
                        msgError = {errors.categoria ? "Debe elegir una categoría." : ""}
                        registro = {register("categoria", {required: true})}
                    />
                </fieldset>

                <div className="text-center btn-container">
                    <button className="btn btn-primary btn-lg text-uppercase mt-4" type="submit">registrar</button>
                </div>
                </div>
        
            </form>
        </main>

        {/*<MsgRegistroExitosoToast
            nombreUsuario = {nombreUsuario}
            apellidosUsuario = {apellidoUsuario}
            registroExitoso = {registroExitoso}
        />*/}
        </>
    );
}