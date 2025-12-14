import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import apiPublic from "../axiosConfig/axiosPublic";

interface AuthContextType {
  isAuthenticated: boolean;
  role: string | null;
  loading: boolean;                 // 🔥 AGREGADO
  checkAuth: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  role: null,
  loading: true,                    // 🔥 AGREGADO
  checkAuth: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); // 🔥 AGREGADO

  const checkAuth = async () => {
    try {
      const res = await apiPublic.get("/auth/me");
      setIsAuthenticated(true);
      setRole(res.data.roles[0].authority);
    } catch {
      setIsAuthenticated(false);
      setRole(null);
    } finally {
      setLoading(false); // 🔥 CLAVE
    }
  };

  const logout = async () => {
    await apiPublic.post("/auth/logout");
    setIsAuthenticated(false);
    setRole(null);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        role,
        loading,      // 🔥 EXPUESTO
        checkAuth,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
