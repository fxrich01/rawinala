import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, Flame, ShieldCheck } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { EditorialPhotoPlaceholder } from "@/components/EditorialPhotoPlaceholder";
import { FadeUp, RevealRule } from "@/components/MotionPrimitives";
import { BOARD_MEMBERS } from "@/data/siteData";
import {
  FounderName,
  OfficialOrgName,
  ProtectedText,
} from "@/components/ProtectedText";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Sejarah, filosofi nama Rawinala Haridra Global, visi dan misi, serta profil pendiri Fu Kwet Khiong dan Dewan Pengurus periode 2026–2031.",
};

const CORE_VALUES = [
  {
    index: "01",
    title: "Cahaya Kemurnian & Integritas",
    description:
      "Menjunjung tinggi ketulusan niat, transparansi tata kelola, serta akuntabilitas moral dalam setiap keputusan organisasi dan program kemanusiaan.",
  },
  {
    index: "02",
    title: "Persaudaraan Lintas Iman & Budaya",
    description:
      "Memandang setiap warga negara setara dalam martabat, membangun dialog yang tulus, dan menjadikan keberagaman sebagai sumber kekuatan bersama.",
  },
  {
    index: "03",
    title: "Pengabdian bagi Keutuhan NKRI",
    description:
      "Menempatkan kepentingan bangsa dan kerukunan nasional di atas kepentingan golongan melalui sinergi konstruktif bersama seluruh elemen masyarakat dan negara.",
  },
];

export default function TentangKamiPage() {
  return (
    <div className="bg-alabaster">
      {/* Editorial Page Header */}
      <section className="border-b border-hairline bg-navy py-14 text-alabaster sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Tentang Kami" }]} variant="dark" />
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saffron">
              Identitas, Filosofi &amp; Kepemimpinan
            </p>
            <h1 className="font-editorial mt-3 text-4xl font-semibold leading-tight text-alabaster sm:text-5xl lg:text-[54px]">
              Menyalakan Pelita Kemanusiaan untuk Persatuan Indonesia
            </h1>
            <p className="mt-5 text-base leading-relaxed text-alabaster/80">
              Mengenal lebih dekat akar pemikiran, makna filosofis{" "}
              <OfficialOrgName className="font-semibold text-saffron" />, serta
              jajaran pendiri dan Dewan Pengurus yang resmi mengemban amanah
              pengabdian sejak November 2026.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Sejarah & Filosofi Nama */}
      <section className="border-b border-hairline bg-alabaster py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <FadeUp>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-terracotta">
                  Sejarah &amp; Etimologi
                </p>
                <h2 className="font-editorial mt-2 text-3xl font-semibold leading-tight text-navy sm:text-4xl">
                  Filosofi Nama{" "}
                  <OfficialOrgName className="italic text-saffron-dark" />
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-slate-editorial sm:text-[15px]">
                  Setiap kata dalam nama{" "}
                  <OfficialOrgName className="font-semibold text-navy" />{" "}
                  mengandung pesan peradaban yang dirumuskan untuk menjadi
                  kompas moral organisasi lintas generasi.
                </p>

                <div className="mt-8">
                  <EditorialPhotoPlaceholder
                    title="Ilustrasi / Dokumentasi Sejarah Pendirian Organisasi"
                    ratio="4:3"
                    resolution="1600 × 1200 px"
                    badge="Arsip Kelembagaan"
                    tone="sand"
                    caption="Dapat diisi foto penyerahan pataka organisasi, penandatanganan piagam pendirian, atau forum deklarasi awal."
                  />
                </div>
              </FadeUp>
            </div>

            <div className="space-y-6 lg:col-span-7">
              <FadeUp delay={0.08}>
                <div className="rounded-sm border border-hairline bg-sand/55 p-7 sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-saffron">
                      <Flame className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-saffron-dark">
                        Makna Pertama
                      </p>
                      <h3 className="font-editorial text-2xl font-semibold text-navy">
                        Rawinala — Pelita Penuntun di Tengah Kegelapan
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-editorial sm:text-[15px]">
                    <em>Rawinala</em> melambangkan pelita penerang yang hadir
                    dengan kerendahan hati namun teguh memancarkan harapan. Ia
                    mencerminkan tekad organisasi untuk menjadi penerang bagi
                    sesama—menghadirkan kejernihan di tengah kebisingan,
                    keteduhan di tengah perbedaan, dan jalan keluar di tengah
                    kesulitan sosial.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.14}>
                <div className="rounded-sm border border-hairline bg-sand/55 p-7 sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-saffron/20 text-saffron-dark">
                      <Compass className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-saffron-dark">
                        Makna Kedua
                      </p>
                      <h3 className="font-editorial text-2xl font-semibold text-navy">
                        Haridra — Cahaya Keemasan, Kemurnian &amp; Pemulihan
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-editorial sm:text-[15px]">
                    <em>Haridra</em> merujuk pada rona emas hangat yang dalam
                    tradisi Nusantara dan Asia melambangkan kesucian niat,
                    kehangatan persaudaraan, serta daya pemulihan bagi
                    kehidupan. Nilai ini menjiwai setiap aksi kemanusiaan dan
                    dialog lintas iman agar selalu berpijak pada ketulusan tanpa
                    pamrih.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="rounded-sm border border-hairline bg-sand/55 p-7 sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta/15 text-terracotta">
                      <ShieldCheck className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-terracotta">
                        Makna Ketiga
                      </p>
                      <h3 className="font-editorial text-2xl font-semibold text-navy">
                        Global — Berakar di Nusantara, Berwawasan Dunia
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-editorial sm:text-[15px]">
                    Kata <em>Global</em> menegaskan bahwa nilai-nilai kerukunan
                    Indonesia—Pancasila, gotong royong, dan Bhinneka Tunggal
                    Ika—adalah sumbangsih berharga bagi perdamaian dunia. Berakar
                    kuat di bumi Indonesia, organisasi ini terbuka menjalin
                    jejaring kemanusiaan lintas bangsa.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Visi, Misi & Nilai Dasar (Editorial Index 01, 02, 03) */}
      <section className="border-b border-hairline bg-sand py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-terracotta">
              Arah Strategis Organisasi
            </p>
            <h2 className="font-editorial mt-2 text-3xl font-semibold text-navy sm:text-5xl">
              Visi, Misi &amp; Nilai Dasar
            </h2>
            <RevealRule className="mt-6" />
          </FadeUp>

          {/* Editorial Vision & Mission Blocks */}
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* 01 VISI */}
            <FadeUp className="lg:col-span-5">
              <div className="h-full rounded-sm border border-saffron/45 bg-navy p-8 text-alabaster sm:p-10">
                <span className="font-editorial text-5xl font-semibold text-saffron">
                  01
                </span>
                <p className="mt-2 text-[11px] font-semibold tracking-[0.22em] uppercase text-saffron">
                  Visi Utama
                </p>
                <h3 className="font-editorial mt-4 text-2xl font-medium leading-snug text-alabaster sm:text-3xl">
                  Menjadi mercusuar kemanusiaan dan kerukunan lintas iman yang
                  memperkokoh persatuan Indonesia serta memberi inspirasi
                  perdamaian bagi masyarakat global.
                </h3>
              </div>
            </FadeUp>

            {/* 02 MISI */}
            <FadeUp delay={0.1} className="lg:col-span-7">
              <div className="h-full rounded-sm border border-navy/12 bg-alabaster p-8 sm:p-10">
                <span className="font-editorial text-5xl font-semibold text-saffron-dark">
                  02
                </span>
                <p className="mt-2 text-[11px] font-semibold tracking-[0.22em] uppercase text-terracotta">
                  Misi Pengabdian
                </p>
                <ol className="mt-5 space-y-4 text-sm leading-relaxed text-slate-editorial sm:text-[15px]">
                  <li className="flex items-start gap-3.5">
                    <span className="mt-0.5 font-editorial text-lg font-bold text-navy">
                      a.
                    </span>
                    <span>
                      Menyelenggarakan ruang dialog lintas agama yang setara,
                      terbuka, dan substantif guna mempererat persaudaraan antar
                      tokoh serta umat beragama.
                    </span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="mt-0.5 font-editorial text-lg font-bold text-navy">
                      b.
                    </span>
                    <span>
                      Menggerakkan aksi solidaritas kemanusiaan, bakti sosial,
                      layanan kesehatan, dan tanggap darurat secara inklusif
                      tanpa memandang latar belakang penerima manfaat.
                    </span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="mt-0.5 font-editorial text-lg font-bold text-navy">
                      c.
                    </span>
                    <span>
                      Membangun sinergi kelembagaan yang konstruktif bersama
                      pemerintah, lembaga negara, dan unsur masyarakat sipil
                      untuk menjaga kerukunan nasional dan keutuhan NKRI.
                    </span>
                  </li>
                </ol>
              </div>
            </FadeUp>
          </div>

          {/* 03 NILAI DASAR */}
          <div className="mt-12">
            <FadeUp>
              <div className="mb-6 flex items-baseline gap-4">
                <span className="font-editorial text-4xl font-semibold text-saffron-dark">
                  03
                </span>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-terracotta">
                    Etos &amp; Prinsip Kerja
                  </p>
                  <h3 className="font-editorial text-2xl font-semibold text-navy sm:text-3xl">
                    Tiga Nilai Dasar Organisasi
                  </h3>
                </div>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {CORE_VALUES.map((val, i) => (
                <FadeUp key={val.index} delay={i * 0.08}>
                  <div className="h-full rounded-sm border border-navy/10 bg-alabaster p-7">
                    <span className="font-editorial text-3xl font-semibold text-saffron-dark">
                      {val.index}
                    </span>
                    <h4 className="font-editorial mt-3 text-xl font-semibold text-navy">
                      {val.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-slate-editorial">
                      {val.description}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Profil Pendiri & Dewan Pengurus (#kepemimpinan) */}
      <section
        id="kepemimpinan"
        className="scroll-mt-28 bg-alabaster py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saffron-dark">
              Kepemimpinan &amp; Tata Kelola
            </p>
            <h2 className="font-editorial mt-2 text-3xl font-semibold text-navy sm:text-5xl">
              Pendiri &amp; Dewan Pengurus Resmi
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-editorial sm:text-[15px]">
              Struktur kepemimpinan yang resmi dilantik pada November 2026 untuk
              mengawal mandat <OfficialOrgName /> periode 2026–2031.
            </p>
            <RevealRule className="mt-7" />
          </FadeUp>

          {/* Featured Founder Profile Card */}
          <FadeUp delay={0.08}>
            <div className="mt-12 grid grid-cols-1 items-center gap-8 rounded-sm border border-saffron/40 bg-sand/65 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <EditorialPhotoPlaceholder
                  title="Potret Resmi Pendiri: Fu Kwet Khiong"
                  ratio="3:4"
                  resolution="900 × 1200 px"
                  badge="Pendiri Organisasi"
                  tone="navy"
                  compact
                />
              </div>
              <div className="lg:col-span-8">
                <span className="inline-block rounded-sm bg-navy px-3 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-saffron">
                  Pendiri &amp; Inisiator Utama
                </span>
                <h3 className="font-editorial mt-4 text-3xl font-semibold text-navy sm:text-4xl">
                  <FounderName />
                </h3>
                <p className="mt-1 text-xs font-semibold tracking-wider uppercase text-terracotta">
                  Pendiri <OfficialOrgName />
                </p>

                <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-editorial sm:text-[15px]">
                  <p>
                    Sebagai pendiri{" "}
                    <OfficialOrgName className="font-semibold text-navy" />,{" "}
                    <FounderName className="font-semibold text-navy" />{" "}
                    menggagas lahirnya organisasi kemasyarakatan yang menjembatani
                    komunikasi antar-golongan, merangkul pemuka lintas agama,
                    serta memobilisasi kepedulian sosial secara terstruktur.
                  </p>
                  <p>
                    Di bawah gagasan beliau, pengukuhan Dewan Pengurus pada
                    November 2026 serta audiensi kenegaraan bersama Menko Polkam
                    menjadi pijakan kokoh bagi gerakan jangka panjang yang
                    berorientasi pada persatuan nasional, ketahanan sosial, dan
                    pelayanan kemanusiaan yang bermartabat.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/kabar-pers/pelantikan-pengurus-dan-audiensi-menko-polkam-november-2026"
                    className="inline-flex items-center gap-2 rounded-sm bg-navy px-4 py-2.5 text-xs font-semibold text-alabaster transition-colors hover:bg-terracotta"
                  >
                    <span>Liputan Pelantikan Nov 2026</span>
                    <ArrowRight className="rtl-flip h-3.5 w-3.5 text-saffron" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Board of Directors Grid (Pelantikan November 2026) */}
          <div className="mt-16">
            <FadeUp>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-terracotta">
                    Struktur Terlantik • November 2026
                  </p>
                  <h3 className="font-editorial mt-1.5 text-2xl font-semibold text-navy sm:text-3xl">
                    Jajaran Dewan Pengurus Pusat
                  </h3>
                </div>
                <p className="text-xs text-slate-editorial">
                  Slot potret &amp; nama jabatan siap diperbarui dengan
                  dokumentasi resmi
                </p>
              </div>
            </FadeUp>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {BOARD_MEMBERS.map((member, idx) => (
                <FadeUp key={member.role} delay={idx * 0.05}>
                  <div className="flex h-full flex-col rounded-sm border border-hairline bg-alabaster p-5 transition-colors hover:border-saffron">
                    <EditorialPhotoPlaceholder
                      title={member.name}
                      ratio="3:4"
                      resolution="900 × 1200 px"
                      badge={member.role}
                      tone={idx % 2 === 0 ? "sand" : "navy"}
                      compact
                    />
                    <div className="mt-5 flex-1">
                      <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-saffron-dark">
                        {member.division}
                      </p>
                      <h4 className="font-editorial mt-1 text-xl font-semibold text-navy">
                        <ProtectedText text={member.name} />
                      </h4>
                      <p className="text-xs font-semibold text-terracotta">
                        {member.role}
                      </p>
                      <p className="mt-3 text-xs leading-relaxed text-slate-editorial sm:text-[13px]">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
