import "./About.css";

const skills = [
  "React",
  "TypeScript",
  "HTML y CSS",
  "Vite",
  "Node.js",
  "Adobe",
  "Cámaras IP",
  "Redes",
  "Electricidad",
  "Instalaciones generales",
];

const highlights = [
  "Crear, desarrollar y resolver",
  "Creatividad con conocimientos técnicos",
  "Soluciones prácticas para cada proyecto",
  "Perfil versátil y autodidacta",
];

export default function About() {
  return (
    <section id="sobre-mi" className="about section">
      <div className="about__inner container">
        <div className="about__grid">
          <div className="about__content">
            <span className="section-label">Sobre mí</span>
            <h2 className="section-title">
              Personas detrás de un buen trabajo
            </h2>
            <p className="about__text">
              Soy un profesional multidisciplinario con experiencia e interés
              en distintas áreas de la tecnología, el diseño, la producción
              audiovisual y las soluciones técnicas. Desarrollo sitios y
              aplicaciones web, creo piezas e identidades visuales, trabajo
              con fotografía y video, y también realizo instalaciones de
              cámaras, mantenimiento y reparación de equipos.
            </p>
            <p className="about__text">
              Mi forma de trabajar se caracteriza por aprender, experimentar
              y buscar soluciones prácticas. Me interesa comprender cómo
              funcionan las herramientas que utilizo y encontrar la mejor
              manera de aplicarlas según cada proyecto, combinando creatividad
              con conocimientos técnicos.
            </p>
            <p className="about__text">
              Más que limitarme a una sola disciplina, he construido un perfil
              versátil que me permite <strong>crear, desarrollar y resolver</strong>:
              desde una experiencia digital o una pieza visual hasta una
              producción audiovisual o una solución técnica para un hogar o
              negocio.
            </p>
            <ul className="about__highlights">
              {highlights.map((highlight) => (
                <li key={highlight} className="about__highlight">
                  <span className="about__check" aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          <aside className="about__side">
            <h3 className="about__skills-title">Herramientas y áreas</h3>
            <div className="about__chips">
              {skills.map((skill) => (
                <span key={skill} className="about__chip">
                  {skill}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
