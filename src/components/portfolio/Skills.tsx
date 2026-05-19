import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code2, Layers, Wrench, Sparkles } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Languages",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "Java", "Python", "SQL"],
  },
  {
    icon: Layers,
    title: "Frameworks & Libraries",
    items: ["React JS", "Three.js", "Flutter", "REST APIs"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git & GitHub", "VS Code", "Android Studio", "Figma", "Vercel", "Netlify"],
  },
  {
    icon: Sparkles,
    title: "Craft",
    items: ["Responsive Design", "UI/UX", "Frontend Optimization", "Agile", "Leadership"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          Tools of the <span className="text-gradient">trade</span>
        </>
      }
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {groups.map((g, i) => {
          const Icon = g.icon;
          return (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass glow-border rounded-2xl p-6 group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-3">{g.title}</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-secondary" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
