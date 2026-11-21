"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PILLARS } from "@/data/siteData";
import { EditorialPhotoPlaceholder } from "@/components/EditorialPhotoPlaceholder";
import { ProtectedText } from "@/components/ProtectedText";

export function PilarScrollytelling() {
  const [activeId, setActiveId] = useState<string>(PILLARS[0].id);
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    PILLARS.forEach((pillar) => {
      const el = document.getElementById(pillar.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(pillar.id);
            }
          });
        },
        { rootMargin: "-35% 0px -45% 0px", threshold: 0.05 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="relative bg-alabaster py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Sticky Vertical Scrollytelling Rail (Desktop) */}
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-32">
              <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-saffron-dark">
                Navigasi Bab Gerakan
              </p>

              <div className="relative mt-6 ps-5">
                {/* Base vertical hairline */}
                <div className="absolute bottom-2 start-0 top-2 w-0.5 bg-hairline" />
                {/* Scroll-driven saffron progress bar */}
                <motion.div
                  style={{ scaleY }}
                  className="absolute bottom-2 start-0 top-2 w-0.5 origin-top bg-saffron"
                />

                <ul className="space-y-6">
                  {PILLARS.map((pillar) => {
                    const isActive = activeId === pillar.id;
                    return (
                      <li key={pillar.id}>
                        <a
                          href={`#${pillar.id}`}
                          className={`group block transition-all ${
                            isActive ? "opacity-100" : "opacity-55 hover:opacity-85"
                          }`}
                        >
                          <span
                            className={`font-editorial block text-2xl font-semibold leading-none ${
                              isActive ? "text-saffron-dark" : "text-navy/60"
                            }`}
                          >
                            {pillar.index}
                          </span>
                          <span className="mt-1 block text-sm font-semibold text-navy">
                            {pillar.title}
                          </span>
                          <span className="mt-0.5 block text-[11px] text-slate-editorial">
                            {pillar.englishSubtitle}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-10 rounded-sm border border-hairline bg-sand/70 p-4">
                <p className="text-xs font-semibold text-navy">
                  Ingin berkolaborasi pada salah satu pilar kami?
                </p>
                <Link
                  href="/kontak"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-terracotta hover:underline"
                >
                  <span>Ajukan Kemitraan</span>
                  <ArrowRight className="rtl-flip h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Vertical Scrollytelling Narrative Chapters */}
          <div className="space-y-20 lg:col-span-9 lg:space-y-28">
            {PILLARS.map((pillar, chapterIdx) => (
              <motion.article
                key={pillar.id}
                id={pillar.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="scroll-mt-32 border-b border-hairline pb-20 last:border-b-0 last:pb-0"
              >
                {/* Chapter Header */}
                <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-hairline pb-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-editorial text-5xl font-semibold text-saffron-dark sm:text-6xl">
                      {pillar.index}
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-terracotta">
                        {pillar.englishSubtitle}
                      </p>
                      <h2 className="font-editorial mt-1 text-3xl font-semibold text-navy sm:text-4xl">
                        {pillar.title}
                      </h2>
                    </div>
                  </div>
                  <span className="rounded-sm border border-navy/12 bg-sand px-3 py-1 text-[11px] font-semibold tracking-wider uppercase text-navy">
                    Pilar {chapterIdx + 1} dari 3
                  </span>
                </div>

                {/* Tagline */}
                <p className="font-editorial mt-6 text-xl italic leading-snug text-navy/90 sm:text-2xl">
                  &ldquo;{pillar.tagline}&rdquo;
                </p>

                {/* Editorial Visual Frame */}
                <div className="mt-7">
                  <EditorialPhotoPlaceholder
                    src={pillar.photoSpec.image}
                    title={pillar.photoSpec.title}
                    ratio="16:9"
                    badge={`Pilar ${pillar.index} • ${pillar.englishSubtitle}`}
                    tone={pillar.photoSpec.tone}
                    illustrationNote="Ilustrasi dokumentasi kegiatan"
                    caption={pillar.photoSpec.caption}
                  />
                </div>

                {/* Narrative Paragraphs */}
                <div className="mt-8 space-y-4 text-sm leading-relaxed text-slate-editorial sm:text-[15.5px]">
                  {pillar.narrative.map((para, pIdx) => (
                    <p key={pIdx}>
                      <ProtectedText text={para} />
                    </p>
                  ))}
                </div>

                {/* Key Metrics Band */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {pillar.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-sm border border-saffron/35 bg-sand/75 p-4"
                    >
                      <p className="font-editorial text-2xl font-bold text-navy sm:text-3xl">
                        {m.value}
                      </p>
                      <p className="mt-1 text-xs font-medium text-slate-editorial">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Key Programs List */}
                <div className="mt-8 rounded-sm border border-navy/12 bg-alabaster p-6 sm:p-8">
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-saffron-dark">
                    Program Utama Pilar {pillar.index}
                  </p>
                  <div className="mt-5 divide-y divide-hairline">
                    {pillar.keyPrograms.map((prog) => (
                      <div
                        key={prog.title}
                        className="flex items-start gap-3.5 py-4 first:pt-0 last:pb-0"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
                        <div>
                          <h3 className="text-sm font-bold text-navy sm:text-[15px]">
                            {prog.title}
                          </h3>
                          <p className="mt-1 text-xs leading-relaxed text-slate-editorial sm:text-sm">
                            {prog.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
