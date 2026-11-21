import React from "react";
import { getMediaPath } from "@/lib/mediaPath";

interface BrandCrestProps {
  className?: string;
  variant?: "dark" | "light";
}

/**
 * Official transparent sovereign golden pentagon crest of Rawinala Haridra Global.
 * Uses rich burnished royal gold on light Warm Alabaster surfaces (Header)
 * and radiant champagne-saffron gold on dark Deep Obsidian Navy surfaces (Footer).
 */
export function BrandCrest({
  className = "h-12 w-auto",
  variant = "dark",
}: BrandCrestProps) {
  const src = getMediaPath(
    variant === "light"
      ? "/images/logo-rawinala-light.png"
      : "/images/logo-rawinala.png"
  );

  const shadowClass =
    variant === "light"
      ? "drop-shadow-[0_2px_8px_rgba(212,154,42,0.28)]"
      : "drop-shadow-[0_1px_2px_rgba(11,25,44,0.18)]";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Logo Resmi Rawinala Haridra Global"
      width={377}
      height={418}
      className={`notranslate object-contain select-none ${shadowClass} ${className}`}
      draggable={false}
    />
  );
}
