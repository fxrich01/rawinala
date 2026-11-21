import React from "react";

interface BrandCrestProps {
  className?: string;
  variant?: "dark" | "light";
}

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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
  const src =
    variant === "light"
      ? `${BASE_PATH}/images/logo-rawinala-light.png`
      : `${BASE_PATH}/images/logo-rawinala.png`;

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
