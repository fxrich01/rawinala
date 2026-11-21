"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Quote } from "lucide-react";
import { SYNERGY_TRACKS, SynergyTrack } from "@/data/siteData";
import {
  AnimatedCounter,
  EDITORIAL_EASE,
  FadeUp,
  RevealRule,
} from "@/components/MotionPrimitives";
import { ProtectedText } from "@/components/ProtectedText";

/**
 * Interactive "Peta & Jejak Sinergi Lintas Elemen" section featuring
 * animated tab selector, live count-up achievement figures, official
 * statement quotes, and structured program timeline.
 */
export function SynergyTimelineSection() {
  const [activeTrackId, setActiveTrackId] = useState<SynergyTrack["id"]>(
    SYNERGY_TRACKS[0].id
  );

  const activeTrack =
    SYNERGY_TRACKS.find((t) => t.id === activeTrackId) ?? SYNERGY_TRACKS[0];

  return (
    <section className="border-b border-hairline bg-alabaster py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saffron-dark">
                Rekam Jejak &amp; Capaian Terukur
              </p>
              <h2 className="font-editorial mt-2 text-3xl font-semibold leading-tight text-navy sm:text-5xl">
                Peta &amp; Jejak Sinergi Lintas Elemen
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-editorial">
              Pilih fokus sinergi untuk menelusuri rangkaian program nyata,
              pernyataan sikap resmi, serta capaian kolaborasi lintas unsur
              masyarakat dan kenegaraan.
            </p>
          </div>
          <RevealRule className="mt-7" />
        </FadeUp>

        {/* Interactive Focus Tab Switcher with sliding Framer Motion highlight */}
        <div
          role="tablist"
          aria-label="Kategori Jejak Sinergi"
          className="mt-9 flex flex-wrap gap-2.5 border-b border-hairline pb-5"
        >
          {SYNERGY_TRACKS.map((track) => {
            const isActive = track.id === activeTrackId;
            return (
              <button
                key={track.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTrackId(track.id)}
                className={`relative rounded-sm border px-5 py-3 text-xs font-semibold tracking-wider uppercase transition-colors sm:text-[13px] ${
                  isActive
                    ? "border-navy text-alabaster"
                    : "border-navy/15 bg-sand/55 text-navy hover:border-saffron hover:bg-sand"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="synergy-active-tab"
                    transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
                    className="absolute inset-0 rounded-sm bg-navy"
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      isActive ? "bg-saffron" : "bg-navy/30"
                    }`}
                  />
                  <span>{track.label}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Animated Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTrack.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.42, ease: EDITORIAL_EASE }}
            className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10"
          >
            {/* Left Column: Counters + Official Statement Quote */}
            <div className="space-y-6 lg:col-span-5">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-terracotta">
                  {activeTrack.eyebrow}
                </p>
                <h3 className="font-editorial mt-2 text-2xl font-semibold leading-snug text-navy sm:text-3xl">
                  <ProtectedText text={activeTrack.headline} />
                </h3>
              </div>

              {/* Animated Achievement Counters */}
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3 lg:grid-cols-1">
                {activeTrack.counters.map((counter) => (
                  <div
                    key={`${activeTrack.id}-${counter.label}`}
                    className="flex items-baseline justify-between gap-4 rounded-sm border border-saffron/35 bg-sand/75 px-5 py-4"
                  >
                    <AnimatedCounter
                      value={counter.value}
                      suffix={counter.suffix}
                      className="font-editorial text-3xl font-bold text-navy sm:text-4xl"
                    />
                    <span className="text-end text-xs font-medium leading-snug text-slate-editorial">
                      {counter.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Official Statement Callout */}
              <blockquote className="rounded-sm border border-saffron/40 bg-navy p-6 text-alabaster sm:p-7">
                <Quote className="h-6 w-6 text-saffron" />
                <p className="font-editorial mt-3 text-lg italic leading-relaxed text-alabaster/95 sm:text-xl">
                  &ldquo;
                  <ProtectedText text={activeTrack.statementQuote} />
                  &rdquo;
                </p>
                <footer className="mt-4 border-t border-alabaster/15 pt-3">
                  <p className="text-xs font-bold tracking-wider uppercase text-saffron">
                    <ProtectedText text={activeTrack.statementAuthor} />
                  </p>
                  <p className="mt-0.5 text-[11px] text-alabaster/70">
                    <ProtectedText text={activeTrack.statementRole} />
                  </p>
                </footer>
              </blockquote>
            </div>

            {/* Right Column: Vertical Chronological Program Timeline */}
            <div className="lg:col-span-7">
              <div className="rounded-sm border border-navy/12 bg-sand/45 p-6 sm:p-8">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-saffron-dark">
                  Linimasa Program &amp; Inisiatif
                </p>

                <ol className="relative mt-6 space-y-6 border-s border-saffron/55 ps-6 sm:ps-8">
                  {activeTrack.programs.map((prog, index) => (
                    <motion.li
                      key={prog.title}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.08,
                        ease: EDITORIAL_EASE,
                      }}
                      className="relative rounded-sm border border-hairline bg-alabaster p-5 transition-colors hover:border-saffron"
                    >
                      {/* Timeline node dot */}
                      <span
                        aria-hidden="true"
                        className="absolute -start-[31px] top-6 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-saffron bg-navy sm:-start-[39px]"
                      />

                      <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold text-saffron-dark">
                        <span className="inline-flex items-center gap-1 rounded-sm bg-sand px-2 py-0.5 text-navy">
                          <Calendar className="h-3 w-3 text-saffron-dark" />
                          {prog.period}
                        </span>
                        <span className="inline-flex items-center gap-1 text-slate-editorial">
                          <MapPin className="h-3 w-3 text-terracotta" />
                          {prog.location}
                        </span>
                      </div>

                      <h4 className="font-editorial mt-3 text-xl font-semibold leading-snug text-navy sm:text-2xl">
                        <ProtectedText text={prog.title} />
                      </h4>

                      <p className="mt-2 text-sm leading-relaxed text-slate-editorial">
                        <ProtectedText text={prog.description} />
                      </p>
                    </motion.li>
                  ))}
                </ol>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-5">
                  <p className="text-xs text-slate-editorial">
                    Ingin menjajaki kolaborasi pada fokus ini?
                  </p>
                  <Link
                    href="/kontak"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-navy transition-colors hover:text-terracotta"
                  >
                    <span>Ajukan Sinergi Resmi</span>
                    <ArrowRight className="rtl-flip h-3.5 w-3.5 text-saffron-dark" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
