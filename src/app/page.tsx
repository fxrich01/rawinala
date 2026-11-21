import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  MapPin,
  Quote,
  Sparkles,
} from "lucide-react";
import { ARTICLES, GALLERY_ITEMS, PILLARS } from "@/data/siteData";
import { EditorialPhotoPlaceholder } from "@/components/EditorialPhotoPlaceholder";
import { FadeUp, RevealRule } from "@/components/MotionPrimitives";
import {
  FounderName,
  MenkoName,
  OfficialOrgName,
  ProtectedText,
} from "@/components/ProtectedText";

export default function HomePage() {
  const featuredArticle = ARTICLES[0];
  const previewGallery = GALLERY_ITEMS.slice(0, 3);

  return (
    <div className="bg-alabaster">
      {/* ===================================================================
          1. EDITORIAL HERO SECTION
          =================================================================== */}
      <section className="relative overflow-hidden border-b border-hairline bg-alabaster editorial-grain">
        {/* Subtle golden radiance accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 end-0 h-[480px] w-[480px] rounded-full opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(212,154,42,0.35) 0%, rgba(250,248,243,0) 70%)",
          }}
        />

        <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Editorial Copy Column */}
            <div className="lg:col-span-6">
              <FadeUp>
                <div className="inline-flex flex-wrap items-center gap-2.5 rounded-sm border border-saffron/45 bg-sand/80 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-navy">
                  <Sparkles className="h-3.5 w-3.5 text-saffron-dark" />
                  <span>
                    <OfficialOrgName uppercase /> • Indonesia
                  </span>
                </div>

                <h1 className="font-editorial mt-7 text-4xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[58px]">
                  Terang Bagi Kemanusiaan,{" "}
                  <span className="italic text-terracotta">
                    Kekuatan Bagi Indonesia
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-editorial sm:text-[17px]">
                  <OfficialOrgName className="font-semibold text-navy" /> hadir
                  sebagai ruang pengabdian kemasyarakatan yang menjunjung tinggi
                  dialog lintas agama, solidaritas kemanusiaan tanpa sekat, dan
                  sinergi strategis demi kokohnya persatuan Negara Kesatuan
                  Republik Indonesia.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3.5">
                  <Link
                    href="/pilar-gerakan"
                    className="inline-flex items-center gap-2.5 rounded-sm bg-navy px-6 py-3.5 text-sm font-semibold text-alabaster transition-all duration-200 hover:bg-navy-soft hover:shadow-lg hover:shadow-navy/15"
                  >
                    <span>Jelajahi Pilar Gerakan</span>
                    <ArrowRight className="rtl-flip h-4 w-4 text-saffron" />
                  </Link>
                  <Link
                    href="/tentang-kami"
                    className="inline-flex items-center gap-2 rounded-sm border border-navy/25 bg-alabaster px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-saffron hover:bg-sand/70"
                  >
                    <span>Filosofi &amp; Kepemimpinan</span>
                  </Link>
                </div>
              </FadeUp>

              {/* Sovereign Archival Metadata Strip */}
              <FadeUp delay={0.12}>
                <div className="mt-11 grid grid-cols-1 gap-4 border-t border-hairline pt-6 sm:grid-cols-3">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-saffron-dark">
                      Pendiri Organisasi
                    </p>
                    <p className="mt-1 text-sm font-semibold text-navy">
                      <FounderName />
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-saffron-dark">
                      Tonggak Kelembagaan
                    </p>
                    <p className="mt-1 text-sm font-semibold text-navy">
                      Pelantikan Nov 2026
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-saffron-dark">
                      Mandat Utama
                    </p>
                    <p className="mt-1 text-sm font-semibold text-navy">
                      Dialog • Sosial • NKRI
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Cinematic Editorial Hero Visual Frame */}
            <div className="lg:col-span-6">
              <FadeUp delay={0.15}>
                <div className="relative">
                  {/* Subtle decorative offset heritage border */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-3 -end-3 hidden h-full w-full rounded-sm border border-saffron/45 sm:block"
                  />
                  <EditorialPhotoPlaceholder
                    title="Frame Visual Utama: Sinergi Kebangsaan & Kemanusiaan Rawinala Haridra Global"
                    ratio="16:10"
                    resolution="1920 × 1200 px"
                    badge="Visual Utama Beranda"
                    tone="navy"
                    caption="Rekomendasi foto sinematik beresolusi tinggi: momen kebersamaan lintas agama, prosesi pelantikan pengurus, atau audiensi kenegaraan."
                  />
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. SOROTAN UTAMA (FEATURED MILESTONE — NOVEMBER 2026)
          =================================================================== */}
      <section className="relative bg-navy py-16 text-alabaster sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-alabaster/15 pb-6">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saffron">
                  Sorotan Utama • Tonggak Kenegaraan
                </p>
                <h2 className="font-editorial mt-2 text-3xl font-semibold text-alabaster sm:text-4xl">
                  Audiensi Strategis &amp; Pelantikan Pengurus
                </h2>
              </div>
              <Link
                href="/kabar-pers"
                className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.14em] uppercase text-saffron transition-colors hover:text-alabaster"
              >
                <span>Semua Kabar &amp; Ruang Pers</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <article className="mt-10 grid grid-cols-1 items-center gap-8 rounded-sm border border-saffron/30 bg-navy-soft/70 p-6 sm:p-8 lg:grid-cols-12 lg:gap-10 lg:p-10">
              {/* Milestone Visual */}
              <div className="lg:col-span-6">
                <EditorialPhotoPlaceholder
                  title="Audiensi Strategis Bersama Menko Polkam Jenderal (Purn.) Dudung Abdurachman"
                  ratio="16:10"
                  resolution="1920 × 1200 px"
                  badge="Audiensi Kenegaraan • Nov 2026"
                  tone="terracotta"
                  caption="Foto resmi delegasi pengurus pusat Rawinala Haridra Global bersama Menko Polkam RI di Jakarta."
                />
              </div>

              {/* Milestone Narrative */}
              <div className="lg:col-span-6">
                <div className="flex flex-wrap items-center gap-3 text-xs text-alabaster/75">
                  <span className="inline-flex items-center gap-1.5 rounded-sm bg-saffron/20 px-2.5 py-1 font-semibold text-saffron">
                    {featuredArticle.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-saffron" />
                    {featuredArticle.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-saffron" />
                    {featuredArticle.location}
                  </span>
                </div>

                <h3 className="font-editorial mt-4 text-2xl font-semibold leading-snug text-alabaster sm:text-3xl">
                  <Link
                    href={`/kabar-pers/${featuredArticle.slug}`}
                    className="transition-colors hover:text-saffron"
                  >
                    <ProtectedText text={featuredArticle.title} />
                  </Link>
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-alabaster/80 sm:text-[15px]">
                  <ProtectedText text={featuredArticle.excerpt} />
                </p>

                {/* Highlight Quote Excerpt */}
                <blockquote className="mt-6 border-s-2 border-saffron ps-4 text-sm italic leading-relaxed text-alabaster/85">
                  &ldquo;Sinergi masyarakat sipil dalam merawat dialog lintas
                  iman dan solidaritas kemanusiaan merupakan modal sosial
                  penting bagi ketahanan nasional.&rdquo;
                  <footer className="mt-2 not-italic text-xs font-semibold text-saffron">
                    — Konteks Audiensi Bersama <MenkoName />
                  </footer>
                </blockquote>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/kabar-pers/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 rounded-sm bg-saffron px-5 py-3 text-xs font-bold tracking-wider uppercase text-navy transition-colors hover:bg-alabaster"
                  >
                    <span>Baca Liputan Lengkap</span>
                    <ArrowRight className="rtl-flip h-4 w-4" />
                  </Link>
                  <Link
                    href="/tentang-kami#kepemimpinan"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-alabaster/80 transition-colors hover:text-saffron"
                  >
                    <span>Lihat Dewan Pengurus Nov 2026</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          </FadeUp>
        </div>
      </section>

      {/* ===================================================================
          3. RINGKASAN 3 PILAR GERAKAN (INTERACTIVE EDITORIAL CARDS)
          =================================================================== */}
      <section className="border-b border-hairline bg-sand py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-terracotta">
                  Mandat &amp; Arah Pengabdian
                </p>
                <h2 className="font-editorial mt-2 text-3xl font-semibold leading-tight text-navy sm:text-5xl">
                  Tiga Pilar Gerakan{" "}
                  <OfficialOrgName className="italic text-saffron-dark" />
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-sm leading-relaxed text-slate-editorial sm:text-[15px]">
                  Setiap langkah kami dirancang untuk menghadirkan manfaat yang
                  terukur, menyatukan keragaman bangsa, serta menjunjung tinggi
                  martabat kemanusiaan di Indonesia dan panggung global.
                </p>
              </div>
            </div>
            <RevealRule className="mt-8" />
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PILLARS.map((pillar, idx) => (
              <FadeUp key={pillar.id} delay={idx * 0.08}>
                <Link
                  href={`/pilar-gerakan#${pillar.id}`}
                  className="group flex h-full flex-col justify-between rounded-sm border border-navy/12 bg-alabaster p-7 transition-all duration-300 hover:-translate-y-1 hover:border-saffron hover:shadow-xl hover:shadow-navy/8 sm:p-8"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-hairline pb-5">
                      <span className="font-editorial text-4xl font-semibold text-saffron-dark">
                        {pillar.index}
                      </span>
                      <span className="rounded-sm border border-navy/10 bg-sand/70 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] uppercase text-navy/70">
                        {pillar.englishSubtitle}
                      </span>
                    </div>

                    <h3 className="font-editorial mt-6 text-2xl font-semibold leading-snug text-navy transition-colors group-hover:text-terracotta">
                      {pillar.title}
                    </h3>

                    <p className="mt-2 text-xs font-semibold tracking-wide text-saffron-dark">
                      {pillar.tagline}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-slate-editorial">
                      <ProtectedText text={pillar.summary} />
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-hairline/80 pt-5 text-xs font-semibold tracking-wider uppercase text-navy">
                    <span>Pelajari Program</span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-navy/15 transition-all duration-300 group-hover:border-saffron group-hover:bg-navy group-hover:text-saffron">
                      <ArrowRight className="rtl-flip h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          4. MANIFESTO PENDIRI & CUPLIKAN DOKUMENTASI LAPANGAN
          =================================================================== */}
      <section className="bg-alabaster py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Founder's Manifesto */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <FadeUp>
                <EditorialPhotoPlaceholder
                  title="Potret Resmi Pendiri: Fu Kwet Khiong"
                  ratio="3:4"
                  resolution="900 × 1200 px"
                  badge="Pendiri Organisasi"
                  tone="sand"
                  caption="Tempatkan potret editorial resmi pendiri Rawinala Haridra Global dengan pencahayaan hangat dan berwibawa."
                />
              </FadeUp>
            </div>

            <div className="lg:col-span-7">
              <FadeUp delay={0.1}>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saffron-dark">
                  Manifesto Pendiri
                </p>
                <Quote className="mt-4 h-10 w-10 text-saffron/60" />

                <blockquote className="font-editorial mt-4 text-2xl font-medium italic leading-snug text-navy sm:text-3xl lg:text-[34px]">
                  &ldquo;Di tengah dunia yang kerap diuji oleh sekat perbedaan,
                  kita terpanggil menyalakan pelita. Bukan sekadar cahaya yang
                  menerangi diri sendiri, melainkan terang yang menghangatkan
                  kemanusiaan dan memperkokoh rumah besar Indonesia.&rdquo;
                </blockquote>

                <p className="mt-6 text-sm leading-relaxed text-slate-editorial sm:text-[15px]">
                  Berangkat dari keyakinan bahwa kerukunan adalah karya nyata
                  yang harus terus dirawat,{" "}
                  <FounderName className="font-semibold text-navy" /> mendirikan{" "}
                  <OfficialOrgName className="font-semibold text-navy" /> sebagai
                  wadah perjumpaan lintas agama, penggerak aksi sosial, serta
                  mitra konstruktif negara dalam menjaga keutuhan bangsa.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6">
                  <div>
                    <p className="font-editorial text-2xl font-semibold text-navy">
                      <FounderName />
                    </p>
                    <p className="text-xs font-medium tracking-wider uppercase text-slate-editorial">
                      Pendiri <OfficialOrgName />
                    </p>
                  </div>

                  <Link
                    href="/tentang-kami#kepemimpinan"
                    className="inline-flex items-center gap-2 rounded-sm border border-navy/20 bg-sand/60 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-navy transition-colors hover:border-saffron hover:bg-navy hover:text-alabaster"
                  >
                    <span>Profil Lengkap &amp; Pengurus</span>
                    <ArrowRight className="rtl-flip h-3.5 w-3.5" />
                  </Link>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* Field Documentation Strip */}
          <div className="mt-20 border-t border-hairline pt-16 sm:mt-24">
            <FadeUp>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-terracotta">
                    Arsip Visual &amp; Jejak Lapangan
                  </p>
                  <h2 className="font-editorial mt-2 text-3xl font-semibold text-navy sm:text-4xl">
                    Cuplikan Dokumentasi Kegiatan
                  </h2>
                </div>
                <Link
                  href="/galeri"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-navy transition-colors hover:text-terracotta"
                >
                  <span>Buka Galeri Lengkap &amp; Instagram</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeUp>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {previewGallery.map((item, idx) => (
                <FadeUp key={item.id} delay={idx * 0.08}>
                  <Link
                    href="/galeri"
                    className="group block rounded-sm border border-hairline bg-sand/40 p-4 transition-all duration-300 hover:border-saffron hover:bg-sand/80"
                  >
                    <EditorialPhotoPlaceholder
                      title={item.title}
                      ratio="4:3"
                      resolution={item.resolution}
                      badge={item.album}
                      tone={item.tone}
                      compact
                    />
                    <div className="mt-4">
                      <p className="text-[11px] font-semibold tracking-wider uppercase text-saffron-dark">
                        {item.date} • {item.location}
                      </p>
                      <h3 className="font-editorial mt-1.5 text-xl font-semibold leading-snug text-navy group-hover:text-terracotta">
                        <ProtectedText text={item.title} />
                      </h3>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Official Correspondence Invitation Band */}
          <FadeUp delay={0.1}>
            <div className="mt-20 rounded-sm border border-saffron/40 bg-sand p-8 sm:p-12">
              <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                <div className="max-w-2xl">
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-terracotta">
                    Kolaborasi &amp; Korespondensi Resmi
                  </p>
                  <h2 className="font-editorial mt-2 text-3xl font-semibold text-navy sm:text-4xl">
                    Mari Berjalan Bersama Merawat Harmoni Nusantara
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-editorial sm:text-[15px]">
                    Sekretariat <OfficialOrgName /> membuka pintu bagi undangan
                    dialog lintas iman, permohonan audiensi kelembagaan,
                    kemitraan aksi kemanusiaan, serta korespondensi pers.
                  </p>
                </div>
                <Link
                  href="/kontak"
                  className="inline-flex shrink-0 items-center gap-2.5 rounded-sm bg-navy px-6 py-4 text-xs font-bold tracking-[0.14em] uppercase text-alabaster transition-colors hover:bg-terracotta"
                >
                  <span>Hubungi Sekretariat Resmi</span>
                  <ArrowRight className="rtl-flip h-4 w-4 text-saffron" />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
