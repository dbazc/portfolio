export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: "web",
    title: "Desarrollo Web",
    description:
      "Sitios y aplicaciones web modernas, rápidas y adaptables a cualquier dispositivo.",
    features: ["Páginas y portafolios", "Tiendas en línea", "Optimización y SEO"],
    icon: "code",
  },
  {
    id: "diseno",
    title: "Diseño Gráfico",
    description:
      "Identidad visual, piezas publicitarias y contenido creativo para tu marca.",
    features: ["Logotipos e identidad", "Redes sociales", "Material impreso"],
    icon: "palette",
  },
  {
    id: "fotografia",
    title: "Fotografía",
    description:
      "Sesiones de fotografía y edición de imágenes con acabado profesional.",
    features: [
      "Sesiones profesionales",
      "Retoque con Photoshop y Lightroom",
      "Entrega en alta calidad",
    ],
    icon: "photo",
  },
  {
    id: "audiovisual",
    title: "Producción Audiovisual",
    description:
      "Edición y producción de video y audio para redes, eventos o negocios.",
    features: [
      "Edición de video y audio",
      "Adobe Premiere y After Effects",
      "Contenido para redes sociales",
    ],
    icon: "video",
  },
  {
    id: "camaras",
    title: "Instalación de Cámaras",
    description:
      "Instalación y configuración de sistemas de videovigilancia para tu hogar o negocio.",
    features: ["Cámaras IP y análogas", "Configuración remota", "Soporte técnico"],
    icon: "camera",
  },
  {
    id: "instalaciones",
    title: "Reparaciones e Instalaciones",
    description:
      "Soluciones generales: reparaciones, instalaciones y mantenimiento de equipos.",
    features: ["Reparación de equipos", "Instalaciones eléctricas", "Mantenimiento general"],
    icon: "wrench",
  },
];
