// src/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"));

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user); // Update logged in state on initial load
  }, []);

  const login = (user) => {
    localStorage.setItem("user", JSON.stringify(user)); // Save user to localStorage
    setIsLoggedIn(true); // Update login state
  };

  const logout = () => {
    localStorage.removeItem("user"); // Remove user from localStorage
    setIsLoggedIn(false); // Update login state
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
