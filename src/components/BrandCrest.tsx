import React from "react";
import { getMediaPath } from "@/lib/mediaPath";

interface BrandCrestProps {
  className?: string;
  variant?: "dark" | "light";
}

/**
 * Official transparent logo of Rawinala Haridra Global.
 * Automatically adapts between light surfaces (Header / Warm Alabaster)
 * and dark surfaces (Footer / Deep Obsidian Navy) with seamless transparency,
 * and respects Next.js basePath when deployed on GitHub Pages.
 */
export function BrandCrest({
  className = "h-11 w-auto",
  variant = "dark",
}: BrandCrestProps) {
  const src = getMediaPath(
    variant === "light"
      ? "/images/logo-rawinala-light.png"
      : "/images/logo-rawinala.png"
  );

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Logo Resmi Rawinala Haridra Global"
      width={331}
      height={226}
      className={`notranslate object-contain select-none ${className}`}
      draggable={false}
    />
  );
}
