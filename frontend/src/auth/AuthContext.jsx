import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Do NOT JSON.parse() anything unless it's actually JSON.
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  // Your backend does NOT return a user object — so remove user handling.
  const [user, setUser] = useState(null);

  const login = (jwt) => {
    localStorage.setItem("token", jwt);
    setToken(jwt);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}