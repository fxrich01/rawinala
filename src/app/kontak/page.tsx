import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import {
  Clock,
  ExternalLink,
  Instagram,
  Mail,
  MapPin,
  Newspaper,
  Phone,
} from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { KontakFormClient } from "@/components/KontakFormClient";
import { OfficialOrgName } from "@/components/ProtectedText";

export const metadata: Metadata = {
  title: "Kolaborasi & Kontak",
  description:
    "Formulir korespondensi resmi Rawinala Haridra Global untuk undangan dialog lintas iman, permohonan audiensi, kemitraan kemanusiaan, dan pertanyaan media.",
};

export default function KontakPage() {
  return (
    <div className="bg-alabaster">
      {/* Editorial Header */}
      <section className="border-b border-hairline bg-navy py-14 text-alabaster sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Kolaborasi & Kontak" }]}
            variant="dark"
          />
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saffron">
              Sekretariat Pusat &amp; Protokol Korespondensi
            </p>
            <h1 className="font-editorial mt-3 text-4xl font-semibold leading-tight text-alabaster sm:text-5xl lg:text-[54px]">
              Kolaborasi &amp; Kontak Resmi
            </h1>
            <p className="mt-5 text-base leading-relaxed text-alabaster/80">
              Hubungi Sekretariat Pusat{" "}
              <OfficialOrgName className="font-semibold text-saffron" /> untuk
              undangan dialog lintas iman, permohonan audiensi kelembagaan,
              kemitraan aksi kemanusiaan, maupun pertanyaan rekan pers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="bg-alabaster py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            {/* Left: Structured Correspondence Form */}
            <div className="lg:col-span-7">
              <KontakFormClient />
            </div>

            {/* Right: Secretariat & Official Channels */}
            <aside className="space-y-6 lg:col-span-5">
              {/* Secretariat Card */}
              <div className="rounded-sm border border-navy/15 bg-sand/70 p-7 sm:p-8">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-terracotta">
                  Sekretariat Pusat
                </p>
                <h2 className="font-editorial mt-1.5 text-2xl font-semibold text-navy">
                  <OfficialOrgName />
                </h2>

                <ul className="mt-6 space-y-5 text-sm text-ink/90">
                  <li className="flex items-start gap-3.5">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-saffron-dark" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-navy">
                        Alamat Sekretariat
                      </p>
                      <p className="mt-1 leading-relaxed text-slate-editorial">
                        Kawasan Menteng, Jakarta Pusat, DKI Jakarta 10310,
                        Republik Indonesia
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-saffron-dark" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-navy">
                        Surat Elektronik Resmi
                      </p>
                      <p className="mt-1 text-slate-editorial">
                        Umum &amp; Audiensi:{" "}
                        <a
                          href="mailto:sekretariat@rawinalaharidra.org"
                          className="notranslate font-semibold text-navy hover:text-terracotta"
                          translate="no"
                        >
                          sekretariat@rawinalaharidra.org
                        </a>
                      </p>
                      <p className="mt-0.5 text-slate-editorial">
                        Humas &amp; Pers:{" "}
                        <a
                          href="mailto:pers@rawinalaharidra.org"
                          className="notranslate font-semibold text-navy hover:text-terracotta"
                          translate="no"
                        >
                          pers@rawinalaharidra.org
                        </a>
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-saffron-dark" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-navy">
                        Saluran Telepon Sekretariat
                      </p>
                      <p
                        className="notranslate mt-1 font-medium text-slate-editorial"
                        translate="no"
                      >
                        +62 21 5090 2026
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-saffron-dark" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-navy">
                        Jam Layanan Kesekretariatan
                      </p>
                      <p className="mt-1 text-slate-editorial">
                        Senin – Jumat, 09.00 – 17.00 WIB (Kunjungan tatap muka
                        melalui janji temu resmi)
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Official Digital Channels */}
              <div className="rounded-sm border border-saffron/45 bg-navy p-7 text-alabaster sm:p-8">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-saffron">
                  Kanal Publikasi &amp; Jejaring Resmi
                </p>
                <h3 className="font-editorial mt-2 text-2xl font-semibold">
                  Terhubung dengan Kami
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-alabaster/75">
                  Pastikan Anda mengikuti informasi resmi organisasi hanya
                  melalui situs ini dan kanal terverifikasi berikut:
                </p>

                <div className="mt-5 space-y-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-sm border border-alabaster/15 bg-navy-soft/80 px-4 py-3 text-xs font-semibold text-alabaster transition-colors hover:border-saffron hover:text-saffron"
                  >
                    <span className="inline-flex items-center gap-2.5">
                      <Instagram className="h-4 w-4 text-saffron" />
                      <span className="notranslate" translate="no">
                        Instagram @rawinalaharidraglobal
                      </span>
                    </span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  <Link
                    href="/kabar-pers"
                    className="flex items-center justify-between rounded-sm border border-alabaster/15 bg-navy-soft/80 px-4 py-3 text-xs font-semibold text-alabaster transition-colors hover:border-saffron hover:text-saffron"
                  >
                    <span className="inline-flex items-center gap-2.5">
                      <Newspaper className="h-4 w-4 text-saffron" />
                      <span>Ruang Pers &amp; Siaran Resmi</span>
                    </span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
