"use client";

import React, { useMemo, useState } from "react";
import {
  Calendar,
  ExternalLink,
  Instagram,
  MapPin,
  Maximize2,
  X,
} from "lucide-react";
import {
  GALLERY_ALBUMS,
  GALLERY_ITEMS,
  GalleryAlbum,
  GalleryItem,
  INSTAGRAM_POSTS,
} from "@/data/siteData";
import { EditorialPhotoPlaceholder } from "@/components/EditorialPhotoPlaceholder";
import { OfficialOrgName, ProtectedText } from "@/components/ProtectedText";

export function GaleriClient() {
  const [selectedAlbum, setSelectedAlbum] = useState<
    "Semua Album" | GalleryAlbum
  >("Semua Album");
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedAlbum === "Semua Album") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.album === selectedAlbum);
  }, [selectedAlbum]);

  return (
    <>
      {/* =================================================================
          1. CURATED VISUAL ARCHIVE BY ALBUM
          ================================================================= */}
      <section className="border-b border-hairline bg-alabaster py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Album Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-hairline pb-6">
            <div
              role="tablist"
              aria-label="Filter Album Dokumentasi"
              className="flex flex-wrap gap-2"
            >
              {GALLERY_ALBUMS.map((album) => {
                const active = selectedAlbum === album;
                return (
                  <button
                    key={album}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedAlbum(album)}
                    className={`rounded-sm border px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                      active
                        ? "border-navy bg-navy text-alabaster"
                        : "border-navy/15 bg-sand/50 text-navy hover:border-saffron hover:bg-sand"
                    }`}
                  >
                    {album}
                  </button>
                );
              })}
            </div>
            <p className="text-xs font-medium text-slate-editorial">
              {filteredItems.length} arsip dokumentasi
            </p>
          </div>

          {/* Curated Archive Grid */}
          <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col rounded-sm border border-hairline bg-sand/35 p-4 transition-all duration-300 hover:border-saffron hover:bg-sand/75"
              >
                <div className="relative">
                  <EditorialPhotoPlaceholder
                    title={item.title}
                    ratio={item.ratio === "3:4" ? "4:3" : item.ratio}
                    resolution={item.resolution}
                    badge={item.album}
                    tone={item.tone}
                    compact
                  />
                  <button
                    type="button"
                    onClick={() => setActiveLightbox(item)}
                    aria-label={`Perbesar detail ${item.title}`}
                    className="absolute bottom-3 end-3 z-20 inline-flex items-center gap-1.5 rounded-sm border border-saffron/60 bg-navy/90 px-2.5 py-1.5 text-[10px] font-semibold tracking-wider uppercase text-alabaster opacity-95 shadow transition-colors hover:bg-saffron hover:text-navy"
                  >
                    <Maximize2 className="h-3 w-3" />
                    <span>Pratinjau</span>
                  </button>
                </div>

                <div className="mt-4 flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium text-saffron-dark">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {item.date}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {item.location}
                      </span>
                    </div>
                    <h3 className="font-editorial mt-2 text-xl font-semibold leading-snug text-navy">
                      <ProtectedText text={item.title} />
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-editorial">
                      <ProtectedText text={item.caption} />
                    </p>
                  </div>

                  <p
                    className="notranslate mt-4 border-t border-hairline/80 pt-3 text-[10px] font-semibold tracking-wider uppercase text-navy/60"
                    translate="no"
                  >
                    Rasio Ideal: {item.ratio} ({item.resolution})
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          2. OFFICIAL INSTAGRAM & SOCIAL NETWORK SHOWCASE
          ================================================================= */}
      <section className="bg-sand py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 border-b border-hairline pb-8 md:flex-row md:items-end">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] uppercase text-terracotta">
                <Instagram className="h-4 w-4" />
                <span>Jejaring Sosial Resmi</span>
              </div>
              <h2 className="font-editorial mt-2 text-3xl font-semibold text-navy sm:text-4xl">
                Sorotan Unggahan Instagram Organisasi &amp; Pengurus
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-editorial">
                Ikuti perkembangan terkini kegiatan lapangan, siaran langsung
                dialog lintas iman, dan dokumentasi pengurus{" "}
                <OfficialOrgName className="font-semibold text-navy" /> melalui
                kanal resmi Instagram kami.
              </p>
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="notranslate inline-flex shrink-0 items-center gap-2 rounded-sm bg-navy px-5 py-3 text-xs font-bold tracking-wider uppercase text-alabaster transition-colors hover:bg-terracotta"
              translate="no"
            >
              <Instagram className="h-4 w-4 text-saffron" />
              <span>@rawinalaharidraglobal</span>
              <ExternalLink className="h-3.5 w-3.5 text-saffron" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INSTAGRAM_POSTS.map((post, idx) => (
              <article
                key={post.id}
                className="flex flex-col overflow-hidden rounded-sm border border-navy/12 bg-alabaster shadow-sm"
              >
                {/* Instagram Header Bar */}
                <div className="flex items-center justify-between border-b border-hairline px-4 py-3">
                  <div className="min-w-0">
                    <p
                      className="notranslate truncate text-xs font-bold text-navy"
                      translate="no"
                    >
                      {post.handle}
                    </p>
                    <p className="truncate text-[10px] text-slate-editorial">
                      {post.accountRole}
                    </p>
                  </div>
                  <Instagram className="h-4 w-4 shrink-0 text-terracotta" />
                </div>

                {/* 4:5 Portrait Instagram Frame */}
                <div className="p-3 pb-0">
                  <EditorialPhotoPlaceholder
                    title={post.title}
                    ratio={post.ratio}
                    resolution={post.resolution}
                    badge={`Instagram • ${post.date}`}
                    tone={idx % 2 === 0 ? "navy" : "terracotta"}
                    compact
                  />
                </div>

                {/* Caption & Tags */}
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <p className="text-xs leading-relaxed text-ink/90">
                      <ProtectedText text={post.caption} />
                    </p>
                    <div className="notranslate mt-3 flex flex-wrap gap-1.5" translate="no">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold text-saffron-dark"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-hairline pt-3">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-slate-editorial">
                      {post.date}
                    </span>
                    <a
                      href={post.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-navy hover:text-terracotta"
                    >
                      <span>Buka Unggahan</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          3. LIGHTBOX INSPECTION MODAL
          ================================================================= */}
      {activeLightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeLightbox.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/85 p-4 backdrop-blur-sm sm:p-6"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-sm border border-saffron/45 bg-alabaster p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-saffron-dark">
                  {activeLightbox.album} • {activeLightbox.date}
                </p>
                <h3 className="font-editorial mt-1 text-2xl font-semibold text-navy">
                  <ProtectedText text={activeLightbox.title} />
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveLightbox(null)}
                aria-label="Tutup pratinjau"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-navy/15 bg-sand text-navy hover:bg-navy hover:text-alabaster"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <EditorialPhotoPlaceholder
              title={activeLightbox.title}
              ratio="16:10"
              resolution={activeLightbox.resolution}
              badge={activeLightbox.location}
              tone={activeLightbox.tone}
              caption={activeLightbox.caption}
            />

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-hairline pt-4 text-xs text-slate-editorial">
              <span>Lokasi: {activeLightbox.location}</span>
              <span className="notranslate font-semibold text-navy" translate="no">
                Spesifikasi Foto Ideal: {activeLightbox.ratio} •{" "}
                {activeLightbox.resolution}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
