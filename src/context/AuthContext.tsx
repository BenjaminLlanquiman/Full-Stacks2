import { createContext, useContext, useState, type ReactNode } from "react";
import { setAuthToken } from "../axiosConfig/axiosPublic";

interface AuthContextType {
    token: string | null;
    role: string | null;
    isAuthenticated: boolean;
    login: (token: string, role: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    token: null,
    role: null,
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);

    const login = (jwt: string, rol: string) => {
        setToken(jwt);
        setRole(rol);

        // 🔥 Pasa el token a Axios (global en memoria)
        setAuthToken(jwt);
    };

    const logout = () => {
        setToken(null);
        setRole(null);

        // 🔥 Quita el token de Axios
        setAuthToken(null);
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                role,
                isAuthenticated: !!token,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
