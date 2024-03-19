import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const { login } = useContext(AuthContext);

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={login}>Log In</button>
    </div>
  );
};

export default LoginPage;
