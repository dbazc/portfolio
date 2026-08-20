import { Link } from "react-router-dom";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "./Icons";
import { whatsappUrl } from "../data/contact";
import "./Footer.css";

const quickLinks = [
  { label: "Inicio", to: "/" },
  { label: "Proyectos", to: "/proyectos" },
  { label: "Certificados", to: "/certificados" },
];

const socials = [
  { label: "WhatsApp", href: whatsappUrl, Icon: WhatsAppIcon },
  { label: "GitHub", href: "https://github.com/0z4c4", Icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/diegobarbozac/", Icon: LinkedinIcon },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">Oza<span>ca</span></Link>
            <p className="footer__text">
              Desarrollo web, diseño gráfico, fotografía, producción
              audiovisual, videovigilancia e instalaciones generales. Trabajo
              cuidado y trato directo.
            </p>
          </div>
          <nav className="footer__nav" aria-label="Links rápidos">
            <h3 className="footer__title">Links rápidos</h3>
            <ul className="footer__links">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link className="footer__link" to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer__social">
            <h3 className="footer__title">Sígueme</h3>
            <div className="footer__social-icons">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  className="footer__social-link"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Ozaca. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
