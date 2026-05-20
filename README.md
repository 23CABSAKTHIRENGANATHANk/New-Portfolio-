<div align="center">

# ⚡ Sakthi Dev Studio

### Personal Portfolio — Sakthi Renganathan K

**Full Stack Developer · AI Builder · React Engineer**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-sakthirenganathan7.netlify.app-6366f1?style=for-the-badge&logo=vercel&logoColor=white)](https://sakthirenganathan7.netlify.app/)
[![Built with React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TanStack Start](https://img.shields.io/badge/TanStack%20Start-SSR-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)](https://tanstack.com/start)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://workers.cloudflare.com)

![Portfolio Hero Screenshot](https://sakthirenganathan7.netlify.app/og-preview.png)

</div>

---

## 📖 About

A modern, high-performance personal developer portfolio built with cutting-edge web technologies. Features server-side rendering via Cloudflare Workers, immersive 3D graphics, smooth Framer Motion animations, and a fully interactive photo gallery with lightbox.

> Designed to impress — crafted with ❤️ from Madurai, India.

---

## ✨ Features

- 🌐 **SSR on the Edge** — Rendered by Cloudflare Workers via TanStack Start for blazing-fast global delivery
- 🎨 **3D Hero Animation** — Three.js particle orbit canvas using React Three Fiber & Drei
- 🖼️ **Interactive Photo Gallery** — Bento-grid lightbox with keyboard navigation (arrow keys + Esc)
- 💼 **Projects Showcase** — 10 real projects with live demo links and GitHub buttons
- 📜 **Certifications Section** — Scrollable recognition wall
- 📬 **Contact Form** — Functional contact section with social links
- 📱 **Fully Responsive** — Optimised for all screen sizes
- ⚡ **Smooth Animations** — Framer Motion scroll-triggered entrance animations throughout
- 🌙 **Dark Mode** — Premium dark theme with glassmorphism UI

---

## 🛠️ Tech Stack

### Core
| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 19 | UI framework |
| [TanStack Start](https://tanstack.com/start) | 1.x | SSR / full-stack framework |
| [TanStack Router](https://tanstack.com/router) | 1.x | File-based routing |
| [TypeScript](https://typescriptlang.org) | 5.8 | Type safety |
| [Vite](https://vitejs.dev) | 7.x | Build tool & dev server |

### Styling & UI
| Technology | Version | Purpose |
|---|---|---|
| [Tailwind CSS](https://tailwindcss.com) | v4 | Utility-first styling |
| [Framer Motion](https://framer.motion.com) | 12 | Animations & transitions |
| [Radix UI](https://radix-ui.com) | Latest | Accessible UI primitives |
| [Lucide React](https://lucide.dev) | Latest | Icon library |
| [shadcn/ui](https://ui.shadcn.com) | — | Component system |

### 3D & Graphics
| Technology | Version | Purpose |
|---|---|---|
| [Three.js](https://threejs.org) | 0.184 | 3D rendering engine |
| [@react-three/fiber](https://r3f.docs.pmnd.rs) | 9.x | React renderer for Three.js |
| [@react-three/drei](https://github.com/pmndrs/drei) | 10.x | Three.js helpers & abstractions |

### Deployment & Infrastructure
| Technology | Purpose |
|---|---|
| [Cloudflare Workers](https://workers.cloudflare.com) | Edge SSR runtime |
| [@cloudflare/vite-plugin](https://github.com/cloudflare/workers-sdk) | Workers dev integration |
| [Wrangler](https://developers.cloudflare.com/workers/wrangler/) | CLI for Cloudflare deployment |

---

## 🗂️ Project Structure

```
sakthi-dev-studio/
├── src/
│   ├── assets/                  # Profile photos (JPEG)
│   ├── components/
│   │   ├── portfolio/           # All portfolio section components
│   │   │   ├── About.tsx        # About + photo gallery with lightbox
│   │   │   ├── Certifications.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Hero.tsx         # Hero with 3D scene
│   │   │   ├── Navbar.tsx
│   │   │   ├── Projects.tsx     # 10 projects with live + GitHub links
│   │   │   ├── Scene3D.tsx      # Three.js particle canvas
│   │   │   ├── Section.tsx      # Reusable section wrapper
│   │   │   └── Skills.tsx
│   │   └── ui/                  # shadcn/ui components
│   ├── routes/
│   │   ├── __root.tsx           # Root layout
│   │   └── index.tsx            # Home page
│   ├── server.ts                # Cloudflare Worker SSR entry
│   └── styles.css               # Global Tailwind v4 design system
├── public/                      # Static assets
├── vite.config.ts               # Vite + Cloudflare + TanStack config
├── wrangler.jsonc               # Cloudflare Workers config
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm** >= 9
- A [Cloudflare account](https://dash.cloudflare.com/sign-up) (for deployment)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/23CABSAKTHIRENGANATHANk/New-Portfolio-.git
cd New-Portfolio-

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173**

---

## 📜 Available Scripts

```bash
npm run dev        # Start local dev server (Vite + Cloudflare workerd)
npm run build      # Build for production (client + SSR + Worker bundles)
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
```

---

## ☁️ Deployment

This project is configured for **Cloudflare Workers** deployment.

### Deploy to Cloudflare

```bash
# 1. Login to Cloudflare
npx wrangler login

# 2. Build the project
npm run build

# 3. Deploy to Cloudflare Workers
npx wrangler deploy
```

> The `wrangler.jsonc` is pre-configured with the correct entry point (`src/server.ts`).

---

## 🎯 Projects Showcased

| Project | Stack | Status | Live |
|---|---|---|---|
| AI Traffic Violation Detector | JavaScript, AI | ✅ Live | [autochallanai.vercel.app](https://autochallanai.vercel.app/) |
| AI Career Intelligence | React, Python, AI | ✅ Live | [futurebuilder.vercel.app](https://futurebuilder.vercel.app/) |
| Event Management System | HTML, CSS, JS | ✅ Live | [sakthi-ems-2026.vercel.app](https://sakthi-ems-2026.vercel.app/) |
| StudyFlow | JavaScript | ✅ Live | [studyflow07.vercel.app](https://studyflow07.vercel.app/) |
| E-Book Platform | HTML, CSS, JS | 🚧 In Progress | — |
| AI Sign Speak | AI, React, Python | 🚧 In Progress | — |
| SR Hospital | HTML, CSS, JS | ✅ Live | [srhospital.netlify.app](https://srhospital.netlify.app/) |
| SR Store | HTML, CSS | ✅ Live | [srstore1.netlify.app](https://srstore1.netlify.app/) |
| 3D Portfolio | CSS, JS, Three.js | ✅ Live | [sakthirenganathan1.netlify.app](https://sakthirenganathan1.netlify.app/) |
| Sakthi Portfolio v1 | HTML, CSS, JS | ✅ Live | [sakthirenganathan7.netlify.app](https://sakthirenganathan7.netlify.app/) |

---

## 🔧 Configuration Notes

### Vite Config (`vite.config.ts`)

The Cloudflare plugin **must** be loaded before TanStack Start to correctly bind to the SSR environment:

```ts
plugins: [
  cloudflare({ viteEnvironment: { name: "ssr" } }),  // ← First
  tanstackStart(),
  tailwindcss(),
  react(),
  tsconfigPaths(),
]
```

> Without `viteEnvironment: { name: "ssr" }`, esbuild inside workerd will fail to resolve TanStack's virtual modules.

---

## 📬 Contact

**Sakthi Renganathan K**

- 🌐 Portfolio: [sakthirenganathan7.netlify.app](https://sakthirenganathan7.netlify.app/)
- 💼 LinkedIn: [linkedin.com/in/sakthi-renganathan-k](https://www.linkedin.com/in/sakthi-renganathan-k/)
- 🐙 GitHub: [github.com/23CABSAKTHIRENGANATHANk](https://github.com/23CABSAKTHIRENGANATHANk)
- 📍 Madurai, TN · India

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ and a lot of ☕ by **Sakthi Renganathan K**

⭐ **Star this repo if you like it!**

</div>
