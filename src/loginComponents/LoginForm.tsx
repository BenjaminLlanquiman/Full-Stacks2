import { useState, type FormEvent } from "react";
import { validateLogin } from "../validaciones/validacionesLogin.ts";
import type { LoginErrors } from "../validaciones/validacionesLogin.ts";
import Footer from "../componentes/Footer.tsx";
import "../style/loginForm.css";
import Navbar from "../componentes/Navbar.tsx";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<LoginErrors>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const result = validateLogin({ email, password });
    setErrors(result);
    if (result.email || result.password) return;

    console.log("Email:", email);
    console.log("Password:", password);
  };

  const onSwitchToRegister = () => {
    console.log("Switching to registration form...");
  };

  return (

    <>
    <Navbar />
      <article className="main-container">
        <div className="login-page">

            {/* ✅ FORMULARIO */}
            <form className="login-form" onSubmit={handleSubmit}>
            <h2>Iniciar sesión</h2>

            <label>Email</label>
            <input
              type="email"
              placeholder="Ingresa tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>
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
    <Footer />
   </> 
  );
}