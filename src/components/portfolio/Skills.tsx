import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Section } from "./Section";
import { Code2, Layers, Wrench, Sparkles } from "lucide-react";

// ── Core skills with proficiency levels ──────────────────────────────────────
const skillBars = [
  { name: "HTML & CSS", level: 95, color: "from-orange-400 to-red-500" },
  { name: "JavaScript (ES6+)", level: 88, color: "from-yellow-400 to-amber-500" },
  { name: "React JS", level: 85, color: "from-cyan-400 to-blue-500" },
  { name: "Python", level: 75, color: "from-blue-400 to-indigo-500" },
  { name: "Three.js / 3D", level: 70, color: "from-violet-400 to-purple-600" },
  { name: "UI/UX Design", level: 80, color: "from-pink-400 to-rose-500" },
];

// ── Skill category cards ──────────────────────────────────────────────────────
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

// ── Animated bar ──────────────────────────────────────────────────────────────
function SkillBar({
  name,
  level,
  color,
  index,
}: {
  name: string;
  level: number;
  color: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">{name}</span>
        <motion.span
          className="text-xs font-semibold text-muted-foreground tabular-nums"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 + index * 0.08 }}
        >
          {level}%
        </motion.span>
      </div>

      {/* Track */}
      <div className="h-2 w-full rounded-full bg-white/8 overflow-hidden">
        {/* Fill */}
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color} shadow-sm`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.2 + index * 0.1,
            ease: [0.34, 1.2, 0.64, 1],
          }}
        />
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
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
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
        {/* Left — animated proficiency bars */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="glass glow-border rounded-3xl p-7 border border-white/8"
        >
          <h3 className="text-sm uppercase tracking-[0.28em] text-secondary mb-6">
            Proficiency
          </h3>
          <div className="space-y-5">
            {skillBars.map((s, i) => (
              <SkillBar key={s.name} {...s} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Right — category tag clouds */}
        <div className="grid sm:grid-cols-2 gap-4">
          {groups.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="glass glow-border rounded-2xl p-5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center mb-3 shadow-glow group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-sm mb-3">{g.title}</h3>
                <ul className="space-y-1.5">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-secondary shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
