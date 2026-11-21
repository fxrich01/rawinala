import type { Metadata } from "next";
import React from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { KabarPersClient } from "@/components/KabarPersClient";
import { OfficialOrgName } from "@/components/ProtectedText";

export const metadata: Metadata = {
  title: "Kabar & Ruang Pers",
  description:
    "Katalog berita resmi, siaran pers, dan catatan audiensi kenegaraan Rawinala Haridra Global.",
};

export default function KabarPersPage() {
  return (
    <div className="bg-alabaster">
      <section className="border-b border-hairline bg-navy py-14 text-alabaster sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Kabar & Ruang Pers" }]} variant="dark" />
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saffron">
              Publikasi Resmi &amp; Catatan Kenegaraan
            </p>
            <h1 className="font-editorial mt-3 text-4xl font-semibold leading-tight text-alabaster sm:text-5xl lg:text-[54px]">
              Kabar &amp; Ruang Pers
            </h1>
            <p className="mt-5 text-base leading-relaxed text-alabaster/80">
              Liputan resmi kegiatan, siaran pers, serta catatan audiensi
              kelembagaan <OfficialOrgName className="font-semibold text-saffron" />{" "}
              dalam merawat kerukunan dan kemanusiaan di Indonesia.
            </p>
          </div>
        </div>
      </section>

      <KabarPersClient />
    </div>
  );
}
