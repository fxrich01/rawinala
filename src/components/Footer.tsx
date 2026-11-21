import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { BrandCrest } from "@/components/BrandCrest";
import { NAV_ITEMS } from "@/data/siteData";
import { FounderName, OfficialOrgName } from "@/components/ProtectedText";

export function Footer() {
  return (
    <footer className="relative border-t border-saffron/30 bg-navy text-alabaster">
      {/* Subtle architectural top rule */}
      <div className="h-1 w-full bg-gradient-to-r from-navy via-saffron to-terracotta" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Institutional Identity */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-4">
              <BrandCrest variant="light" className="h-16 w-auto shrink-0" />
              <div className="border-s border-alabaster/15 ps-4">
                <div className="font-editorial text-xl font-semibold tracking-[0.06em] text-alabaster">
                  <OfficialOrgName uppercase />
                </div>
                <p className="mt-0.5 text-[11px] tracking-[0.16em] uppercase text-saffron">
                  Terang Bagi Kemanusiaan • Kekuatan Bagi Indonesia
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-alabaster/75">
              Organisasi kemasyarakatan dan sosial yang didirikan oleh{" "}
              <FounderName className="font-medium text-alabaster" /> dengan
              mandat merawat dialog lintas agama, menggerakkan solidaritas
              kemanusiaan lintas latar belakang, dan memperkokoh persatuan
              kebangsaan Indonesia.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-sm border border-saffron/30 bg-navy-soft/80 px-3.5 py-2 text-xs text-alabaster/80">
              <span className="h-2 w-2 rounded-full bg-saffron" />
              <span>Dewan Pengurus Resmi Periode 2026–2031</span>
            </div>
          </div>

          {/* Column 2: Sitemap */}
          <div className="lg:col-span-3">
            <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-saffron">
              Peta Situs
            </h2>
            <ul className="mt-5 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-sm text-alabaster/75 transition-colors hover:text-saffron"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/tentang-kami#kepemimpinan"
                  className="inline-flex items-center gap-1.5 text-sm text-alabaster/75 transition-colors hover:text-saffron"
                >
                  <span>Pendiri &amp; Dewan Pengurus</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Secretariat & Official Channels */}
          <div className="lg:col-span-4">
            <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-saffron">
              Sekretariat &amp; Korespondensi
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-alabaster/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron" />
                <span>
                  Sekretariat Pusat <OfficialOrgName />, Kawasan Menteng,
                  Jakarta Pusat, DKI Jakarta 10310, Republik Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-saffron" />
                <a
                  href="mailto:sekretariat@rawinalaharidra.org"
                  className="notranslate transition-colors hover:text-saffron"
                  translate="no"
                >
                  sekretariat@rawinalaharidra.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-saffron" />
                <span className="notranslate" translate="no">
                  +62 21 5090 2026
                </span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <Link
                href="/kontak"
                className="inline-flex items-center gap-1.5 rounded-sm border border-saffron/60 bg-saffron/15 px-3.5 py-2 text-xs font-semibold text-saffron transition-colors hover:bg-saffron hover:text-navy"
              >
                <span>Ajukan Audiensi &amp; Kolaborasi</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/galeri"
                className="inline-flex items-center gap-1.5 rounded-sm border border-alabaster/20 px-3.5 py-2 text-xs font-medium text-alabaster/80 transition-colors hover:border-alabaster/50 hover:text-alabaster"
              >
                <span>Jejaring Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Protocol Strip */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-alabaster/12 pt-8 text-xs text-alabaster/55 sm:flex-row sm:items-center">
          <p>
            &copy; 2026 <OfficialOrgName uppercase className="text-alabaster/80" />. Seluruh
            hak cipta dilindungi.
          </p>
          <p className="flex flex-wrap items-center gap-3">
            <span>Edisi Resmi 6 Bahasa</span>
            <span aria-hidden="true" className="text-saffron/50">
              •
            </span>
            <span>Dialog • Kemanusiaan • Persatuan</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
