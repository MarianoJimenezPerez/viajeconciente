"use client";

import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }
    }
  }, []);

  const login = async (inputs) => {
    const res = await axios.post(
      "http://localhost:8080/api/auth/login",
      inputs,
      {
        credentials: "include",
        withCredentials: true,
      }
    );
    setCurrentUser(res.data);
  };

  const logout = async () => {
    await axios.post("http://localhost:8080/api/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AuthContext);
