import React from "react";
import { AuthProvider } from "./context/AuthContext";
import Button from "./components/Button";
import DisplayAuthenticated from "./components/DisplayAuthenticated";
import { authenticateUser } from "./utils/authenticateUser";

const App = () => {
  return (
    <AuthProvider
      onLogin={() => console.log("Logged in")}
      onLogout={() => console.log("Logged out")}
      defaultAuthenticated={authenticateUser()}>
      <DisplayAuthenticated />
      <Button />
    </AuthProvider>
  );
};

export default App;
