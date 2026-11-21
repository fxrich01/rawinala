"use client";

import React, { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { OfficialOrgName } from "@/components/ProtectedText";

const CORRESPONDENCE_PURPOSES = [
  {
    id: "dialog-lintas-iman",
    label: "Undangan Dialog Lintas Iman",
    hint: "Sertakan informasi tema forum, tanggal rencana acara, serta tokoh/lembaga penyelenggara.",
  },
  {
    id: "permohonan-audiensi",
    label: "Permohonan Audiensi",
    hint: "Jelaskan maksud kunjungan atau pertemuan kelembagaan bersama Dewan Pengurus maupun Pendiri.",
  },
  {
    id: "kemitraan-kemanusiaan",
    label: "Kemitraan Kemanusiaan",
    hint: "Uraikan ruang lingkup program bakti sosial, layanan kesehatan, atau kolaborasi tanggap darurat.",
  },
  {
    id: "pertanyaan-media",
    label: "Pertanyaan Media",
    hint: "Cantumkan nama redaksi/media, topik wawancara, serta tenggat waktu publikasi Anda.",
  },
] as const;

type PurposeId = (typeof CORRESPONDENCE_PURPOSES)[number]["id"];

export function KontakFormClient() {
  const [purpose, setPurpose] = useState<PurposeId>("dialog-lintas-iman");
  const [fullName, setFullName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const selectedPurposeObj =
    CORRESPONDENCE_PURPOSES.find((p) => p.id === purpose) ??
    CORRESPONDENCE_PURPOSES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    setSubmittedRef(`RHG-2026-${randomCode}`);
  };

  if (submittedRef) {
    return (
      <div className="rounded-sm border border-saffron/55 bg-sand/70 p-8 sm:p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-saffron">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <p className="mt-5 text-[11px] font-semibold tracking-[0.2em] uppercase text-terracotta">
          Korespondensi Tercatat
        </p>
        <h3 className="font-editorial mt-2 text-3xl font-semibold text-navy">
          Terima Kasih atas Surat Resmi Anda
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-editorial">
          Pesan Anda untuk kategori{" "}
          <strong className="text-navy">{selectedPurposeObj.label}</strong>{" "}
          telah diteruskan ke Sekretariat Pusat <OfficialOrgName />. Tim
          kesekretariatan kami akan meninjau dan memberikan tanggapan resmi
          melalui surat elektronik dalam 2–3 hari kerja.
        </p>

        <div className="mt-6 rounded-sm border border-navy/15 bg-alabaster p-4 text-xs">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-slate-editorial">Nomor Referensi Surat:</span>
            <span
              className="notranslate font-mono text-sm font-bold text-navy"
              translate="no"
            >
              {submittedRef}
            </span>
          </div>
          <div className="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-hairline pt-2">
            <span className="text-slate-editorial">Pengirim:</span>
            <span className="font-semibold text-navy">
              {fullName} {organization ? `(${organization})` : ""}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setSubmittedRef(null);
            setSubject("");
            setMessage("");
          }}
          className="mt-6 inline-flex items-center gap-2 rounded-sm bg-navy px-5 py-3 text-xs font-semibold tracking-wider uppercase text-alabaster transition-colors hover:bg-terracotta"
        >
          Kirim Korespondensi Baru
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-navy/12 bg-alabaster p-6 shadow-sm sm:p-9"
    >
      <div className="border-b border-hairline pb-5">
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-terracotta">
          Formulir Korespondensi Resmi
        </p>
        <h2 className="font-editorial mt-1.5 text-2xl font-semibold text-navy sm:text-3xl">
          Sampaikan Undangan, Audiensi, atau Kemitraan
        </h2>
      </div>

      {/* Step 1: Purpose Selector */}
      <div className="mt-6">
        <label className="block text-xs font-bold tracking-wider uppercase text-navy">
          1. Pilih Tujuan Korespondensi
        </label>
        <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {CORRESPONDENCE_PURPOSES.map((item) => {
            const active = purpose === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setPurpose(item.id)}
                className={`rounded-sm border px-4 py-3 text-start text-xs font-semibold transition-all ${
                  active
                    ? "border-navy bg-navy text-alabaster shadow-sm"
                    : "border-hairline bg-sand/45 text-navy hover:border-saffron hover:bg-sand"
                }`}
              >
                <span className="flex items-center justify-between gap-2">
                  <span>{item.label}</span>
                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${
                      active ? "bg-saffron" : "bg-navy/20"
                    }`}
                  />
                </span>
              </button>
            );
          })}
        </div>
        <p className="mt-2.5 rounded-sm border-s-2 border-saffron bg-sand/60 px-3.5 py-2 text-xs text-slate-editorial">
          {selectedPurposeObj.hint}
        </p>
      </div>

      {/* Step 2: Sender Information */}
      <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold text-navy"
          >
            Nama Lengkap &amp; Gelar <span className="text-terracotta">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Contoh: Dr. Ahmad Santoso"
            className="mt-1.5 w-full rounded-sm border border-navy/20 bg-alabaster px-3.5 py-2.5 text-sm text-navy placeholder:text-slate-editorial/55 focus:border-saffron focus:outline-none focus:ring-1 focus:ring-saffron"
          />
        </div>

        <div>
          <label
            htmlFor="organization"
            className="block text-xs font-semibold text-navy"
          >
            Instansi / Lembaga / Komunitas
          </label>
          <input
            id="organization"
            type="text"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            placeholder="Nama lembaga, media, atau organisasi"
            className="mt-1.5 w-full rounded-sm border border-navy/20 bg-alabaster px-3.5 py-2.5 text-sm text-navy placeholder:text-slate-editorial/55 focus:border-saffron focus:outline-none focus:ring-1 focus:ring-saffron"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold text-navy"
          >
            Alamat Email Resmi <span className="text-terracotta">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nama@instansi.or.id"
            className="mt-1.5 w-full rounded-sm border border-navy/20 bg-alabaster px-3.5 py-2.5 text-sm text-navy placeholder:text-slate-editorial/55 focus:border-saffron focus:outline-none focus:ring-1 focus:ring-saffron"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold text-navy"
          >
            Nomor Telepon / WhatsApp
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+62 812 xxxx xxxx"
            className="mt-1.5 w-full rounded-sm border border-navy/20 bg-alabaster px-3.5 py-2.5 text-sm text-navy placeholder:text-slate-editorial/55 focus:border-saffron focus:outline-none focus:ring-1 focus:ring-saffron"
          />
        </div>
      </div>

      {/* Step 3: Subject & Message */}
      <div className="mt-5 space-y-5">
        <div>
          <label
            htmlFor="subject"
            className="block text-xs font-semibold text-navy"
          >
            Perihal Surat / Agenda <span className="text-terracotta">*</span>
          </label>
          <input
            id="subject"
            type="text"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder={`Perihal ${selectedPurposeObj.label}`}
            className="mt-1.5 w-full rounded-sm border border-navy/20 bg-alabaster px-3.5 py-2.5 text-sm text-navy placeholder:text-slate-editorial/55 focus:border-saffron focus:outline-none focus:ring-1 focus:ring-saffron"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold text-navy"
          >
            Uraian Pesan Resmi <span className="text-terracotta">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tuliskan rincian permohonan, jadwal yang diusulkan, atau informasi kemitraan secara jelas..."
            className="mt-1.5 w-full rounded-sm border border-navy/20 bg-alabaster px-3.5 py-2.5 text-sm leading-relaxed text-navy placeholder:text-slate-editorial/55 focus:border-saffron focus:outline-none focus:ring-1 focus:ring-saffron"
          />
        </div>
      </div>

      {/* Submit */}
      <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6">
        <p className="text-[11px] text-slate-editorial">
          Seluruh informasi dijaga kerahasiaannya sesuai protokol kesekretariatan.
        </p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-sm bg-navy px-6 py-3.5 text-xs font-bold tracking-[0.14em] uppercase text-alabaster transition-colors hover:bg-terracotta"
        >
          <span>Kirim Korespondensi</span>
          <Send className="h-3.5 w-3.5 text-saffron" />
        </button>
      </div>
    </form>
  );
}
