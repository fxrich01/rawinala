"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

export const EDITORIAL_EASE: [number, number, number, number] = [
  0.22, 1, 0.36, 1,
];

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  distance?: number;
  className?: string;
  immediate?: boolean;
}

export function FadeUp({
  children,
  delay = 0,
  distance = 22,
  className = "",
  immediate = false,
}: FadeUpProps) {
  if (immediate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: distance }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay,
          ease: EDITORIAL_EASE,
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        duration: 0.68,
        delay,
        ease: EDITORIAL_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.09,
  immediate = false,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  immediate?: boolean;
}) {
  const variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  if (immediate) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: EDITORIAL_EASE },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroParallaxFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Subtle editorial parallax shift on vertical scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, 28]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.985]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.14, ease: EDITORIAL_EASE }}
        style={{ y, scale }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}

export function RevealRule({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.85, ease: EDITORIAL_EASE }}
      className={`h-px origin-left bg-gradient-to-r from-saffron via-hairline to-transparent ${className}`}
    />
  );
}

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  durationMs?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  durationMs = 1100,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let rafId = 0;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Cubic ease-out matching editorial grace
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * value));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, value, durationMs]);

  const formatted =
    value >= 1000 && value !== 2026
      ? displayValue.toLocaleString("id-ID")
      : String(displayValue);

  return (
    <span ref={ref} className={`notranslate tabular-nums ${className}`} translate="no">
      {formatted}
      {suffix}
    </span>
  );
}
