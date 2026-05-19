import { motion } from "framer-motion";
import { Section } from "./Section";
import { Award } from "lucide-react";

const certs = [
  { name: "Career Essentials in Generative AI", by: "Microsoft & LinkedIn", year: "2025" },
  { name: "Diploma in Computer Applications", by: "CSC", year: "2024" },
  { name: "Embedded with AI Seminar", by: "CISPRO", year: "2025" },
  { name: "Cybersecurity for Business", by: "Digital Adda", year: "2025" },
  { name: "Frontend Forge Workshop Conductor", by: "CLUSTRA × RVS", year: "2025" },
  { name: "Academic Excellence – HSC", by: "RM PS School · 93%", year: "2023" },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Recognition"
      title={
        <>
          Certifications & <span className="text-gradient">Awards</span>
        </>
      }
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="glass rounded-xl p-5 flex gap-4 items-start hover:bg-white/5 transition"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0 shadow-glow">
              <Award className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <div className="font-medium text-sm">{c.name}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {c.by} · {c.year}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground mt-8">
        ...and 15+ more certifications on{" "}
        <a
          className="text-secondary hover:underline"
          href="https://www.linkedin.com/in/sakthi-renganathan-k/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </Section>
  );
}
