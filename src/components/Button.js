import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Button = () => {
  const { authenticated, login, logout } = useContext(AuthContext);
  return (
    <button onClick={() => (authenticated ? logout() : login())}>
      {authenticated ? "Logout" : "Login"}
    </button>
  );
};

export default Button;
