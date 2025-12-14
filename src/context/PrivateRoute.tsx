import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
  roleRequired?: string;
}

export default function PrivateRoute({
  children,
  roleRequired,
}: PrivateRouteProps) {
  const { isAuthenticated, role, loading } = useAuth();

  // ⏳ Esperar a que el backend responda
  if (loading) {
    return <p style={{ textAlign: "center" }}>Cargando...</p>;
  }

  // 🔐 No autenticado
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 🛑 Rol incorrecto
  if (roleRequired && role !== roleRequired) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
