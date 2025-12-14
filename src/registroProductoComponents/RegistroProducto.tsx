import { useForm, type SubmitHandler } from "react-hook-form";
import '../registroComponent/RegistroUsuario.css'
import { useState, type ChangeEvent} from "react";
import { crearImagen, crearProducto } from "./ProductoService";
import { ProductoInput } from "./ProductoInput";
import { ProductoSelect } from "./ProductoSelect";
import type { Producto } from "./Producto";

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

type ProductoFormType = Producto;


export const RegistroProducto = ({tituloPagina}:RegistroUsuarioProp) => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm<ProductoFormType>()
    const [file, setFile] = useState<File | null>(null);

    const onChangeInputFile = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    }

    const opcionesCategorías = [
        {valor: "accion", valorTexto: "Acción"},
        {valor: "comedia", valorTexto: "Comedia"},
        {valor: "thriller", valorTexto: "Thriller"}
    ]

    const onSubmit: SubmitHandler<ProductoFormType> = async (data) => {
        try {
            // Se crea JSON para enviar producto a backend mediante metodo POST
            const response = await crearProducto(data);
            const productoCreado = response.data;

            // Se envia al backend la imagen si es que se subio una.
            if(file) {
                const formData = new FormData();
                formData.append("file", file);

                await crearImagen(productoCreado.id!, formData);

                alert("Producto registrado correctamente");
                reset();
                setFile(null);
            }

        } catch(error) {
            console.error(error);
            alert("Error al registrar el producto");
        }
    };

    return(
        <>
        <main className="main-container-form">
            <h1 className="text-center my-2 my-md-5">{tituloPagina}</h1>
        
            <form className="formulario-registro bg-secondary-subtle p-5 mb-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="p-3">
                <ProductoInput
                    etiqueta="codigo"
                    etiquetaTexto = "codigo"
                    type="text"
                    msgError = {errors.codigo ? "Debe ingresar un código." : ""}
                    placeholder = "Ej: A25"
                    registro = {register("codigo", {required: true})}
                />

                <fieldset name="nombre-usuario" className="border border-dark p-3 mb-3">
                    <legend className="text-uppercase fs-6">Producto</legend>
                    <ProductoInput
                        etiqueta = "nombreProducto"
                        type = "text"
                        msgError = {errors.nombreProducto ? "Debe ingresar el nombre del producto" : ""}
                        placeholder = "Nombre"
                        registro = {register("nombreProducto", {required: true})}
                    />

                    <ProductoInput
                        etiqueta = "descripcion"
                        type = "text"
                        etiquetaTextoOpcional = "descripción"
                        registro = {register("descripcion")}
                    />
                </fieldset>

                <ProductoInput
                    etiqueta = "precio"
                    etiquetaTexto = "precio"
                    type = "number"
                    msgError = {errors.precio ? "Debe ingresar un precio válido": ""}
                    registro = {register("precio", {required: true, min: 0})}
                />

                <ProductoInput
                    etiqueta = "stockCritico"
                    etiquetaTexto = "stock crítico"
                    type = "number"
                    msgError = {errors.stockCritico ? "Debe ingresar un stock crítico válido." : ""}
                    registro = {register("stockCritico", {required: true, min: 0})}
                />

                <ProductoInput
                    etiqueta = "stock"
                    etiquetaTexto = "stock"
                    type = "number"
                    msgError = {errors.stock ? "Debe ingresar un stock válido." : ""}
                    registro = {register("stock", {required: true, min: 0})}
                />

                <fieldset name = "ubicacion" className="border border-dark p-3 mb-3">
                    <legend className="text-uppercase fs-6">Categorías</legend>

                    <ProductoSelect
                        etiqueta = "categoria"
                        opcionTextoDefault = "-- Seleccione una categoría --"
                        opcionesTexto = {opcionesCategorías}
                        msgError = {errors.categoria ? "Debe elegir una categoría." : ""}
                        registro = {register("categoria", {required: true})}
                    />
                </fieldset>

                <label htmlFor="img-prod">IMAGEN (<span>OPCIONAL</span>)</label>
                <input
                    id="img-prod"
                    type="file"
                    name="img-prod"
                    accept="image/jpeg, image/png"
                    onChange={onChangeInputFile}
                />

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