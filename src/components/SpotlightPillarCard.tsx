"use client";

import React from "react";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PillarItem } from "@/data/siteData";
import { ProtectedText } from "@/components/ProtectedText";

interface SpotlightPillarCardProps {
  pillar: PillarItem;
}

/**
 * Interactive Awwwards-inspired editorial card featuring a soft Warm Saffron Gold
 * cursor-following radial glow and smooth directional arrow transition.
 */
export function SpotlightPillarCard({ pillar }: SpotlightPillarCardProps) {
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-400);
    mouseY.set(-400);
  };

  const spotlightBg = useMotionTemplate`radial-gradient(360px circle at ${mouseX}px ${mouseY}px, rgba(212, 154, 42, 0.2), rgba(212, 154, 42, 0.04) 45%, transparent 75%)`;

  return (
    <Link
      href={`/pilar-gerakan#${pillar.id}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-sm border border-navy/12 bg-alabaster p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-saffron/85 hover:shadow-xl hover:shadow-navy/10 sm:p-8"
    >
      {/* Dynamic cursor-tracked warm saffron radial glow */}
      <motion.div
        aria-hidden="true"
        style={{ background: spotlightBg }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Subtle golden top hairline reveal on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-saffron via-terracotta to-saffron/40 transition-transform duration-500 ease-out group-hover:scale-x-100"
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between border-b border-hairline pb-5">
          <span className="font-editorial text-4xl font-semibold text-saffron-dark transition-transform duration-300 group-hover:scale-105">
            {pillar.index}
          </span>
          <span className="rounded-sm border border-navy/10 bg-sand/80 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] uppercase text-navy/75 transition-colors group-hover:border-saffron/50 group-hover:bg-alabaster">
            {pillar.englishSubtitle}
          </span>
        </div>

        <h3 className="font-editorial mt-6 text-2xl font-semibold leading-snug text-navy transition-colors duration-200 group-hover:text-terracotta">
          {pillar.title}
        </h3>

        <p className="mt-2 text-xs font-semibold tracking-wide text-saffron-dark">
          {pillar.tagline}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-slate-editorial">
          <ProtectedText text={pillar.summary} />
        </p>
      </div>

      <div className="relative z-10 mt-8 flex items-center justify-between border-t border-hairline/80 pt-5 text-xs font-semibold tracking-wider uppercase text-navy">
        <span className="transition-colors group-hover:text-terracotta">
          Pelajari Program
        </span>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 bg-alabaster transition-all duration-300 group-hover:border-saffron group-hover:bg-navy group-hover:text-saffron">
          <ArrowRight className="rtl-flip h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
