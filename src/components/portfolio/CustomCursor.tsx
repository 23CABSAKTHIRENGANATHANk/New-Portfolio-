"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Dot follows instantly
  const dotX = useSpring(rawX, { stiffness: 1000, damping: 50, mass: 0.1 });
  const dotY = useSpring(rawY, { stiffness: 1000, damping: 50, mass: 0.1 });

  // Ring follows with slight lag for premium feel
  const ringX = useSpring(rawX, { stiffness: 180, damping: 22, mass: 0.5 });
  const ringY = useSpring(rawY, { stiffness: 180, damping: 22, mass: 0.5 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onEnter = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (
        el.closest("a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]")
      ) {
        setHovering(true);
      }
    };

    const onLeave = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (
        el.closest("a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]")
      ) {
        setHovering(false);
      }
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeaveWindow = () => setVisible(false);
    const onEnterWindow = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onEnter);
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    document.documentElement.addEventListener("mouseenter", onEnterWindow);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onEnter);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
      document.documentElement.removeEventListener("mouseenter", onEnterWindow);
    };
  }, [rawX, rawY, visible]);

  // Hide on touch devices
  const isTouchRef = useRef(false);
  useEffect(() => {
    const onTouch = () => {
      isTouchRef.current = true;
      setVisible(false);
    };
    window.addEventListener("touchstart", onTouch, { once: true });
    return () => window.removeEventListener("touchstart", onTouch);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Outer ring — lags behind */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          width: hovering ? 48 : clicking ? 20 : 32,
          height: hovering ? 48 : clicking ? 20 : 32,
          opacity: 1,
          borderColor: hovering
            ? "oklch(0.72 0.22 305)"
            : "rgba(255,255,255,0.8)",
          backgroundColor: hovering ? "oklch(0.72 0.22 305 / 0.08)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderRadius: "50%",
          border: "1.5px solid",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      />

      {/* Inner dot — instant */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          width: clicking ? 6 : hovering ? 6 : 6,
          height: clicking ? 6 : hovering ? 6 : 6,
          opacity: hovering ? 0 : 1,
          scale: clicking ? 0.5 : 1,
        }}
        transition={{ duration: 0.1 }}
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          borderRadius: "50%",
          background: "oklch(0.72 0.22 305)",
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
        }}
      />
    </>
  );
}
