import { createContext, useState } from "react";
/* eslint-disable react-refresh/only-export-components */

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Safely load token — remove invalid values like "undefined"
  const rawToken = localStorage.getItem("token");
  const safeToken = rawToken && rawToken !== "undefined" ? rawToken : null;

  const [token, setToken] = useState(safeToken);

  // Remove user handling since backend doesn't return one
  const [user, setUser] = useState(null);

  const login = (jwt) => {
    if (!jwt || jwt === "undefined" || jwt === undefined || jwt === null) {
      localStorage.removeItem("token");
      setToken(null);
      return;
    }
    localStorage.setItem("token", jwt);
    setToken(jwt);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  const isAuthenticated = token !== null && token !== "undefined";

  return (
    <AuthContext.Provider value={{ token, user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}