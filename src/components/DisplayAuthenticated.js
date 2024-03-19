import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const DisplayAuthenticated = () => {
  const { authenticated } = useContext(AuthContext);
  return <p>{authenticated ? "Authenticated" : "Not Authenticated"}</p>;
};

export default DisplayAuthenticated;
