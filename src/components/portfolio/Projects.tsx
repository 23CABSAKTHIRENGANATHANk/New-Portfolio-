import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Section } from "./Section";
import { ArrowUpRight, Github, Globe, Clock } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  github: string;
  live: string | null;
  inProgress?: boolean;
  accent: string;
  emoji: string;
};

const projects: Project[] = [
  {
    title: "AI Traffic Violation Detector",
    desc: "AI-powered system detecting traffic violations in real time for smart city monitoring.",
    tags: ["JavaScript", "AI", "Web"],
    github: "https://github.com/23CABSAKTHIRENGANATHANk/Ai-traffic-violation-Detector",
    live: "https://autochallanai.vercel.app/",
    accent: "from-slate-400 to-slate-500",
    emoji: "🚦",
  },
  {
    title: "AI Career Intelligence",
    desc: "Full-stack AI career guidance app helping users discover ideal career paths.",
    tags: ["React", "Python", "AI"],
    github: "https://github.com/23CABSAKTHIRENGANATHANk/career-bath-building-",
    live: "https://futurebuilder.vercel.app/",
    accent: "from-slate-500 to-slate-600",
    emoji: "🧠",
  },
  {
    title: "Event Management System",
    desc: "Web platform streamlining event organization, scheduling, and management.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/23CABSAKTHIRENGANATHANk/Event-Management-",
    live: "https://sakthi-ems-2026.vercel.app/",
    accent: "from-slate-400 to-slate-600",
    emoji: "📅",
  },
  {
    title: "StudyFlow",
    desc: "Productivity and study management app boosting student workflow and focus.",
    tags: ["JavaScript", "Web"],
    github: "https://github.com/23CABSAKTHIRENGANATHANk/StudyFlow",
    live: "https://studyflow07.vercel.app/",
    accent: "from-slate-500 to-slate-700",
    emoji: "📚",
  },
  {
    title: "E-Book Platform",
    desc: "Digital reading platform with a responsive, optimized UI across devices.",
    tags: ["HTML", "CSS", "JS"],
    github: "https://github.com/23CABSAKTHIRENGANATHANk/E-Book",
    live: null,
    inProgress: true,
    accent: "from-slate-400 to-slate-500",
    emoji: "📖",
  },
  {
    title: "AI Sign Speak",
    desc: "Real-time sign language translation powered by AI for inclusive communication.",
    tags: ["AI", "React", "Python"],
    github: "https://github.com/23CABSAKTHIRENGANATHANk",
    live: null,
    inProgress: true,
    accent: "from-slate-500 to-slate-600",
    emoji: "🤟",
  },
  {
    title: "SR Hospital",
    desc: "Hospital management web interface with responsive layouts and healthcare UI components.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/23CABSAKTHIRENGANATHANk/srhospital",
    live: "https://srhospital.netlify.app/",
    accent: "from-slate-400 to-slate-600",
    emoji: "🏥",
  },
  {
    title: "SR Store",
    desc: "Modern e-commerce frontend with responsive product layouts and clean user experience.",
    tags: ["HTML", "CSS"],
    github: "https://github.com/23CABSAKTHIRENGANATHANk/srstore",
    live: "https://srstore1.netlify.app/",
    accent: "from-slate-500 to-slate-700",
    emoji: "🛒",
  },
  {
    title: "3D Portfolio",
    desc: "Interactive 3D portfolio website with immersive animations and cutting-edge frontend effects.",
    tags: ["CSS", "JavaScript", "Three.js"],
    github: "https://github.com/23CABSAKTHIRENGANATHANk/3d",
    live: "https://sakthirenganathan1.netlify.app/",
    accent: "from-slate-400 to-slate-500",
    emoji: "🌐",
  },
  {
    title: "Sakthi Portfolio v1",
    desc: "Personal portfolio showcasing projects, certifications, and technical skills with responsive design.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/23CABSAKTHIRENGANATHANk/sakthirenganathan7",
    live: "https://sakthirenganathan7.netlify.app/",
    accent: "from-slate-500 to-slate-600",
    emoji: "🎨",
  },
];

export function Projects() {
  const [selectedTag, setSelectedTag] = useState("All");

  const allTags = useMemo(
    () => ["All", ...Array.from(new Set(projects.flatMap((project) => project.tags)))],
    []
  );

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title={
        <>
          Projects that <span className="text-gradient">ship</span>
        </>
      }
    >
      <div className="mb-8 flex flex-wrap items-center gap-3">
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setSelectedTag(tag)}
            aria-pressed={selectedTag === tag}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
              selectedTag === tag
                ? "bg-primary text-primary-foreground shadow-glow"
                : "bg-white/5 text-muted-foreground hover:bg-white/10"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="mb-6 text-sm text-muted-foreground">
        Showing <span className="font-semibold text-foreground">{filteredProjects.length}</span>{" "}
        project{filteredProjects.length === 1 ? "" : "s"} for <span className="font-semibold text-foreground">{selectedTag}</span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="group relative glass glow-border rounded-2xl p-6 overflow-hidden flex flex-col"
          >
            {/* Background glow orb */}
            <div
              className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${p.accent} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity duration-500`}
            />

            {/* In-progress ribbon */}
            {p.inProgress && (
              <div className="absolute top-3.5 right-3.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-muted-foreground text-[9px] uppercase tracking-widest">
                <Clock className="w-2.5 h-2.5" />
                In Progress
              </div>
            )}

            <div className="relative flex flex-col h-full">
              {/* Header row */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-lg shadow-sm shrink-0`}
                >
                  {p.emoji}
                </div>
                <h3 className="text-base font-semibold leading-snug pr-8">{p.title}</h3>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2 mt-auto">
                {/* Live demo */}
                {p.live ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-medium hover:bg-white/15 hover:border-white/30 hover:scale-[1.02] transition-all duration-200`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    Live Demo
                    <ArrowUpRight className="w-3 h-3 opacity-70" />
                  </a>
                ) : (
                  <span className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-muted-foreground text-xs font-medium cursor-default select-none">
                    <Clock className="w-3.5 h-3.5" />
                    Coming Soon
                  </span>
                )}

                {/* GitHub */}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  title="View on GitHub"
                  className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/10 hover:scale-110 transition-all duration-200 shrink-0"
                >
                  <Github className="w-4 h-4 text-muted-foreground" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
