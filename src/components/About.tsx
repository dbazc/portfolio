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
  "Comunicación clara y directa",
  "Entregas a tiempo",
  "Presupuesto sin compromiso",
  "Soporte post-venta",
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
              Soy alguien que disfruta resolver problemas y hacer las cosas
              bien. Trabajo en desarrollo web, diseño gráfico, videovigilancia
              e instalaciones generales, combinando herramientas digitales y
              trabajo manual con un mismo objetivo: entregar resultados
              funcionales, cuidados y a tiempo.
            </p>
            <p className="about__text">
              Me gusta el trato directo, escuchar lo que cada proyecto necesita
              y explicar las cosas con claridad para que sepas en todo momento
              qué se está haciendo y por qué.
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
