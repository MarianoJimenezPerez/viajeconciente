"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineSearch, FiMenu, RxCross2 } from "react-icons/all";

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
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="header container">
      <div className="logo">
        <h1>MJ</h1>
      </div>
      <form className="search">
        <input type="text" placeholder="Buscar" />
        <button type="submit">
          <AiOutlineSearch />
        </button>
      </form>
      <nav>
        {showMenu ? (
          <RxCross2 onClick={() => setShowMenu(!showMenu)} />
        ) : (
          <FiMenu onClick={() => setShowMenu(!showMenu)} />
        )}

        <ul className={`navbar ${showMenu ? "active" : ""}`}>
          {links.map((link, index) => (
            <li className="nav__item" key={index}>
              <Link href={link.route}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
