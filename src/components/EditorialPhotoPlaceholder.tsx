import React from "react";
import { ProtectedText } from "@/components/ProtectedText";
import { getMediaPath } from "@/lib/mediaPath";

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
  src?: string;
  title: string;
  ratio: AspectRatioKey;
  resolution?: string;
  caption?: string;
  tone?: "navy" | "sand" | "terracotta";
  badge?: string;
  compact?: boolean;
  illustrationNote?: string;
  showIllustrationNote?: boolean;
  objectPosition?: "center" | "top";
  className?: string;
}

/**
 * Editorial photography frame with smooth hover scale-105 transition,
 * basePath-safe local image resolution (GitHub Pages compatible),
 * warm framing, and a polite editorial illustration credit note.
 */
export function EditorialPhotoPlaceholder({
  src,
  title,
  ratio,
  caption,
  tone = "navy",
  badge,
  compact = false,
  illustrationNote = "Ilustrasi dokumentasi kegiatan",
  showIllustrationNote = true,
  objectPosition = "center",
  className = "",
}: EditorialPhotoPlaceholderProps) {
  const resolvedSrc = src ? getMediaPath(src) : "";
  const isPortrait = ratio === "3:4" || ratio === "4:5";

  const borderClass =
    tone === "navy"
      ? "border-saffron/35"
      : tone === "terracotta"
        ? "border-terracotta/40"
        : "border-navy/15";

  const captionColor =
    tone === "navy" || tone === "terracotta"
      ? "text-slate-editorial"
      : "text-slate-editorial";

  return (
    <figure className={`group relative ${className}`}>
      <div
        className={`relative w-full overflow-hidden rounded-sm border bg-navy/95 shadow-sm ${borderClass} ${RATIO_CLASS_MAP[ratio]}`}
      >
        {resolvedSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={resolvedSrc}
            alt={title}
            loading="lazy"
            decoding="async"
            className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
              objectPosition === "top" || isPortrait
                ? "object-top"
                : "object-center"
            }`}
          />
        )}

        {/* Subtle warm editorial vignette for crisp badge readability */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B192C]/55 via-transparent to-[#0B192C]/25 opacity-85 transition-opacity duration-500 group-hover:opacity-70"
        />

        {/* Top-left editorial category badge */}
        {badge && (
          <div className="pointer-events-none absolute start-3.5 top-3.5 z-10">
            <span className="inline-flex items-center rounded-sm border border-saffron/55 bg-navy/80 px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] uppercase text-alabaster backdrop-blur-sm">
              {badge}
            </span>
          </div>
        )}

        {/* Subtle polite editorial note at bottom-left */}
        {showIllustrationNote && (
          <div className="pointer-events-none absolute bottom-3 start-3.5 z-10 max-w-[75%]">
            <span className="inline-block rounded-sm bg-navy/70 px-2 py-0.5 text-[10px] font-medium tracking-wide text-alabaster/90 backdrop-blur-sm">
              {illustrationNote}
            </span>
          </div>
        )}
      </div>

      {!compact && caption && (
        <figcaption
          className={`mt-2.5 text-xs leading-relaxed ${captionColor}`}
        >
          <ProtectedText text={caption} />
        </figcaption>
      )}
    </figure>
  );
}

export const EditorialPhoto = EditorialPhotoPlaceholder;
