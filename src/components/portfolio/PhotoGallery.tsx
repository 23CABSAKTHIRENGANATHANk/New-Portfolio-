import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { X, ChevronLeft, ChevronRight, ZoomIn, Camera } from "lucide-react";
import profileCool from "@/assets/profile-cool.jpeg";
import profileMain from "@/assets/profile-main.jpeg";
import profileSuit from "@/assets/profile-suit.jpeg";
import profileWatch from "@/assets/profile-watch.jpeg";

const photos = [
  {
    src: profileCool,
    alt: "Sakthi — Casual Vibes",
    caption: "Casual Vibes",
    label: "Street Style",
    accent: "from-violet-500/30 to-purple-600/20",
    tag: "🎯 Focused",
  },
  {
    src: profileMain,
    alt: "Sakthi — Main Portrait",
    caption: "The main character",
    label: "Portrait",
    accent: "from-cyan-500/30 to-teal-600/20",
    tag: "✨ Iconic",
  },
  {
    src: profileWatch,
    alt: "Sakthi — Watch Moment",
    caption: "Time well spent",
    label: "Lifestyle",
    accent: "from-amber-500/20 to-orange-600/20",
    tag: "⌚ Drip",
  },
  {
    src: profileSuit,
    alt: "Sakthi — Suit Up",
    caption: "When the code ships",
    label: "Professional",
    accent: "from-emerald-500/20 to-green-600/20",
    tag: "💼 Boss Mode",
  },
];

// Bento layout: [col-span, row-span] for each card
const bentoCells = [
  { colSpan: "col-span-2 row-span-2", aspectClass: "" },
  { colSpan: "col-span-1 row-span-1", aspectClass: "" },
  { colSpan: "col-span-1 row-span-1", aspectClass: "" },
  { colSpan: "col-span-1 row-span-2", aspectClass: "" },
];

function LightboxModal({
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
      key="lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-xl" />

      {/* Modal content */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
        className="relative z-10 flex flex-col items-center max-w-3xl w-full px-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image frame */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] border border-white/10">
          {/* Gradient glow behind */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${photo.accent} opacity-60 blur-2xl -z-10 scale-110`}
          />
          <motion.img
            key={index}
            src={photo.src}
            alt={photo.alt}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="w-full max-h-[70vh] object-contain bg-black/40"
          />

          {/* Caption bar */}
          <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-1">
                {photo.label}
              </div>
              <div className="text-white font-semibold text-lg leading-tight">{photo.caption}</div>
            </div>
            <span className="text-xl">{photo.tag}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-5 flex items-center gap-4">
          <button
            onClick={onPrev}
            className="w-11 h-11 rounded-full glass border border-white/15 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all hover:scale-110"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dot indicators */}
          <div className="flex gap-2">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => (i < index ? onPrev() : i > index ? onNext() : undefined)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-primary" : "w-1.5 bg-white/25 hover:bg-white/50"
                }`}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={onNext}
            className="w-11 h-11 rounded-full glass border border-white/15 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all hover:scale-110"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Index */}
        <p className="mt-3 text-xs text-white/30 tracking-widest">
          {index + 1} / {photos.length}
        </p>
      </motion.div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-5 right-5 z-50 w-10 h-10 rounded-full glass border border-white/15 flex items-center justify-center hover:border-destructive/50 hover:bg-destructive/10 transition-all hover:scale-110"
        aria-label="Close lightbox"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
}

export function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + photos.length) % photos.length));
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % photos.length));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, goPrev, goNext]);

  return (
    <>
      <Section
        id="gallery"
        eyebrow="Photo Gallery"
        title={
          <>
            Beyond the <span className="text-gradient">screen</span>
          </>
        }
      >
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground mb-10 max-w-lg flex items-center gap-2"
        >
          <Camera className="w-4 h-4 text-secondary shrink-0" />
          <span>
            A few frames from life outside the IDE — click any photo to explore the full view.
          </span>
        </motion.p>

        {/* Bento grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[520px] sm:h-[560px] md:h-[600px]">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 40, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`${bentoCells[i].colSpan} relative group overflow-hidden rounded-3xl cursor-pointer glow-border`}
              onClick={() => openLightbox(i)}
            >
              {/* Gradient bg layer */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${photo.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`}
              />

              {/* Image */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-20" />

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-30 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-[9px] uppercase tracking-[0.3em] text-white/50 mb-1">
                      {photo.label}
                    </div>
                    <div className="text-white font-semibold text-sm leading-tight">
                      {photo.caption}
                    </div>
                  </div>
                  <span className="text-lg leading-none">{photo.tag}</span>
                </div>
              </div>

              {/* Zoom icon */}
              <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <div className="w-9 h-9 rounded-full glass border border-white/20 flex items-center justify-center shadow-lg">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Corner badge for large card */}
              {i === 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute top-4 left-4 z-30 px-3 py-1 rounded-full glass border border-white/20 text-[10px] uppercase tracking-widest text-white/80"
                >
                  ★ Featured
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer caption */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 flex items-center justify-center gap-3 text-xs text-muted-foreground"
        >
          <span className="w-12 h-px bg-border" />
          <span>Click to view full size · Use arrow keys to navigate</span>
          <span className="w-12 h-px bg-border" />
        </motion.div>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <LightboxModal
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </AnimatePresence>
    </>
  );
}
