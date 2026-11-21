import React from "react";
import { Camera } from "lucide-react";
import { ProtectedText } from "@/components/ProtectedText";

export type AspectRatioKey = "16:9" | "16:10" | "4:3" | "3:4" | "4:5" | "1:1";

const RATIO_CLASS_MAP: Record<AspectRatioKey, string> = {
  "16:9": "aspect-[16/9]",
  "16:10": "aspect-[16/10]",
  "4:3": "aspect-[4/3]",
  "3:4": "aspect-[3/4]",
  "4:5": "aspect-[4/5]",
  "1:1": "aspect-square",
};

interface EditorialPhotoPlaceholderProps {
  title: string;
  ratio: AspectRatioKey;
  resolution: string;
  caption?: string;
  tone?: "navy" | "sand" | "terracotta";
  badge?: string;
  compact?: boolean;
  className?: string;
}

/**
 * Museum-grade architectural photo placeholder with clear ideal aspect ratio
 * and resolution guide so authentic photography can be swapped in seamlessly.
 */
export function EditorialPhotoPlaceholder({
  title,
  ratio,
  resolution,
  caption,
  tone = "navy",
  badge,
  compact = false,
  className = "",
}: EditorialPhotoPlaceholderProps) {
  const toneStyles = {
    navy: {
      bg: "bg-[#0B192C] bg-gradient-to-br from-[#0E2038] via-[#0B192C] to-[#172C49]",
      border: "border-saffron/35",
      textPrimary: "text-alabaster",
      textMuted: "text-alabaster/75",
      pill: "border-saffron/45 bg-navy/85 text-saffron",
      corner: "border-saffron/70",
      grid: "editorial-grid-dark",
    },
    sand: {
      bg: "bg-[#EAE1D0] bg-gradient-to-br from-[#EFE8DB] via-[#EAE1D0] to-[#DFD4BF]",
      border: "border-navy/15",
      textPrimary: "text-navy",
      textMuted: "text-navy/70",
      pill: "border-navy/15 bg-alabaster/90 text-navy",
      corner: "border-saffron-dark/65",
      grid: "editorial-grain",
    },
    terracotta: {
      bg: "bg-[#2B1A16] bg-gradient-to-br from-[#3F231B] via-[#2B1A16] to-[#1D171A]",
      border: "border-terracotta/50",
      textPrimary: "text-alabaster",
      textMuted: "text-alabaster/75",
      pill: "border-terracotta/55 bg-[#2A1813]/85 text-[#F2C9A2]",
      corner: "border-saffron/60",
      grid: "editorial-grid-dark",
    },
  }[tone];

  return (
    <figure className={`group relative ${className}`}>
      <div
        className={`relative w-full overflow-hidden rounded-sm border ${toneStyles.bg} ${toneStyles.border} ${RATIO_CLASS_MAP[ratio]}`}
      >
        {/* Layered architectural grid texture so gradient background is never overridden */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 ${toneStyles.grid}`}
        />
        {/* Subtle radial glow evoking 'Haridra' golden light */}
        <div
          className="pointer-events-none absolute -top-24 -end-24 h-64 w-64 rounded-full opacity-25 blur-3xl"
          style={{
            background:
              tone === "terracotta"
                ? "radial-gradient(circle, #D49A2A 0%, transparent 70%)"
                : "radial-gradient(circle, #D49A2A 0%, transparent 72%)",
          }}
        />

        {/* Editorial registration corner marks */}
        <span
          className={`pointer-events-none absolute start-3.5 top-3.5 h-3.5 w-3.5 border-s border-t ${toneStyles.corner}`}
        />
        <span
          className={`pointer-events-none absolute end-3.5 top-3.5 h-3.5 w-3.5 border-e border-t ${toneStyles.corner}`}
        />
        <span
          className={`pointer-events-none absolute start-3.5 bottom-3.5 h-3.5 w-3.5 border-s border-b ${toneStyles.corner}`}
        />
        <span
          className={`pointer-events-none absolute end-3.5 bottom-3.5 h-3.5 w-3.5 border-e border-b ${toneStyles.corner}`}
        />

        {/* Inner architectural frame content */}
        <div className="relative z-10 flex h-full w-full flex-col justify-between p-5 sm:p-7">
          {/* Top metadata bar */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            {badge ? (
              <span
                className={`inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] uppercase ${toneStyles.pill}`}
              >
                {badge}
              </span>
            ) : (
              <span
                className={`inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase ${toneStyles.textMuted}`}
              >
                <Camera className="h-3.5 w-3.5 text-saffron" />
                Ruang Dokumentasi Foto
              </span>
            )}

            <span
              className={`notranslate inline-flex items-center rounded-sm border px-2.5 py-0.5 text-[10px] font-semibold tracking-wider ${toneStyles.pill}`}
              translate="no"
            >
              Rasio {ratio} • {resolution}
            </span>
          </div>

          {/* Center watermark motif & title */}
          <div className="my-auto py-3 text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-saffron/35 bg-saffron/10">
              <Camera className="h-4 w-4 text-saffron" />
            </div>
            <p
              className={`font-editorial mx-auto max-w-md font-medium leading-snug ${
                compact ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
              } ${toneStyles.textPrimary}`}
            >
              <ProtectedText text={title} />
            </p>
            {!compact && caption && (
              <p
                className={`mx-auto mt-2 max-w-md text-xs leading-relaxed sm:text-[13px] ${toneStyles.textMuted}`}
              >
                <ProtectedText text={caption} />
              </p>
            )}
          </div>

          {/* Bottom hairline guide */}
          <div className="flex items-center justify-between border-t border-current/10 pt-2.5 text-[10px] tracking-[0.14em] uppercase opacity-70">
            <span className={toneStyles.textMuted}>
              Siap Diisi Dokumentasi Resmi
            </span>
            <span className={`notranslate font-semibold ${toneStyles.textPrimary}`} translate="no">
              RHG ARCHIVE
            </span>
          </div>
        </div>
      </div>

      {compact && caption && (
        <figcaption className="mt-2.5 text-xs leading-relaxed text-slate-editorial">
          <ProtectedText text={caption} />
        </figcaption>
      )}
    </figure>
  );
}
