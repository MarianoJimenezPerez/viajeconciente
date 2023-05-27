import "./Login.css";
export default function LoginPage() {
  return (
    <div className="login__page">
      <div className="container">
        <div className="form__box">
          <h1>Login</h1>
          <form action="">
            <input type="email" placeholder="Tu correo" required />
            <input type="password" placeholder="Tu contraseña" required />
            <button type="submit">Iniciar sesión</button>
          </form>
          <span>Advice</span>
        </div>
      </div>
    </div>
  );
}
