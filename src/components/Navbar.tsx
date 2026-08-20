import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { MenuIcon, CloseIcon } from "./Icons";
import { whatsappUrl } from "../data/contact";
import "./Navbar.css";

const navLinks = [
  { label: "Inicio", to: "/" },
  { label: "Proyectos", to: "/proyectos" },
  { label: "Certificados", to: "/certificados" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__container container">
        <Link to="/" className="navbar__logo">
          Ozaca<span className="navbar__logo-dot">.</span>
        </Link>

        <nav className="navbar__nav" aria-label="Navegación principal">
          <ul className="navbar__list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `navbar__link${isActive ? " navbar__link--active" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={whatsappUrl}
          className="navbar__cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contáctame
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {isOpen && (
        <nav className="navbar__mobile" aria-label="Navegación móvil">
          <ul className="navbar__mobile-list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `navbar__mobile-link${isActive ? " navbar__mobile-link--active" : ""}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href={whatsappUrl}
            className="navbar__mobile-cta"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            Contáctame
          </a>
        </nav>
      )}
    </header>
  );
}
