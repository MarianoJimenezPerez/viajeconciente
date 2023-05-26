import Link from "next/link";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h3>VC</h3>
        <p>Bringing you the latest news and insights, Everyday!</p>
        <nav>
          <ul>
            <li>
              <Link href={"#"}>Home</Link>
            </li>
            <li>
              <Link href={"#"}>About</Link>
            </li>
            <li>
              <Link href={"#"}>Details</Link>
            </li>
            <li>
              <Link href={"#"}>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="copyright">
          <span>© 2023 - Todos los derechos reservados VC</span>
        </div>
      </div>
    </footer>
  );
}
