import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./Icons";
import { whatsappUrl } from "../data/contact";
import "./Hero.css";

const stats = [
  { value: "+5", label: "años de experiencia" },
  { value: "+20", label: "proyectos completados" },
  { value: "+40", label: "clientes satisfechos" },
  { value: "100%", label: "compromiso con cada trabajo" },
];

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__content container">
        <span className="hero__badge">
          <span className="hero__badge-dot" />
          Disponible para nuevos proyectos
        </span>

        <h1 className="hero__title">
          Trabajos y soluciones en un solo lugar
        </h1>

        <p className="hero__subtitle">
          Desarrollo web, diseño gráfico, fotografía, producción audiovisual,
          instalación de cámaras de seguridad, reparaciones e instalaciones
          generales. Todo lo que necesitas, hecho con atención al detalle y
          buenos resultados.
        </p>

        <div className="hero__actions">
          <Link to="/proyectos" className="hero__btn hero__btn--primary">
            Ver mis proyectos
            <ArrowRightIcon size={18} />
          </Link>
          <a
            href={whatsappUrl}
            className="hero__btn hero__btn--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contáctame
          </a>
        </div>

        <div className="hero__stats">
          {stats.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
