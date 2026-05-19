import { motion } from "framer-motion";
import { Scene3D } from "./Scene3D";
import profileMain from "@/assets/profile-main.jpeg";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center pt-28 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(oklch(1_0_0/0.05)_1px,transparent_1px),linear-gradient(90deg,oklch(1_0_0/0.05)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-muted-foreground mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Available for opportunities
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Hi, I'm <span className="text-gradient">Sakthi</span>
            <br />
            Renganathan
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-lg">
            Full Stack Developer crafting
            <span className="text-foreground font-medium"> interactive</span>,
            <span className="text-foreground font-medium"> AI-powered</span> web experiences from
            Madurai, India.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform inline-flex items-center gap-2"
            >
              View Work <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="https://sakthirenganathan7.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full glass font-semibold hover:bg-white/10 transition inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Portfolio
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-muted-foreground">
            <a
              href="https://github.com/23CABSAKTHIRENGANATHANk"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sakthi-renganathan-k/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <span className="text-xs">Madurai, TN · India</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square max-w-md mx-auto w-full"
        >
          <div className="absolute inset-0 -z-10">
            <Scene3D />
          </div>
          <div className="absolute inset-8 rounded-full overflow-hidden glow-border shadow-glow animate-float">
            <img
              src={profileMain}
              alt="Sakthi Renganathan portrait"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-primary/30"
          />
        </motion.div>
      </div>
    </section>
  );
}
