import { useEffect, useState } from "react";
import type { Certificate } from "../data/certificates";
import { certificates } from "../data/certificates";
import { CloseIcon } from "../components/Icons";
import "./Certificates.css";

export default function Certificados() {
  const [selected, setSelected] = useState<Certificate | null>(null);

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
      <div className="certificates__inner container">
        <div className="certificates__header">
          <span className="section-label">Certificados</span>
          <h2 className="section-title">Formación y certificaciones</h2>
          <p className="section-subtitle">
            Cursos y certificaciones que respaldan mi trabajo en desarrollo
            web, diseño, fotografía, audiovisual y más.
          </p>
        </div>
        {certificates.length > 0 ? (
          <div className="certificates__grid">
            {certificates.map((certificate) => (
              <article
                key={certificate.id}
                className="certificates__card"
                onClick={() => setSelected(certificate)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setSelected(certificate);
                }}
              >
                <div className="certificates__media">
                  <img src={certificate.image} alt={certificate.title} />
                </div>
                <div className="certificates__body">
                  <span className="certificates__year">
                    {certificate.year}
                  </span>
                  <h3 className="certificates__title">
                    {certificate.title}
                  </h3>
                  <p className="certificates__issuer">
                    {certificate.issuer}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="certificates__empty">
            <h3 className="certificates__empty-title">
              Mis certificaciones estarán aquí pronto
            </h3>
            <p className="certificates__empty-text">
              Estoy recopilando los certificados de mis cursos y formaciones.
              Vuelve pronto para verlos.
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
              src={selected.image}
              alt={selected.title}
            />
            <div className="certificates__modal-caption">
              <strong>{selected.title}</strong>
              <span>{selected.issuer} · {selected.year}</span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
