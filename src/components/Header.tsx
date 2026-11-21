"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/siteData";
import { BrandCrest } from "@/components/BrandCrest";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { OfficialOrgName } from "@/components/ProtectedText";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const normalizedPath =
    (pathname || "/").replace(/\/+$/, "") || "/";

  const isNavActive = (href: string) => {
    if (href === "/") return normalizedPath === "/";
    return normalizedPath === href || normalizedPath.startsWith(`${href}/`);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-navy/10 bg-alabaster/95 shadow-sm shadow-navy/5 backdrop-blur-md"
          : "border-b border-hairline/80 bg-alabaster/90 backdrop-blur-sm"
      }`}
    >
      {/* Top sovereign institutional micro-bar */}
      <div className="bg-navy text-alabaster">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-1.5 text-[11px] sm:px-6 lg:px-8">
          <p className="flex items-center gap-2 text-alabaster/80">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-saffron" />
            <span className="truncate">
              Terang Bagi Kemanusiaan, Kekuatan Bagi Indonesia
            </span>
          </p>
          <p className="hidden items-center gap-3 text-alabaster/65 sm:flex">
            <span>Jakarta, Indonesia</span>
            <span aria-hidden="true" className="text-saffron/60">
              •
            </span>
            <span>Situs Resmi Organisasi</span>
          </p>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[76px] items-center justify-between gap-4 py-2.5">
          {/* Brand Lockup */}
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3 focus:outline-none"
          >
            <BrandCrest
              variant="dark"
              className="h-10 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-12"
            />
            <div className="min-w-0 border-s border-hairline ps-3">
              <div className="font-editorial text-base font-bold leading-none tracking-[0.06em] text-navy sm:text-lg lg:text-[19px]">
                <OfficialOrgName uppercase />
              </div>
              <p className="mt-1 truncate text-[10px] font-medium tracking-[0.14em] uppercase text-slate-editorial">
                Organisasi Kemasyarakatan &amp; Sosial
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links (Resilient flex-wrap & breathing room for 6 languages) */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden flex-1 items-center justify-center lg:flex"
          >
            <ul className="flex flex-wrap items-center justify-center gap-x-0.5 gap-y-1 xl:gap-x-1.5">
              {NAV_ITEMS.map((item) => {
                const active = isNavActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative inline-flex min-w-max items-center px-2.5 py-2 text-[12.5px] font-medium transition-colors duration-200 xl:px-3 xl:text-[13px] ${
                        active
                          ? "text-navy font-semibold"
                          : "text-navy/70 hover:text-navy"
                      }`}
                    >
                      <span>{item.label}</span>
                      {active && (
                        <span className="absolute inset-x-2.5 bottom-0 h-[2px] bg-saffron xl:inset-x-3" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Controls: Desktop Language Switcher + Mobile Menu Toggle */}
          <div className="flex shrink-0 items-center gap-2.5">
            <div className="hidden lg:block">
              <LanguageSwitcher variant="header" />
            </div>

            <div className="lg:hidden">
              <LanguageSwitcher variant="header" />
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Tutup Menu" : "Buka Menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-navy/15 bg-alabaster text-navy transition-colors hover:border-saffron hover:bg-sand lg:hidden"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-hairline bg-alabaster shadow-xl lg:hidden">
          <div className="mx-auto max-w-7xl space-y-5 px-4 py-5 sm:px-6">
            {/* Language Switcher pinned at top of mobile menu */}
            <div className="rounded-sm border border-hairline bg-sand/60 p-3.5">
              <LanguageSwitcher
                variant="mobile"
                onSelectComplete={() => setMobileOpen(false)}
              />
            </div>

            {/* Mobile Links */}
            <nav aria-label="Navigasi Mobile">
              <ul className="divide-y divide-hairline/70 border-y border-hairline">
                {NAV_ITEMS.map((item) => {
                  const active = isNavActive(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between py-3.5 text-sm font-medium transition-colors ${
                          active
                            ? "font-semibold text-navy"
                            : "text-navy/75 hover:text-navy"
                        }`}
                      >
                        <span>{item.label}</span>
                        {active && (
                          <span className="h-2 w-2 rounded-full bg-saffron" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center justify-between text-xs text-slate-editorial">
              <span>Sekretariat Pusat Jakarta</span>
              <Link
                href="/kontak"
                onClick={() => setMobileOpen(false)}
                className="font-semibold text-terracotta hover:underline"
              >
                Hubungi Kami →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
