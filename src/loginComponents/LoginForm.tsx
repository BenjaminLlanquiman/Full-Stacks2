import { useState, type FormEvent, useEffect } from "react";
import { validateLogin } from "../validaciones/validacionesLogin";
import type { LoginErrors } from "../validaciones/validacionesLogin";
import "../style/loginForm.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import apiPublic from "../axiosConfig/axiosPublic";

export default function LoginForm() {
  const { checkAuth, isAuthenticated, role } = useAuth();
  const navigate = useNavigate();

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<LoginErrors>({});
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const result = validateLogin({ correo, password });
    setErrors(result);

    if (result.correo || result.password) return;

    try {
      // 🔐 Login (setea cookie HttpOnly)
      await apiPublic.post("/auth/login", {
        correo,
        password,
      });

      // 🔥 Carga sesión + rol
      await checkAuth();
      setLoginSuccess(true);
    } catch {
      alert("Correo o contraseña incorrectos");
    }
  };

  // 🔁 REDIRECCIÓN SEGÚN ROL (CLAVE)
  useEffect(() => {
    if (!loginSuccess || !isAuthenticated) return;

    if (role === "ROLE_ADMIN") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  }, [loginSuccess, isAuthenticated, role, navigate]);

  const onSwitchToRegister = () => {
    navigate("/registro-usuario");
  };

  return (
    <article className="main-container">
      <div className="login-page">
        <form className="login-form my-3 my-md-5" onSubmit={handleSubmit}>
          <h2>Iniciar sesión</h2>

          <label>Correo</label>
          <input
            type="email"
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
        </form>
      </div>
    </article>
  );
}
