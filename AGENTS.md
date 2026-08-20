# Portfolio - 0z4c4

## Project Overview
Personal portfolio website for GitHub user **0z4c4** (previously dbazc).

- **URL**: https://0z4c4.github.io/portfolio/
- **Repo**: https://github.com/0z4c4/portfolio.git
- **Stack**: React 19 + TypeScript + Vite 8 + React Router 7
- **Package manager**: pnpm (v11.18.0)
- **Deploy**: `gh-pages` to GitHub Pages (branch: `gh-pages`)

## Commands
```bash
pnpm run dev        # Development server
pnpm run build      # TypeScript + Vite build (output: dist/)
pnpm run typecheck  # TypeScript only
pnpm run deploy     # Build + deploy to gh-pages
```

## Project Structure
```
src/
├── components/
│   ├── Navbar.tsx          # Navigation with NavLink (active state)
│   ├── Footer.tsx          # Footer with social links
│   ├── Hero.tsx            # Hero section with rotating words + tech banner
│   ├── Hero.css
│   ├── About.tsx           # About me section
│   ├── About.css
│   ├── Services.tsx        # Services/areas section
│   ├── Services.css
│   ├── Icons.tsx           # SVG icon components
│   ├── ScrollToTop.tsx     # Scroll to top on route change
│   └── PageTransition.tsx  # Page fade transition wrapper
├── pages/
│   ├── Home.tsx            # Landing page (Hero + Services + About)
│   ├── Proyectos.tsx       # Projects with company cards + modal
│   ├── Certificados.tsx    # Certificates grid + modal
│   ├── Certificates.css    # Certificate + modal styles
│   └── Projects.css        # Company card + project thumb styles
├── data/
│   ├── certificates.ts     # Certificate entries (16 items)
│   ├── projects.ts         # Company/ProjectArea/Project interfaces (empty array)
│   ├── services.ts         # Service/area data
│   └── contact.ts          # WhatsApp URL
├── App.tsx                 # Routes: /, /proyectos, /certificados
└── main.tsx                # BrowserRouter with basename="/portfolio"
```

## Routes
| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Hero + Services + About |
| `/proyectos` | Proyectos | Company cards with expandable areas |
| `/certificados` | Certificados | Certificate grid with image modal |

## Design Tokens (CSS Variables)
- `--bg`, `--bg-muted`, `--surface` - Backgrounds
- `--text`, `--text-muted` - Text colors
- `--accent`, `--accent-strong`, `--accent-soft` - Accent colors
- `--border` - Border color
- `--radius-sm`, `--radius-lg` - Border radius
- `--shadow-sm`, `--shadow-md` - Box shadows
- `--font-display` - Display font

## Key Features
- **Page transitions**: Fade animation on route changes (App.tsx FadeRoute)
- **Hero rotating words**: CREAR, DESARROLLAR, EDITAR, REPARAR (2.5s interval)
- **Tech banner**: Infinite scroll of tech icons (React, Node, Vite, HTML, CSS, JS, Premiere, Photoshop, Illustrator, Word, Excel, PowerPoint, Docker, Linux)
- **Certificate modal**: Image zoom with backdrop blur
- **Company cards**: Expandable accordion with area grouping
- **Stagger animations**: Cards fade-in with delay per item

## Certificate Images
- Location: `public/certificados/` (organized by provider)
- Format: WebP, original aspect ratio
- CSS: Cards use `aspect-ratio: 4/3` with `object-fit: cover`
- Modal: `object-fit: contain` to show full image
- Source: Google Drive folder `1WikHrONhGsUCVJccSzWUrj3ZhSyPzXFr`
- Conversion: `gdown --folder` → PDF to PNG (pdftoppm) → WebP (ImageMagick)

## Project Images
- Source: Google Drive folder `1FzlciDio3WIv2PqyluFiYNO9MOZo2x76` (currently empty)
- Structure: `Company > Area (optional) > Project[]`
- Data file: `src/data/projects.ts` (interfaces defined, array empty)

## Deployment Notes
- Base path: `/portfolio` (vite.config.ts `base` and BrowserRouter `basename`)
- Git history: Single clean commit (force pushed)
- `.gitignore`: Includes `public/certificados/tmp/` for temp conversion files
