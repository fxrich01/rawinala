import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  Quote,
} from "lucide-react";
import { ARTICLES } from "@/data/siteData";
import { Breadcrumb } from "@/components/Breadcrumb";
import { EditorialPhotoPlaceholder } from "@/components/EditorialPhotoPlaceholder";
import { ArticleActions } from "@/components/ArticleActions";
import { OfficialOrgName, ProtectedText } from "@/components/ProtectedText";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Artikel Tidak Ditemukan" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = ARTICLES.filter((a) => a.slug !== article.slug).slice(
    0,
    2
  );

  return (
    <div className="bg-alabaster">
      {/* Editorial Article Header */}
      <section className="border-b border-hairline bg-navy py-12 text-alabaster sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            variant="dark"
            items={[
              { label: "Kabar & Ruang Pers", href: "/kabar-pers" },
              { label: article.category },
            ]}
          />

          <div className="flex flex-wrap items-center gap-3 text-xs text-alabaster/75">
            <span className="rounded-sm bg-saffron px-2.5 py-1 font-bold tracking-wider uppercase text-navy">
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-saffron" />
              {article.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-saffron" />
              {article.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-saffron" />
              {article.readTime}
            </span>
          </div>

          <h1 className="font-editorial mt-5 text-3xl font-semibold leading-tight text-alabaster sm:text-4xl lg:text-[46px]">
            <ProtectedText text={article.title} />
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-alabaster/80">
            <ProtectedText text={article.excerpt} />
          </p>
        </div>
      </section>

      {/* Main Article Body */}
      <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Hero Visual Frame */}
        <EditorialPhotoPlaceholder
          src={article.image}
          title={article.title}
          ratio="16:9"
          badge="Foto Utama Liputan"
          tone="navy"
          illustrationNote="Ilustrasi dokumentasi kegiatan"
          caption={article.heroCaption}
        />

        {/* Utility Action Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y border-hairline py-4">
          <p className="text-xs font-medium text-slate-editorial">
            Biro Publikasi &amp; Humas{" "}
            <OfficialOrgName className="font-semibold text-navy" />
          </p>
          <ArticleActions />
        </div>

        {/* Two-column editorial reading area */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Primary Narrative */}
          <div className="space-y-6 lg:col-span-8">
            <p className="font-editorial text-xl font-medium leading-relaxed text-navy sm:text-2xl">
              <ProtectedText text={article.leadParagraph} />
            </p>

            <div className="space-y-5 text-[15.5px] leading-relaxed text-ink/90">
              {article.bodyParagraphs.map((para, idx) => (
                <p key={idx}>
                  <ProtectedText text={para} />
                </p>
              ))}
            </div>

            {/* Official Appreciation Quotes */}
            <div className="mt-10 space-y-6">
              {article.quotes.map((q, idx) => (
                <blockquote
                  key={idx}
                  className="rounded-sm border-s-4 border-saffron bg-sand/75 p-6 sm:p-8"
                >
                  <Quote className="h-7 w-7 text-saffron-dark/70" />
                  <p className="font-editorial mt-3 text-xl italic leading-snug text-navy sm:text-2xl">
                    &ldquo;
                    <ProtectedText text={q.text} />
                    &rdquo;
                  </p>
                  <footer className="mt-4 border-t border-hairline pt-3">
                    <p className="text-sm font-bold text-navy">
                      <ProtectedText text={q.speaker} />
                    </p>
                    <p className="text-xs text-slate-editorial">
                      <ProtectedText text={q.role} />
                    </p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>

          {/* Editorial Sidebar: Key Takeaways & Press Desk */}
          <aside className="space-y-6 lg:col-span-4">
            <div className="rounded-sm border border-navy/12 bg-sand/65 p-6">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-terracotta">
                Poin Utama Liputan
              </p>
              <ul className="mt-4 space-y-3.5">
                {article.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs leading-relaxed text-navy/90 sm:text-[13px]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-saffron-dark" />
                    <span>
                      <ProtectedText text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-sm border border-saffron/40 bg-navy p-6 text-alabaster">
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-saffron">
                Meja Redaksi &amp; Pers
              </p>
              <p className="font-editorial mt-2 text-xl font-semibold">
                Kebutuhan Wawancara atau Aset Dokumentasi?
              </p>
              <p className="mt-2 text-xs leading-relaxed text-alabaster/75">
                Rekan jurnalis dan lembaga mitra dapat menghubungi sekretariat
                untuk permintaan rilis resmi maupun dokumentasi beresolusi
                tinggi.
              </p>
              <Link
                href="/kontak"
                className="mt-5 inline-flex items-center gap-2 rounded-sm bg-saffron px-4 py-2.5 text-xs font-bold tracking-wider uppercase text-navy transition-colors hover:bg-alabaster"
              >
                <span>Kontak Media Resmi</span>
                <ArrowRight className="rtl-flip h-3.5 w-3.5" />
              </Link>
            </div>
          </aside>
        </div>

        {/* Documentation Gallery inside Article */}
        {article.galleryFrames.length > 0 && (
          <section className="mt-16 border-t border-hairline pt-12">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-saffron-dark">
              Dokumentasi Kegiatan
            </p>
            <h2 className="font-editorial mt-1.5 text-2xl font-semibold text-navy sm:text-3xl">
              Galeri Foto Terkait Liputan
            </h2>

            <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-3">
              {article.galleryFrames.map((frame, idx) => (
                <EditorialPhotoPlaceholder
                  key={frame.title}
                  src={frame.image}
                  title={frame.title}
                  ratio="16:9"
                  badge={`Dokumentasi 0${idx + 1}`}
                  tone={idx === 0 ? "navy" : idx === 1 ? "sand" : "terracotta"}
                  illustrationNote="Ilustrasi dokumentasi kegiatan"
                  caption={frame.caption}
                />
              ))}
            </div>
          </section>
        )}

        {/* Related Articles & Back Link */}
        <section className="mt-16 border-t border-hairline pt-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-editorial text-2xl font-semibold text-navy">
              Publikasi Lainnya
            </h2>
            <Link
              href="/kabar-pers"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-navy hover:text-terracotta"
            >
              <ArrowLeft className="rtl-flip h-3.5 w-3.5" />
              <span>Kembali ke Kabar &amp; Ruang Pers</span>
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/kabar-pers/${rel.slug}`}
                className="group rounded-sm border border-hairline bg-sand/45 p-6 transition-colors hover:border-saffron hover:bg-sand/85"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wider text-saffron-dark">
                  {rel.category} • {rel.date}
                </p>
                <h3 className="font-editorial mt-2 text-xl font-semibold leading-snug text-navy group-hover:text-terracotta">
                  <ProtectedText text={rel.title} />
                </h3>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-editorial">
                  <ProtectedText text={rel.excerpt} />
                </p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
