import type { FunctionComponent } from "react";
import { services } from "../data/services";
import {
  CodeIcon,
  PaletteIcon,
  PhotoIcon,
  VideoIcon,
  CameraIcon,
  WrenchIcon,
} from "./Icons";
import "./Services.css";

const iconMap: Record<string, FunctionComponent<{ size?: number }>> = {
  code: CodeIcon,
  palette: PaletteIcon,
  photo: PhotoIcon,
  video: VideoIcon,
  camera: CameraIcon,
  wrench: WrenchIcon,
};

export default function Services() {
  return (
    <section id="servicios" className="services section">
      <div className="services__inner container">
        <div className="services__header">
          <span className="section-label">Servicios</span>
          <h2 className="section-title">Áreas en las que trabajo</h2>
          <p className="section-subtitle">
            Servicios profesionales que combinan tecnología, diseño y soluciones
            prácticas para tus proyectos personales o de negocio.
          </p>
        </div>
        <div className="services__grid">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? CodeIcon;
            return (
              <article key={service.id} className="services__card">
                <div className="services__icon" aria-hidden="true">
                  <Icon size={26} />
                </div>
                <h3 className="services__title">{service.title}</h3>
                <p className="services__description">{service.description}</p>
                <ul className="services__list">
                  {service.features.map((feature) => (
                    <li key={feature} className="services__feature">
                      <span className="services__check" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
