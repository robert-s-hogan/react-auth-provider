import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const AuthRoutes = ({ children, ...rest }) => {
  const { authenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      element={authenticated ? children : <Navigate to='/login' replace />}
    />
  );
};

export default AuthRoutes;
