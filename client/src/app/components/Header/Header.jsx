"use client";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/app/context/context";
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
  const router = useRouter();
  const [q, setQ] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const { currentUser, logout } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push("/busqueda?q=" + q)
    console.log(q);
  };

  return (
    <header className="header container">
      <div className="logo">
        <h1>VC</h1>
      </div>
      <form
        className="search"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input type="text" placeholder="Buscar" name="busqueda" id="busqueda" onChange={(e) => setQ(e.target.value)}/>
        <button type="submit" onClick={(e) => handleSubmit(e)}>
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
          {currentUser !== null ? (
            <li onClick={logout} className="nav__item">
              Logout
            </li>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </header>
  );
}
