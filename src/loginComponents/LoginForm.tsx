import { useState, type FormEvent } from "react";
import { validateLogin } from "../validaciones/validacionesLogin.ts";
import type { LoginErrors } from "../validaciones/validacionesLogin.ts";
import "../style/loginForm.css";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
import { useAuth } from '../context/AuthContext';
import apiPublic from '../axiosConfig/axiosPublic';

interface JwtPayLoad {
    roles: string[];

}

export default function LoginForm() {
    const {login} = useAuth();

    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<LoginErrors>({});
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState("");

  
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        const result = validateLogin({ correo, password });
        setErrors(result);
        
        // Si hay errores, limpiar mensaje y detener
        if (result.correo || result.password) {
          setSuccessMessage("");
          return;
        }
        
        try {

            const response = await apiPublic.post("auth/login", {
                correo,
                password,
            });
            const token: string = response.data.token;

            // ✅ Decode JWT
            const tokenDecoded = jwtDecode<JwtPayLoad>(token);
            const roleFromToken = tokenDecoded.roles[0];

            const roleMapped = 
                roleFromToken === "ROLE_ADMIN" ? "administrador" : "vendedor";
            
                login(token, roleMapped);
                 
                // Si NO hay errores → éxito
                setSuccessMessage("¡Inicio de sesión exitoso!");


            if (roleMapped === "administrador"){
            navigate("/admin");
    
             } else {
            navigate("/vendedor");
            }
        } catch (error){
            alert("Correo o password incorrectos");
        }
    };


    const onSwitchToRegister = () => {
        navigate("/registro-usuario")
    };

    return (
        <article className="main-container">
            <div className="login-page">

            {/* MENSAJE DE ÉXITO */}
            {successMessage && (
                <p style={{ color: "green", fontSize: "14px", marginBottom: "15px" }}>
                    {successMessage}
                    </p>
            )}
            {/* FORMULARIO */}
                <form className="login-form my-3 my-md-5" onSubmit={handleSubmit}>
                    <h2>Iniciar sesión</h2>

                    <label>Correo</label>
                    <input
                        type="correo"
                        placeholder="Ingresa tu email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                    {errors.correo && (
                    <p style={{ color: "red", fontSize: "12px" }}>{errors.correo}</p>
                    )}

                    <label>Contraseña</label>
                    <input
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && (
                    <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
                    )}

                    <button type="submit">Ingresar</button>

                    <p className="change-form">
                        ¿No tienes una cuenta?{" "}
                        <a
                            href="#"
                            className="link-text"
                            onClick={(e) => {
                            e.preventDefault();
                            onSwitchToRegister();
                        }}
                        >
                        Regístrate
                        </a>
                    </p>
                </form>
            </div>
        </article>
    );
}