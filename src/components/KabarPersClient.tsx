"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import { ARTICLES, ArticleCategory } from "@/data/siteData";
import { EditorialPhotoPlaceholder } from "@/components/EditorialPhotoPlaceholder";
import { ProtectedText } from "@/components/ProtectedText";

const CATEGORIES: ("Semua" | ArticleCategory)[] = [
  "Semua",
  "Audiensi Kenegaraan",
  "Dialog Lintas Iman",
  "Kemanusiaan",
];

export function KabarPersClient() {
  const [selectedCategory, setSelectedCategory] = useState<
    "Semua" | ArticleCategory
  >("Semua");

  const filteredArticles = useMemo(() => {
    if (selectedCategory === "Semua") return ARTICLES;
    return ARTICLES.filter((a) => a.category === selectedCategory);
  }, [selectedCategory]);

  const leadStory = filteredArticles[0];
  const restStories = filteredArticles.slice(1);

  return (
    <section className="bg-alabaster py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-hairline pb-6">
          <div
            role="tablist"
            aria-label="Filter Kategori Berita"
            className="flex flex-wrap gap-2"
          >
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-sm border px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                    active
                      ? "border-navy bg-navy text-alabaster"
                      : "border-navy/15 bg-sand/50 text-navy hover:border-saffron hover:bg-sand"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
          <p className="text-xs font-medium text-slate-editorial">
            Menampilkan {filteredArticles.length} publikasi resmi
          </p>
        </div>

        {/* Lead / Featured Story */}
        {leadStory && (
          <article className="mt-10 grid grid-cols-1 items-center gap-8 rounded-sm border border-navy/15 bg-sand/60 p-6 sm:p-8 lg:grid-cols-12 lg:p-10">
            <div className="lg:col-span-6">
              <EditorialPhotoPlaceholder
                title={leadStory.title}
                ratio="16:10"
                resolution="1920 × 1200 px"
                badge={leadStory.featured ? "Berita Utama" : leadStory.category}
                tone="navy"
                caption={leadStory.heroCaption}
              />
            </div>

            <div className="lg:col-span-6">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-editorial">
                <span className="rounded-sm bg-navy px-2.5 py-1 text-[11px] font-semibold text-saffron">
                  {leadStory.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-saffron-dark" />
                  {leadStory.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-saffron-dark" />
                  {leadStory.location}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-saffron-dark" />
                  {leadStory.readTime}
                </span>
              </div>

              <h2 className="font-editorial mt-4 text-2xl font-semibold leading-snug text-navy sm:text-3xl lg:text-[34px]">
                <Link
                  href={`/kabar-pers/${leadStory.slug}`}
                  className="transition-colors hover:text-terracotta"
                >
                  <ProtectedText text={leadStory.title} />
                </Link>
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-slate-editorial sm:text-[15px]">
                <ProtectedText text={leadStory.excerpt} />
              </p>

              <div className="mt-6">
                <Link
                  href={`/kabar-pers/${leadStory.slug}`}
                  className="inline-flex items-center gap-2 rounded-sm bg-navy px-5 py-3 text-xs font-bold tracking-wider uppercase text-alabaster transition-colors hover:bg-terracotta"
                >
                  <span>Baca Siaran Pers Lengkap</span>
                  <ArrowRight className="rtl-flip h-4 w-4 text-saffron" />
                </Link>
              </div>
            </div>
          </article>
        )}

        {/* Secondary Dispatches Grid */}
        {restStories.length > 0 && (
          <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {restStories.map((article, idx) => (
              <article
                key={article.slug}
                className="group flex flex-col overflow-hidden rounded-sm border border-hairline bg-alabaster transition-all duration-300 hover:border-saffron hover:shadow-lg hover:shadow-navy/5"
              >
                <div className="p-4 pb-0">
                  <EditorialPhotoPlaceholder
                    title={article.title}
                    ratio="16:10"
                    resolution="1600 × 1000 px"
                    badge={article.category}
                    tone={idx % 2 === 0 ? "sand" : "terracotta"}
                    compact
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 text-[11px] font-medium text-slate-editorial">
                      <span className="font-semibold text-saffron-dark">
                        {article.category}
                      </span>
                      <span>•</span>
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.location}</span>
                    </div>

                    <h3 className="font-editorial mt-3 text-2xl font-semibold leading-snug text-navy transition-colors group-hover:text-terracotta">
                      <Link href={`/kabar-pers/${article.slug}`}>
                        <ProtectedText text={article.title} />
                      </Link>
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-editorial">
                      <ProtectedText text={article.excerpt} />
                    </p>
                  </div>

                  <div className="mt-6 border-t border-hairline pt-4">
                    <Link
                      href={`/kabar-pers/${article.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-navy transition-colors group-hover:text-terracotta"
                    >
                      <span>Selengkapnya</span>
                      <ArrowRight className="rtl-flip h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
