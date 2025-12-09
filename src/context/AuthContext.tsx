import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthContextType {
    token: string | null;
    role: string | null;
    isAuthenticated: boolean;
    login: (token: string, role: string) => void;
    logout: () => void;
}

const AuthContext = createContext <AuthContextType >({
    token: null,
    role: null,
    isAuthenticated: false,
    login: () => {},
    logout: () => {}
});

export const AuhtProvider = ({children} : {children: ReactNode}) => {
    const [token, setToken] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);

    const login = (jwt: string, rol: string) => {
        setToken (jwt);
        setRole (rol);
    };

    const logout = () => {
        setToken(null);
        setRole(null);
    }

    return(
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
