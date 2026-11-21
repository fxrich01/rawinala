"use client";

import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  MapPin,
  X,
} from "lucide-react";
import { GalleryItem } from "@/data/siteData";
import { EditorialPhotoPlaceholder } from "@/components/EditorialPhotoPlaceholder";
import { ProtectedText } from "@/components/ProtectedText";
import { EDITORIAL_EASE } from "@/components/MotionPrimitives";

interface EditorialLightboxProps {
  items: GalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

/**
 * Editorial-grade interactive Lightbox Modal with Prev/Next controls,
 * full chronology narrative, and Esc / ArrowLeft / ArrowRight keyboard navigation.
 */
export function EditorialLightbox({
  items,
  activeIndex,
  onClose,
  onNavigate,
}: EditorialLightboxProps) {
  const isOpen =
    activeIndex !== null && activeIndex >= 0 && activeIndex < items.length;
  const currentItem = isOpen ? items[activeIndex] : null;
  const total = items.length;

  useEffect(() => {
    if (!isOpen || activeIndex === null) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        onNavigate((activeIndex - 1 + total) % total);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        onNavigate((activeIndex + 1) % total);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, activeIndex, total, onClose, onNavigate]);

  const handlePrev = () => {
    if (activeIndex === null) return;
    onNavigate((activeIndex - 1 + total) % total);
  };

  const handleNext = () => {
    if (activeIndex === null) return;
    onNavigate((activeIndex + 1) % total);
  };

  return (
    <AnimatePresence>
      {isOpen && currentItem && activeIndex !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#06101E]/88 p-3 backdrop-blur-md sm:p-6"
          onClick={onClose}
        >
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.97 }}
            transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-sm border border-saffron/45 bg-alabaster shadow-2xl shadow-black/40"
          >
            {/* Top Modal Bar */}
            <div className="flex items-center justify-between gap-4 border-b border-hairline bg-navy px-5 py-3.5 text-alabaster sm:px-7">
              <div className="flex flex-wrap items-center gap-2.5 text-xs">
                <span className="rounded-sm bg-saffron px-2 py-0.5 text-[10px] font-bold tracking-[0.16em] uppercase text-navy">
                  {currentItem.album}
                </span>
                <span className="notranslate font-mono text-[11px] text-alabaster/70" translate="no">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(total).padStart(2, "0")}
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup lightbox (Esc)"
                className="inline-flex h-8 w-8 items-center justify-center rounded-sm border border-alabaster/20 text-alabaster/80 transition-colors hover:border-saffron hover:bg-saffron hover:text-navy"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto p-5 sm:p-8">
              <EditorialPhotoPlaceholder
                title={currentItem.title}
                ratio="16:10"
                resolution={currentItem.resolution}
                badge={`${currentItem.date} • ${currentItem.location}`}
                tone={currentItem.tone}
                caption={currentItem.caption}
              />

              {/* Metadata & Full Chronology */}
              <div className="mt-6">
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-saffron-dark">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {currentItem.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {currentItem.location}
                  </span>
                </div>

                <h3 className="font-editorial mt-2.5 text-2xl font-semibold leading-snug text-navy sm:text-3xl">
                  <ProtectedText text={currentItem.title} />
                </h3>

                <div className="mt-4 rounded-sm border-s-2 border-saffron bg-sand/70 p-4 sm:p-5">
                  <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-terracotta">
                    Kronologi &amp; Catatan Dokumentasi
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/90">
                    <ProtectedText text={currentItem.chronology} />
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Navigation Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-hairline bg-sand/75 px-5 py-3.5 sm:px-7">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Dokumentasi Sebelumnya"
                  className="inline-flex items-center gap-1.5 rounded-sm border border-navy/20 bg-alabaster px-3.5 py-2 text-xs font-semibold text-navy transition-colors hover:border-saffron hover:bg-navy hover:text-alabaster"
                >
                  <ChevronLeft className="rtl-flip h-4 w-4" />
                  <span>Sebelumnya</span>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Dokumentasi Berikutnya"
                  className="inline-flex items-center gap-1.5 rounded-sm border border-navy/20 bg-alabaster px-3.5 py-2 text-xs font-semibold text-navy transition-colors hover:border-saffron hover:bg-navy hover:text-alabaster"
                >
                  <span>Berikutnya</span>
                  <ChevronRight className="rtl-flip h-4 w-4" />
                </button>
              </div>

              <p className="hidden text-[11px] text-slate-editorial sm:block">
                Gunakan tombol panah{" "}
                <kbd className="notranslate rounded border border-navy/20 bg-alabaster px-1.5 py-0.5 font-mono text-[10px] text-navy">
                  ←
                </kbd>{" "}
                <kbd className="notranslate rounded border border-navy/20 bg-alabaster px-1.5 py-0.5 font-mono text-[10px] text-navy">
                  →
                </kbd>{" "}
                atau{" "}
                <kbd className="notranslate rounded border border-navy/20 bg-alabaster px-1.5 py-0.5 font-mono text-[10px] text-navy">
                  Esc
                </kbd>{" "}
                untuk navigasi cepat
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
