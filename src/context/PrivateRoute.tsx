import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
  roles?: string[];
}

export default function PrivateRoute({
  children,
  roles,
}: PrivateRouteProps) {
  const { isAuthenticated, role, loading } = useAuth();

  // ⏳ Esperar a que cargue el auth
  if (loading) {
    return <p style={{ textAlign: "center" }}>Cargando...</p>;
  }

  // 🔐 No autenticado
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 🛑 Rol no permitido o nulo
  if (roles && (!role || !roles.includes(role))) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
