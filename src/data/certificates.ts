export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
}

const base = "/portfolio/certificados";

export const certificates: Certificate[] = [
  {
    id: "sena-rrhh",
    title: "Administración de Recursos Humanos",
    issuer: "SENA",
    year: "2018",
    image: `${base}/Sena/Administración de RRHH/Certificado.webp`,
  },
  {
    id: "sena-documental",
    title: "Administración Documental en el Entorno Laboral",
    issuer: "SENA",
    year: "2018",
    image: `${base}/Sena/Administración Documental en el Entorno Laboral/Certificado.webp`,
  },
  {
    id: "sena-cuentas",
    title: "Cuentas Contables",
    issuer: "SENA",
    year: "2018",
    image: `${base}/Sena/Cuentas Contables/Certificado.webp`,
  },
  {
    id: "sena-english-1",
    title: "English Dot Works",
    issuer: "SENA",
    year: "2018",
    image: `${base}/Sena/Enlgish Dot Works/Certificado.webp`,
  },
  {
    id: "sena-english-2",
    title: "English Dot Works 2",
    issuer: "SENA",
    year: "2020",
    image: `${base}/Sena/Enlgish Dot Works 2/Certificado.webp`,
  },
  {
    id: "capacitate-finder",
    title: "Finder",
    issuer: "Fundación Carlos Slim",
    year: "2023",
    image: `${base}/Capacítate para el empleo/finder.webp`,
  },
  {
    id: "capacitate-curador",
    title: "Curador de Datos",
    issuer: "Fundación Carlos Slim",
    year: "2023",
    image: `${base}/Capacítate para el empleo/curador_de_datos.webp`,
  },
  {
    id: "capacitate-ofimatica",
    title: "Técnico en Informática y Ofimática",
    issuer: "Fundación Carlos Slim",
    year: "2026",
    image: `${base}/Capacítate para el empleo/tecnico_en_informatica_ofimatica.webp`,
  },
  {
    id: "codeliber-html",
    title: "HTML",
    issuer: "Codeliber",
    year: "2022",
    image: `${base}/Codeliber/HTML.webp`,
  },
  {
    id: "efset",
    title: "EF SET English Certificate — C1 Advanced",
    issuer: "EF SET",
    year: "2023",
    image: `${base}/Efset/EF SET Certificate.webp`,
  },
  {
    id: "grasshopper-coding",
    title: "Coding Fundamentals",
    issuer: "Grasshopper",
    year: "2023",
    image: `${base}/Grasshopper/Coding Fundamentals/Coding Fundamentals.webp`,
  },
  {
    id: "phub-c",
    title: "Programación en C",
    issuer: "Programming Hub",
    year: "2024",
    image: `${base}/Programming Hub/C100.webp`,
  },
  {
    id: "phub-fundamentals",
    title: "Computer Science Fundamentals",
    issuer: "Programming Hub",
    year: "2022",
    image: `${base}/Programming Hub/Fundamentals100.webp`,
  },
  {
    id: "phub-javascript",
    title: "JavaScript",
    issuer: "Programming Hub",
    year: "2022",
    image: `${base}/Programming Hub/JavaScript100.webp`,
  },
  {
    id: "phub-python",
    title: "Python",
    issuer: "Programming Hub",
    year: "2023",
    image: `${base}/Programming Hub/Python100.webp`,
  },
  {
    id: "phub-unity",
    title: "Unity",
    issuer: "Programming Hub",
    year: "2023",
    image: `${base}/Programming Hub/Unity100.webp`,
  },
];
