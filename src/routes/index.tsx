import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sakthi Renganathan K — Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Sakthi Renganathan K — Full Stack & Frontend Developer based in Chennai, building AI-powered, interactive web experiences with React, Three.js, and modern UI/UX.",
      },
      { property: "og:title", content: "Sakthi Renganathan K — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Interactive portfolio: React, Three.js, AI-powered apps and modern web experiences.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
