"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Globe } from "lucide-react";
import { LANGUAGES } from "@/data/siteData";
import { useLanguage } from "@/components/GoogleTranslateProvider";
import { EDITORIAL_EASE } from "@/components/MotionPrimitives";

interface LanguageSwitcherProps {
  variant?: "header" | "mobile";
  onSelectComplete?: () => void;
}

export function LanguageSwitcher({
  variant = "header",
  onSelectComplete,
}: LanguageSwitcherProps) {
  const { currentLang, activeOption, setLanguage, isSwitching } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isTranslated = currentLang !== "id";

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleChoose = (code: string) => {
    setOpen(false);
    setLanguage(code);
    onSelectComplete?.();
  };

  if (variant === "mobile") {
    return (
      <div className="notranslate w-full" translate="no">
        <div className="mb-2.5 flex items-center justify-between text-[11px] font-semibold tracking-[0.16em] uppercase text-navy/65">
          <span className="inline-flex items-center gap-1.5">
            <Globe className="h-3.5 w-3.5 text-saffron-dark" />
            Bahasa / Language
          </span>
          <span className="inline-flex items-center gap-1.5 rounded bg-navy px-2 py-0.5 text-[10px] font-bold text-alabaster">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isSwitching
                  ? "animate-pulse bg-terracotta"
                  : isTranslated
                    ? "bg-saffron"
                    : "bg-emerald-400"
              }`}
            />
            {activeOption.shortCode}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {LANGUAGES.map((lang) => {
            const isActive = lang.code === currentLang;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleChoose(lang.code)}
                className={`flex items-center justify-between rounded-sm border px-3 py-2 text-start transition-colors ${
                  isActive
                    ? "border-navy bg-navy text-alabaster"
                    : "border-hairline bg-alabaster text-navy hover:border-saffron hover:bg-sand/60"
                }`}
              >
                <span className="min-w-0">
                  <span className="block text-[11px] font-bold tracking-wider">
                    {lang.shortCode}
                  </span>
                  <span
                    className={`block truncate text-xs ${
                      isActive ? "text-alabaster/85" : "text-slate-editorial"
                    }`}
                  >
                    {lang.nativeLabel}
                  </span>
                </span>
                {isActive && (
                  <Check className="h-3.5 w-3.5 shrink-0 text-saffron" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="notranslate relative inline-block"
      translate="no"
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Pilih Bahasa"
        className={`group inline-flex items-center gap-2 rounded-sm border px-3 py-1.5 text-xs font-semibold tracking-wider transition-all duration-200 ${
          open
            ? "border-saffron bg-navy text-alabaster shadow-sm"
            : isTranslated
              ? "border-saffron/70 bg-sand/85 text-navy hover:border-saffron hover:bg-sand"
              : "border-navy/15 bg-alabaster/90 text-navy hover:border-saffron/80 hover:bg-sand/70"
        }`}
      >
        <span className="relative flex items-center justify-center">
          <Globe
            className={`h-3.5 w-3.5 transition-colors ${
              open
                ? "text-saffron"
                : "text-saffron-dark group-hover:text-saffron"
            } ${isSwitching ? "animate-spin" : ""}`}
          />
          {isTranslated && !isSwitching && (
            <span
              title={`Terjemahan aktif: ${activeOption.nativeLabel}`}
              className="absolute -end-1 -top-1 h-2 w-2 rounded-full border border-alabaster bg-saffron"
            />
          )}
        </span>
        <span className="min-w-[2.2rem] text-center">
          {isSwitching ? "..." : activeOption.shortCode}
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            open ? "rotate-180 text-saffron" : "text-navy/50"
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="listbox"
            aria-label="Pilihan Bahasa"
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.22, ease: EDITORIAL_EASE }}
            className="absolute end-0 z-50 mt-2 w-64 origin-top-right overflow-hidden rounded-sm border border-navy/15 bg-alabaster shadow-xl shadow-navy/15 ring-1 ring-black/5"
          >
            {/* Active Translation Status Header */}
            <div className="flex items-center justify-between gap-2 border-b border-hairline bg-sand/80 px-3.5 py-2.5">
              <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-navy/70">
                {isSwitching
                  ? "Menerjemahkan..."
                  : isTranslated
                    ? `Aktif: ${activeOption.nativeLabel}`
                    : "Bahasa Default (ID)"}
              </p>
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                  isTranslated
                    ? "bg-saffron/25 text-navy"
                    : "bg-navy/10 text-navy/70"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isTranslated ? "bg-saffron-dark" : "bg-emerald-600"
                  }`}
                />
                {isTranslated ? "Translated" : "Original"}
              </span>
            </div>

            <ul className="divide-y divide-hairline/60 py-1">
              {LANGUAGES.map((lang) => {
                const isActive = lang.code === currentLang;
                return (
                  <li key={lang.code}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      onClick={() => handleChoose(lang.code)}
                      className={`flex w-full items-center justify-between gap-3 px-3.5 py-2.5 text-start transition-colors ${
                        isActive
                          ? "bg-navy text-alabaster"
                          : "text-navy hover:bg-sand/80"
                      }`}
                    >
                      <div className="flex min-w-0 items-center gap-2.5">
                        <span
                          className={`inline-flex w-12 shrink-0 items-center justify-center rounded-sm border px-1.5 py-0.5 text-[10px] font-bold tracking-wider ${
                            isActive
                              ? "border-saffron/60 bg-saffron/20 text-saffron"
                              : "border-navy/12 bg-sand/70 text-navy/80"
                          }`}
                        >
                          {lang.shortCode}
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-[13px] font-medium leading-tight">
                            {lang.nativeLabel}
                          </p>
                          <p
                            className={`mt-0.5 truncate text-[10px] leading-tight ${
                              isActive
                                ? "text-alabaster/70"
                                : "text-slate-editorial"
                            }`}
                          >
                            {lang.subLabel}
                          </p>
                        </div>
                      </div>
                      {isActive && (
                        <Check className="h-4 w-4 shrink-0 text-saffron" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
