import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react";

const items = [
  {
    icon: Mail,
    label: "Email",
    value: "sakthirenganathankadalkarai@gmail.com",
    href: "mailto:sakthirenganathankadalkarai@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "+91 93676 47637", href: "tel:+919367647637" },
  { icon: MapPin, label: "Location", value: "Madurai, Tamil Nadu, India" },
  {
    icon: Globe,
    label: "Portfolio",
    value: "sakthirenganathan7.netlify.app",
    href: "https://sakthirenganathan7.netlify.app",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "sakthi-renganathan-k",
    href: "https://www.linkedin.com/in/sakthi-renganathan-k/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "23CABSAKTHIRENGANATHANk",
    href: "https://github.com/23CABSAKTHIRENGANATHANk",
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title={
        <>
          Let's build <span className="text-gradient">something great</span>
        </>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass glow-border rounded-3xl p-10 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 -z-10 opacity-50"
          style={{ background: "var(--gradient-glow)" }}
        />
        <p className="text-lg text-muted-foreground max-w-2xl mb-10">
          Whether it's an internship, freelance project, or just a chat about React, AI, or design —
          my inbox is always open.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => {
            const Icon = it.icon;
            const Comp = it.href ? "a" : "div";
            return (
              <Comp
                key={it.label}
                {...(it.href ? { href: it.href, target: "_blank", rel: "noreferrer" } : {})}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/40 transition group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">{it.label}</div>
                  <div className="text-sm font-medium truncate">{it.value}</div>
                </div>
              </Comp>
            );
          })}
        </div>

        <form
          action="https://formsubmit.co/sakthirenganathankadalkarai@gmail.com"
          method="POST"
          target="_blank"
          className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Portfolio contact request" />
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm">
              <span className="font-medium text-foreground">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="font-medium text-foreground">Email</span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              />
            </label>
            <label className="grid gap-2 text-sm sm:col-span-2">
              <span className="font-medium text-foreground">Message</span>
              <textarea
                name="message"
                placeholder="Tell me about your project, deadline, or availability."
                rows={6}
                required
                minLength={20}
                className="w-full rounded-3xl border border-input bg-background px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              />
            </label>
          </div>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
            >
              Send message
            </button>
            <p className="text-xs text-muted-foreground max-w-md">
              Secure, privacy-friendly contact with optional direct email fallback.
            </p>
          </div>
        </form>
      </motion.div>
      <footer className="text-center text-xs text-muted-foreground mt-12">
        © {new Date().getFullYear()} Sakthi Renganathan K · Crafted with React, Three.js & a lot of
        ☕
      </footer>
    </Section>
  );
}
