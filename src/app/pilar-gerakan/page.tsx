import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PilarScrollytelling } from "@/components/PilarScrollytelling";
import { OfficialOrgName } from "@/components/ProtectedText";

export const metadata: Metadata = {
  title: "Pilar Gerakan",
  description:
    "Penjabaran mendalam tiga fokus utama Rawinala Haridra Global: Dialog Lintas Agama, Aksi & Solidaritas Kemanusiaan, dan Penguatan Persatuan & Kebangsaan.",
};

export default function PilarGerakanPage() {
  return (
    <div className="bg-alabaster">
      {/* Editorial Header */}
      <section className="border-b border-hairline bg-navy py-14 text-alabaster sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Pilar Gerakan" }]} variant="dark" />
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saffron">
              Arsitektur Dampak • Tiga Pilar Utama
            </p>
            <h1 className="font-editorial mt-3 text-4xl font-semibold leading-tight text-alabaster sm:text-5xl lg:text-[54px]">
              Tiga Pilar Pengabdian bagi Kemanusiaan &amp; Keutuhan Bangsa
            </h1>
            <p className="mt-5 text-base leading-relaxed text-alabaster/80">
              Seluruh inisiatif <OfficialOrgName className="font-semibold text-saffron" />{" "}
              bertumpu pada tiga pilar strategis yang saling menguatkan—merajut
              kerukunan lintas agama, menghadirkan kepedulian sosial, dan
              memperkokoh persatuan nasional.
            </p>
          </div>
        </div>
      </section>

      {/* Vertical Scrollytelling Content */}
      <PilarScrollytelling />

      {/* Bottom Collaboration Band */}
      <section className="border-t border-hairline bg-sand py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-sm border border-saffron/45 bg-navy p-8 text-alabaster sm:p-12 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-saffron">
                Sinergi Program &amp; Kemitraan
              </p>
              <h2 className="font-editorial mt-2 text-3xl font-semibold sm:text-4xl">
                Hadirkan Program Bersama di Wilayah Anda
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-alabaster/80">
                Kami menyambut baik kolaborasi bersama tokoh agama, lembaga
                pendidikan, komunitas relawan, maupun institusi pemerintah untuk
                memperluas dampak ketiga pilar gerakan ini.
              </p>
            </div>
            <Link
              href="/kontak"
              className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-saffron px-6 py-3.5 text-xs font-bold tracking-[0.14em] uppercase text-navy transition-colors hover:bg-alabaster"
            >
              <span>Mulai Korespondensi</span>
              <ArrowRight className="rtl-flip h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
