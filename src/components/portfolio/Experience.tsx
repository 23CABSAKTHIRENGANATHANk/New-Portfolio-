import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    icon: Briefcase,
    role: "React JS Developer Intern",
    org: "Movicloudlabs",
    date: "Oct 2025 – Dec 2025",
    points: [
      "Built responsive UI components with React JS, improving usability and frontend performance.",
      "Integrated REST APIs for dynamic data rendering and seamless interactions.",
      "Collaborated in Agile workflows using Git and GitHub.",
      "Contributed to debugging, testing, and stability improvements.",
    ],
  },
  {
    icon: Briefcase,
    role: "Student Placement Co-Ordinator",
    org: "RVS College of Arts and Science",
    date: "Dec 2025 – Jan 2026",
    points: [
      "Coordinated on-campus, off-campus, and virtual placement drives.",
      "Organized pre-placement talks, aptitude tests, and interviews.",
      "Managed communication between recruiters, staff, and students.",
    ],
  },
  {
    icon: GraduationCap,
    role: "Bachelor of Computer Applications (BCA)",
    org: "RVS College of Arts and Science",
    date: "Jul 2023 – Apr 2026 · 80% avg",
    points: [
      "Microsoft & CISPRO certified in AI and tech programs.",
      "Conducted the Frontend Forge workshop with CLUSTRA.",
      "Active in seminars, workshops, and software development activities.",
    ],
  },
  {
    icon: GraduationCap,
    role: "Higher Secondary Certificate",
    org: "RM PS Ramiah Nadar Hr. Sec. School",
    date: "Jun 2022 – Apr 2023 · 93%",
    points: ["Strong foundation in computer science and mathematics."],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Journey"
      title={
        <>
          Experience & <span className="text-gradient">Education</span>
        </>
      }
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
        <div className="space-y-10">
          {timeline.map((t, i) => {
            const Icon = t.icon;
            const left = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: left ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${left ? "" : "md:[direction:rtl]"}`}
              >
                <div
                  className={`pl-12 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:pl-12 md:[direction:ltr]"}`}
                >
                  <div className="glass glow-border rounded-2xl p-6">
                    <div className="text-xs text-secondary mb-1">{t.date}</div>
                    <h3 className="text-lg font-semibold">{t.role}</h3>
                    <div className="text-sm text-muted-foreground mb-3">{t.org}</div>
                    <ul className="text-sm text-muted-foreground space-y-1.5 [direction:ltr]">
                      {t.points.map((p, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-primary mt-1">▹</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                  <Icon className="w-4 h-4 text-primary-foreground" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
