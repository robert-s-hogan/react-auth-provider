import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({
  children,
  onLogin,
  onLogout,
  defaultAuthenticated,
}) => {
  const [authenticated, setAuthenticated] = useState(defaultAuthenticated);

  const login = () => {
    onLogin();
    setAuthenticated(true);
  };

  const logout = () => {
    onLogout();
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
