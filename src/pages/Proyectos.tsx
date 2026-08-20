import { useEffect, useState } from "react";
import { companies } from "../data/projects";
import type { Company, Project } from "../data/projects";
import { CloseIcon } from "../components/Icons";
import "./Projects.css";

export default function Proyectos() {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <main className="section">
      <div className="projects__inner container">
        <div className="projects__header">
          <span className="section-label">Proyectos</span>
          <h2 className="section-title">Algunos de mis trabajos</h2>
          <p className="section-subtitle">
            Una muestra de proyectos en los que el detalle, la técnica y el
            trato cercano marcan la diferencia.
          </p>
        </div>

        {companies.length > 0 ? (
          <div className="companies__grid">
            {companies.map((company) => (
              <CompanyCard
                key={company.id}
                company={company}
                onImageClick={setSelected}
              />
            ))}
          </div>
        ) : (
          <div className="projects__empty">
            <h3 className="projects__empty-title">
              Mis proyectos estarán aquí pronto
            </h3>
            <p className="projects__empty-text">
              Estoy preparando una galería con trabajos de desarrollo web,
              diseño gráfico, fotografía, producción audiovisual,
              videovigilancia e instalaciones generales. Vuelve pronto para
              verlos.
            </p>
          </div>
        )}
      </div>

      {selected && (
        <div
          className="certificates__modal"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <div
            className="certificates__modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="certificates__modal-close"
              aria-label="Cerrar"
              onClick={() => setSelected(null)}
            >
              <CloseIcon size={22} />
            </button>
            <img
              className="certificates__modal-image"
              src={selected.images[0]}
              alt={selected.title}
            />
            <div className="certificates__modal-caption">
              <strong>{selected.title}</strong>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function CompanyCard({
  company,
  onImageClick,
}: {
  company: Company;
  onImageClick: (project: Project) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasAreas = company.areas && company.areas.length > 0;
  const directProjects = company.projects ?? [];

  return (
    <article className="company__card">
      <button
        type="button"
        className="company__header"
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
      >
        <h3 className="company__name">{company.name}</h3>
        <span className={`company__chevron${expanded ? " company__chevron--open" : ""}`}>
          ▾
        </span>
      </button>

      {expanded && (
        <div className="company__body">
          {hasAreas
            ? company.areas!.map((area) => (
                <div key={area.name} className="company__area">
                  <h4 className="company__area-name">{area.name}</h4>
                  <div className="company__projects">
                    {area.projects.map((project) => (
                      <button
                        key={project.id}
                        type="button"
                        className="company__project-thumb"
                        onClick={() => onImageClick(project)}
                        aria-label={`Ver ${project.title}`}
                      >
                        {project.images[0] ? (
                          <img src={project.images[0]} alt={project.title} />
                        ) : (
                          <div className="company__project-placeholder" />
                        )}
                        <span className="company__project-label">
                          {project.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ))
            : directProjects.length > 0 && (
                <div className="company__projects">
                  {directProjects.map((project) => (
                    <button
                      key={project.id}
                      type="button"
                      className="company__project-thumb"
                      onClick={() => onImageClick(project)}
                      aria-label={`Ver ${project.title}`}
                    >
                      {project.images[0] ? (
                        <img src={project.images[0]} alt={project.title} />
                      ) : (
                        <div className="company__project-placeholder" />
                      )}
                      <span className="company__project-label">
                        {project.title}
                      </span>
                    </button>
                  ))}
                </div>
              )}
        </div>
      )}
    </article>
  );
}
