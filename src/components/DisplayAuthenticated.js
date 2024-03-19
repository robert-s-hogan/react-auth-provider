import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Layout from "./Layout";

const DisplayAuthenticated = () => {
  const { authenticated } = useContext(AuthContext);

  return (
    <Layout>
      <h1>{authenticated ? "Authenticated" : "Not Authenticated"}</h1>
    </Layout>
  );
};

export default DisplayAuthenticated;
