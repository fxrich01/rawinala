"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Landmark,
  MessageCircle,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { OFFICIAL_WHATSAPP_NUMBER } from "@/data/siteData";
import { EDITORIAL_EASE } from "@/components/MotionPrimitives";
import { OfficialOrgName } from "@/components/ProtectedText";

export function FloatingConcierge() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const quickWhatsAppUrl = `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Yth. Sekretariat Pusat RAWINALA HARIDRA GLOBAL,\n\nSaya bermaksud menghubungi sekretariat terkait koordinasi/sinergi kelembagaan. Mohon informasi lebih lanjut.\n\nTerima kasih."
  )}`;

  return (
    <div
      ref={wrapperRef}
      className="fixed bottom-5 end-5 z-40 flex flex-col items-end sm:bottom-6 sm:end-6"
    >
      {/* Animated Popover Quick-Action Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.28, ease: EDITORIAL_EASE }}
            className="mb-3 w-[310px] overflow-hidden rounded-sm border border-saffron/45 bg-alabaster shadow-2xl shadow-navy/25 sm:w-[340px]"
          >
            {/* Panel Header */}
            <div className="bg-navy px-5 py-4 text-alabaster">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-saffron">
                    Layanan Cepat Sekretariat
                  </p>
                  <p className="font-editorial mt-0.5 text-lg font-semibold leading-tight">
                    <OfficialOrgName />
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Tutup panel sekretariat"
                  className="rounded-sm p-1 text-alabaster/70 transition-colors hover:bg-alabaster/10 hover:text-saffron"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-1.5 text-[11px] leading-relaxed text-alabaster/75">
                Pilih jalur korespondensi resmi atau terhubung langsung dengan
                kesekretariatan pusat.
              </p>
            </div>

            {/* 3 Quick-Action Items */}
            <div className="divide-y divide-hairline p-2">
              <Link
                href="/kontak?tujuan=permohonan-audiensi"
                onClick={() => setOpen(false)}
                className="group flex items-start gap-3 rounded-sm p-3 transition-colors hover:bg-sand/85"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-navy text-saffron transition-colors group-hover:bg-terracotta group-hover:text-alabaster">
                  <Landmark className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-navy group-hover:text-terracotta">
                    Ajukan Audiensi
                  </p>
                  <p className="mt-0.5 text-[11px] leading-snug text-slate-editorial">
                    Jadwalkan pertemuan kelembagaan bersama Pengurus atau Pendiri.
                  </p>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-navy/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-terracotta" />
              </Link>

              <Link
                href="/kontak?tujuan=dialog-lintas-iman"
                onClick={() => setOpen(false)}
                className="group flex items-start gap-3 rounded-sm p-3 transition-colors hover:bg-sand/85"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-saffron/20 text-saffron-dark transition-colors group-hover:bg-navy group-hover:text-saffron">
                  <Users className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-navy group-hover:text-terracotta">
                    Undang Dialog Lintas Iman
                  </p>
                  <p className="mt-0.5 text-[11px] leading-snug text-slate-editorial">
                    Sampaikan undangan sarasehan, forum tokoh, atau simposium.
                  </p>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-navy/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-terracotta" />
              </Link>

              <a
                href={quickWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="group flex items-start gap-3 rounded-sm p-3 transition-colors hover:bg-sand/85"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-[#166534]/15 text-[#166534] transition-colors group-hover:bg-[#166534] group-hover:text-alabaster">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-navy group-hover:text-[#166534]">
                    Hubungi via WhatsApp
                  </p>
                  <p className="mt-0.5 text-[11px] leading-snug text-slate-editorial">
                    Koordinasi cepat langsung ke saluran resmi sekretariat.
                  </p>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-navy/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#166534]" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Concierge Pill Trigger */}
      <motion.button
        type="button"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label="Buka menu cepat Sekretariat dan Sinergi"
        className="group inline-flex items-center gap-2.5 rounded-full border border-saffron/65 bg-navy px-4 py-3 text-xs font-semibold tracking-wide text-alabaster shadow-xl shadow-navy/25 transition-colors hover:border-saffron hover:bg-navy-soft sm:px-5"
      >
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-saffron opacity-65" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-saffron" />
        </span>
        <Sparkles className="h-3.5 w-3.5 text-saffron" />
        <span>Sekretariat &amp; Sinergi</span>
      </motion.button>
    </div>
  );
}
