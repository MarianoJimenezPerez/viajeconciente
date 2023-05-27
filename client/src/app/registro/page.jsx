"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import "./Registro.css";

export default function RegisterPage() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
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
      const res = await axios.post(
        "http://localhost:8080/api/auth/register",
        inputs
      );
      router.push("/login");
    } catch (err) {
      setErr(err.response.data);
    }
  };
  return (
    <div className="register__page">
      <div className="container">
        <div className="form__box">
          <h1>Registro</h1>
          <form action="">
            <input
              type="text"
              placeholder="Nombre completo"
              name="username"
              required
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Tu correo"
              name="email"
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
              Registrarse
            </button>
          </form>
          {err && <span>{err}</span>}
        </div>
      </div>
    </div>
  );
}
