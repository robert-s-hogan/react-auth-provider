import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import { authenticateUser } from "./utils/authenticateUser";
import "./App.css";

const App = () => {
  return (
    <Router>
      <AuthProvider
        onLogin={() => console.log("Logged in")}
        onLogout={() => console.log("Logged out")}
        defaultAuthenticated={authenticateUser()}>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
