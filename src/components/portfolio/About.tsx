import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { X, ChevronLeft, ChevronRight, ZoomIn, Camera } from "lucide-react";
import profileCool from "@/assets/profile-cool.jpeg";
import profileMain from "@/assets/profile-main.jpeg";
import profileSuit from "@/assets/profile-suit.jpeg";
import profileWatch from "@/assets/profile-watch.jpeg";

const stats = [
  { value: "15+", label: "Certifications" },
  { value: "10+", label: "Projects Built" },
  { value: "80%", label: "Academic Score" },
  { value: "2+", label: "Internships" },
];

const photos = [
  {
    src: profileCool,
    alt: "Sakthi — Street Style",
    caption: "Casual Vibes",
    label: "Street Style",
    tag: "🎯",
    accent: "from-violet-500/25 to-purple-700/20",
  },
  {
    src: profileMain,
    alt: "Sakthi — Portrait",
    caption: "The main character",
    label: "Portrait",
    tag: "✨",
    accent: "from-cyan-500/25 to-teal-700/20",
  },
  {
    src: profileWatch,
    alt: "Sakthi — Lifestyle",
    caption: "Time well spent",
    label: "Lifestyle",
    tag: "⌚",
    accent: "from-amber-500/20 to-orange-700/20",
  },
  {
    src: profileSuit,
    alt: "Sakthi — Professional",
    caption: "When the code ships",
    label: "Professional",
    tag: "💼",
    accent: "from-emerald-500/20 to-green-700/20",
  },
];

// Z-pattern layout: row1 → [2col, 1col] · row2 → [1col, 2col]
const layout = [
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
];

function Lightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const photo = photos[index];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-2xl" />

      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className="relative z-10 flex flex-col items-center w-full max-w-2xl px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)]">
          <motion.img
            key={index}
            src={photo.src}
            alt={photo.alt}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full max-h-[68vh] object-contain bg-black/40"
          />
          <div className="absolute bottom-0 inset-x-0 px-6 py-4 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-between">
            <div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-white/45 mb-1">
                {photo.label}
              </div>
              <div className="text-white font-semibold text-base">{photo.caption}</div>
            </div>
            <span className="text-2xl">{photo.tag}</span>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-4">
          <button
            onClick={onPrev}
            className="w-10 h-10 rounded-full glass border border-white/15 flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 transition-all hover:scale-110"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {photos.map((_, i) => (
              <span
                key={i}
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-5 bg-primary" : "w-1.5 bg-white/25"
                }`}
              />
            ))}
          </div>
          <button
            onClick={onNext}
            className="w-10 h-10 rounded-full glass border border-white/15 flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 transition-all hover:scale-110"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <p className="mt-3 text-[11px] text-white/25 tracking-widest">
          {index + 1} / {photos.length}
        </p>
      </motion.div>

      <button
        onClick={onClose}
        className="fixed top-5 right-5 z-50 w-9 h-9 rounded-full glass border border-white/15 flex items-center justify-center hover:bg-white/10 transition-all"
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
}

export function About() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const goPrev = useCallback(
    () => setLightboxIndex((p) => (p === null ? null : (p - 1 + photos.length) % photos.length)),
    [],
  );
  const goNext = useCallback(
    () => setLightboxIndex((p) => (p === null ? null : (p + 1) % photos.length)),
    [],
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, goPrev, goNext]);

  return (
    <>
      <Section
        id="about"
        eyebrow="About"
        title={
          <>
            The story <span className="text-gradient">behind the code</span>
          </>
        }
      >
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* ── Left: Bio + Stats ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack Developer and BCA student at{" "}
                <span className="text-foreground font-medium">RVS College of Arts and Science</span>
                , with a love for crafting modern, responsive, and AI-powered web experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From building real-time traffic violation detectors to interactive 3D portfolios, I
                blend creativity with engineering to ship products that are fast, accessible, and a
                joy to use.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="glass rounded-2xl p-5 text-center border border-white/5 hover:border-primary/20 transition-colors"
                >
                  <div className="text-3xl font-bold text-gradient">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1.5 tracking-wide">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Photo Gallery Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            {/* Outer glass card */}
            <div className="glass rounded-3xl border border-white/10 p-4 shadow-[0_8px_40px_-12px_oklch(0.72_0.22_305/0.2)]">
              {/* Card header */}
              <div className="flex items-center justify-between mb-3.5 px-1">
                <div className="flex items-center gap-2">
                  <Camera className="w-3.5 h-3.5 text-secondary" />
                  <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    Moments
                  </span>
                </div>
                <span className="text-[10px] text-muted-foreground/40 tracking-wide">
                  {photos.length} photos · click to expand
                </span>
              </div>

              {/* Bento grid — Z layout */}
              <div className="grid grid-cols-3 grid-rows-2 gap-2.5 h-[360px] lg:h-[400px]">
                {photos.map((photo, i) => (
                  <motion.div
                    key={photo.src}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.15 + i * 0.09,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 140,
                      damping: 20,
                    }}
                    whileHover={{ scale: 1.02, zIndex: 10 }}
                    onClick={() => setLightboxIndex(i)}
                    className={`${layout[i]} relative overflow-hidden rounded-2xl cursor-pointer group`}
                  >
                    {/* Colour wash */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${photo.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`}
                    />

                    {/* Image */}
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-600 ease-out"
                      style={{ transition: "transform 0.6s ease" }}
                    />

                    {/* Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300 z-20" />

                    {/* Bottom label */}
                    <div className="absolute bottom-0 inset-x-0 px-3 py-2.5 z-30 flex items-end justify-between">
                      <div>
                        <p className="text-[8px] uppercase tracking-[0.25em] text-white/40 leading-none mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          {photo.label}
                        </p>
                        <p className="text-white text-[11px] font-medium leading-tight">
                          {photo.caption}
                        </p>
                      </div>
                      <span className="text-sm leading-none">{photo.tag}</span>
                    </div>

                    {/* Zoom icon */}
                    <div className="absolute top-2.5 right-2.5 z-30 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-250">
                      <div className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <ZoomIn className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    {/* Featured badge */}
                    {i === 0 && (
                      <div className="absolute top-2.5 left-2.5 z-30 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-[8px] uppercase tracking-widest text-white/70">
                        ★ Featured
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Card footer */}
              <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-muted-foreground/35 tracking-widest">
                <span>↔ Arrow keys to navigate</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/25" />
                <span>Esc to close</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </AnimatePresence>
    </>
  );
}
