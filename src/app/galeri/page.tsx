import type { Metadata } from "next";
import React from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GaleriClient } from "@/components/GaleriClient";
import { OfficialOrgName } from "@/components/ProtectedText";

export const metadata: Metadata = {
  title: "Galeri & Jejaring Sosial",
  description:
    "Arsip visual kegiatan lapangan Rawinala Haridra Global berdasarkan album serta sorotan unggahan Instagram resmi organisasi dan pengurus.",
};

export default function GaleriPage() {
  return (
    <div className="bg-alabaster">
      <section className="border-b border-hairline bg-navy py-14 text-alabaster sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Galeri & Jejaring Sosial" }]}
            variant="dark"
          />
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saffron">
              Arsip Visual &amp; Dokumentasi Lapangan
            </p>
            <h1 className="font-editorial mt-3 text-4xl font-semibold leading-tight text-alabaster sm:text-5xl lg:text-[54px]">
              Galeri &amp; Jejaring Sosial
            </h1>
            <p className="mt-5 text-base leading-relaxed text-alabaster/80">
              Rekam jejak visual pengabdian{" "}
              <OfficialOrgName className="font-semibold text-saffron" />—mulai
              dari Pelantikan Pengurus November 2026, Audiensi Menko Polkam,
              hingga Forum Dialog Lintas Iman dan dokumentasi kanal Instagram
              resmi.
            </p>
          </div>
        </div>
      </section>

      <GaleriClient />
    </div>
  );
}
