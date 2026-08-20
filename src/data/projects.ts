export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
}

export interface ProjectArea {
  name: string;
  projects: Project[];
}

export interface Company {
  id: string;
  name: string;
  areas?: ProjectArea[];
  projects?: Project[];
}

export const companies: Company[] = [];
