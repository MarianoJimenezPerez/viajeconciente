"use client";

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useGlobalContext } from "../context/context";
import axios from "axios";
import "./Login.css";

export default function LoginPage() {
  const { login } = useGlobalContext();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const router = useRouter();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      router.push("/nuevo");
    } catch (err) {
      setErr(err.response?.data);
    }
  };
  return (
    <div className="login__page">
      <div className="container">
        <div className="form__box">
          <h1>Login</h1>
          <form action="">
            <input
              type="text"
              placeholder="Tu usuario"
              name="username"
              required
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Tu contraseña"
              name="password"
              required
              onChange={handleChange}
            />
            <button type="submit" onClick={handleSubmit}>
              Iniciar sesión
            </button>
          </form>
          {err && <span>{err}</span>}
        </div>
      </div>
    </div>
  );
}
