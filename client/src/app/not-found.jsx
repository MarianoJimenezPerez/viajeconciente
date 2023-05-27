import Link from "next/link";
import "./NotFound.css";
export default function custom404() {
  return (
    <div className="error_page">
      <div className="container">
        <h1>404</h1>
        <p>
          Parece que la página a la cual estás intentando acceder no existe. Te
          invitamos a volver al inicio
        </p>
        <button>Volver al inicio</button>
      </div>
    </div>
  );
}
