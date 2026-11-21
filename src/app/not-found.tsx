import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { OfficialOrgName } from "@/components/ProtectedText";

export default function NotFound() {
  return (
    <section className="flex min-h-[65vh] items-center justify-center bg-alabaster px-4 py-20">
      <div className="max-w-lg text-center">
        <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-saffron-dark">
          404 • Halaman Tidak Ditemukan
        </p>
        <h1 className="font-editorial mt-3 text-4xl font-semibold text-navy sm:text-5xl">
          Tautan Tidak Tersedia
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-editorial">
          Halaman yang Anda cari di situs resmi{" "}
          <OfficialOrgName className="font-semibold text-navy" /> tidak
          ditemukan atau telah dipindahkan.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-sm bg-navy px-6 py-3.5 text-xs font-bold tracking-wider uppercase text-alabaster transition-colors hover:bg-terracotta"
        >
          <ArrowLeft className="rtl-flip h-4 w-4 text-saffron" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>
    </section>
  );
}
