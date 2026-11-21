"use client";

import React, { useState } from "react";
import { Maximize2 } from "lucide-react";
import { GalleryItem } from "@/data/siteData";
import { EditorialPhotoPlaceholder } from "@/components/EditorialPhotoPlaceholder";
import { EditorialLightbox } from "@/components/EditorialLightbox";
import { FadeUp } from "@/components/MotionPrimitives";
import { ProtectedText } from "@/components/ProtectedText";

interface HomeGalleryPreviewProps {
  items: GalleryItem[];
}

export function HomeGalleryPreview({ items }: HomeGalleryPreviewProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((item, idx) => (
          <FadeUp key={item.id} delay={idx * 0.08}>
            <button
              type="button"
              onClick={() => setActiveIndex(idx)}
              className="group block w-full cursor-pointer rounded-sm border border-hairline bg-sand/40 p-4 text-start transition-all duration-300 hover:-translate-y-1 hover:border-saffron hover:bg-sand/85 hover:shadow-lg hover:shadow-navy/8 focus:outline-none focus:ring-2 focus:ring-saffron"
            >
              <div className="relative">
                <EditorialPhotoPlaceholder
                  title={item.title}
                  ratio="4:3"
                  resolution={item.resolution}
                  badge={item.album}
                  tone={item.tone}
                  compact
                />
                <span className="absolute bottom-3 end-3 z-20 inline-flex items-center gap-1.5 rounded-sm border border-saffron/60 bg-navy/90 px-2.5 py-1.5 text-[10px] font-semibold tracking-wider uppercase text-alabaster transition-colors group-hover:bg-saffron group-hover:text-navy">
                  <Maximize2 className="h-3 w-3" />
                  <span>Buka Kronologi</span>
                </span>
              </div>
              <div className="mt-4">
                <p className="text-[11px] font-semibold tracking-wider uppercase text-saffron-dark">
                  {item.date} • {item.location}
                </p>
                <h3 className="font-editorial mt-1.5 text-xl font-semibold leading-snug text-navy transition-colors group-hover:text-terracotta">
                  <ProtectedText text={item.title} />
                </h3>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-editorial">
                  <ProtectedText text={item.caption} />
                </p>
              </div>
            </button>
          </FadeUp>
        ))}
      </div>

      <EditorialLightbox
        items={items}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={(nextIdx) => setActiveIndex(nextIdx)}
      />
    </>
  );
}
