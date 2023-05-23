import styles from "./Header.module.css";
import Link from "next/link";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Details",
    route: "/details",
  },
  {
    label: "Contact",
    route: "/contact",
  },
];

export default function Header() {
  return (
    <header className="header">
      <div className="logo"></div>
      <nav>
        <ul className="navbar">
          {links.map((link) => (
            <li className="nav__item">
              <Link href={link.route}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
