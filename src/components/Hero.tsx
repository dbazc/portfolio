import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./Icons";
import { whatsappUrl } from "../data/contact";
import "./Hero.css";

const rotatingWords = ["CREAR", "DESARROLLAR", "EDITAR", "REPARAR"];

const techIcons = [
  { name: "React", path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" },
  { name: "Node.js", path: "M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5S15.01 22 17.5 22s4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5z" },
  { name: "Vite", path: "M12 2L2 19.5h20L12 2zm0 4l6.5 11.5h-13L12 6z" },
  { name: "HTML5", path: "M4 2h16l-1.5 17L12 22l-6.5-3L4 2zm5.5 6l-.5 5.5L12 15l3-1.5.3-3.5H8.5l.2 2.5h5.3l-.2 2H9l-.5-4.5h6l-.2 2.5H10l-.5 5 2.5 1 2.5-1-.3-3.5H9.5z" },
  { name: "CSS3", path: "M4 2h16l-1.5 17L12 22l-6.5-3L4 2zm12.5 5H7l.3 3h8.9l-.5 5.5-3.7 1-3.7-1-.2-2.5h2l.1 1.3 1.8.5 1.8-.5.2-2H7.5L7 7h10l-.5 5z" },
  { name: "JavaScript", path: "M3 3h18v18H3V3zm9 14.5c0 1.5-.5 2-1.5 2.5l2 1.5H9.5l-2-1.5h2c1 0 1.5-.5 1.5-1.5v-1.5H9.5l-.2-2h4.4l.1.5v1.5h-.3zM15 19.5c0 1.5-.5 2-1.5 2.5l2 1.5H15.5l-2-1.5h2c1 0 1.5-.5 1.5-1.5v-1.5H15l-.2-2h4.4l.1.5v1.5h-.3zM16.5 5l-2 12h-2L10.5 5h2l1 7.5L14.5 5h2z" },
  { name: "Premiere Pro", path: "M4 4h5v7l4-7h5l-5 7 5 7h-5l-4-7v7H4V4zm9 2v12h2V6h-2z" },
  { name: "Photoshop", path: "M4 4h16v16H4V4zm7.5 3c1 0 1.8.3 2.5.8.7.5 1 1.2 1 2.1 0 .9-.4 1.6-1 2.1-.4.3-.8.5-1.3.6l1.8 3.4h-2.2l-1.5-3.2H10v3.2H8V7h3.5zm-.5 3.8c.7 0 1.2-.2 1.5-.5.4-.3.5-.8.5-1.3s-.2-1-.5-1.2c-.3-.3-.8-.4-1.5-.4H9v3.4h3zM17 10.5h-3V14h3v-1.5h-1.5v-1H17v-1z" },
  { name: "Illustrator", path: "M4 4h16v16H4V4zm7.5 3c1 0 1.8.3 2.5.8.7.5 1 1.2 1 2.1 0 .9-.4 1.6-1 2.1-.4.3-.8.5-1.3.6l1.8 3.4h-2.2l-1.5-3.2H10v3.2H8V7h3.5zm-.5 3.8c.7 0 1.2-.2 1.5-.5.4-.3.5-.8.5-1.3s-.2-1-.5-1.2c-.3-.3-.8-.4-1.5-.4H9v3.4h3zM17 10.5c.8 0 1.5.3 2 .8.6.6.9 1.3.9 2.2v.5h-4c.1.8.5 1.3 1.2 1.6.4.2.8.3 1.3.3.7 0 1.3-.3 1.7-.8h2c-.5 1.2-1.5 1.8-2.9 1.8-1.1 0-2-.4-2.7-1.1-.6-.7-1-1.6-1-2.6 0-1 .3-1.9 1-2.6.6-.7 1.5-1 2.5-1zm-1.5 3.7h3c-.1-.7-.5-1.1-1.1-1.4-.4-.2-.8-.3-1.2-.3-.5 0-1 .1-1.4.4-.4.3-.6.8-.6 1.3h1.3z" },
  { name: "Word", path: "M4 2h16v20H4V2zm2 3v14h12V5H6zm2.5 2l1 5h1l1-5h1.5l-1.8 6.5V17h-1.4v-3.5L8 7h1.5zm5.5 0l2 6 2-6h1.5l-2.8 8h-1.4L10 7H14z" },
  { name: "Excel", path: "M4 2h16v20H4V2zm2 3v14h12V5H6zm2 2l2 5-2 5h1.5l1.5-4 1.5 4H16l-2-5 2-5h-1.5l-1.5 4L9.5 7H8z" },
  { name: "PowerPoint", path: "M4 2h16v20H4V2zm2 3v14h12V5H6zm3 2.5c.8 0 1.5.3 1.5 1.2V12c0 1-.7 1.5-1.5 1.5H8V7.5h1zm0 5.5h.5c.5 0 .8-.3.8-.8v-1.7c0-.5-.3-.8-.8-.8H8v3.3zm5-5.5c.8 0 1.5.3 1.5 1.2V12c0 1-.7 1.5-1.5 1.5h-.5V7.5h.5zm0 5.5h.5c.5 0 .8-.3.8-.8v-1.7c0-.5-.3-.8-.8-.8H13v3.3z" },
  { name: "Docker", path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-1.5h1.5V15H11zm0-3v-1.5h1.5V12H11zm0-3V9h1.5V9H11zm3 6v-1.5H15.5V15H14zm0-3v-1.5h1.5V12H14zm0-3V9h1.5V9H14zm3 6v-1.5H18.5V15H17zm0-3v-1.5h1.5V12H17zm-6-3V7.5h1.5V9H11z" },
  { name: "Linux", path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5c-1.5 0-2.5-1-2.5-2.5s1-2.5 2.5-2.5c.5 0 .9.1 1.3.4-.8.8-1.3 1.8-1.3 2.9 0 1.2.6 2.1 1.4 2.6-.4.1-.9.1-1.4.1zm4 0c-.5 0-1 0-1.4-.1.8-.5 1.4-1.4 1.4-2.6 0-1.1-.5-2.1-1.3-2.9.4-.2.8-.4 1.3-.4 1.5 0 2.5 1 2.5 2.5s-1 2.5-2.5 2.5z" },
];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsAnimating(false);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="hero">
      <div className="hero__content container">
        <span className="hero__badge">
          <span className="hero__badge-dot" />
          Disponible para nuevos proyectos
        </span>

        <h1 className="hero__title">
          <span
            className={`hero__rotating-word ${isAnimating ? "hero__rotating-word--exit" : ""}`}
          >
            {rotatingWords[currentWordIndex]}
          </span>
        </h1>

        <p className="hero__subtitle">
          Combino tecnología, creatividad y conocimientos técnicos para
          convertir ideas y necesidades en soluciones reales.
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

        <div className="hero__tech-banner">
          <div className="hero__tech-track">
            {[...techIcons, ...techIcons].map((tech, i) => (
              <span key={`${tech.name}-${i}`} className="hero__tech-icon">
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
