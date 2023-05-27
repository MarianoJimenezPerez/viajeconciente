import "./Registro.css";
export default function RegisterPage() {
  return (
    <div className="register__page">
      <div className="container">
        <div className="form__box">
          <h1>Registro</h1>
          <form action="">
            <input
              type="text"
              placeholder="Nombre completo"
              name="fullName"
              required
            />
            <input type="email" placeholder="Tu correo" required />
            <input type="password" placeholder="Tu contraseña" required />
            <button type="submit">Registrarse</button>
          </form>
          <span>Advice</span>
        </div>
      </div>
    </div>
  );
}
