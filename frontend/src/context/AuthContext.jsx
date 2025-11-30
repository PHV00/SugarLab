import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [role, setRole] = useState(localStorage.getItem("role") || "USER");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedRole = localStorage.getItem("role");
    setIsLogged(!!token);
    setRole(savedRole);
  }, []);

  const login = (data) => {
    localStorage.setItem("token", data.token);

    if (data.role) {
      setRole("ADMIN");
      localStorage.setItem("role", "ADMIN");
    } else {
      setRole("USER");
      localStorage.setItem("role", "USER");
    }

    setIsLogged(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsLogged(false);
    setRole("USER");
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ isLogged, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
