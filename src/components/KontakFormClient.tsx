"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  Loader2,
  MessageCircle,
  Send,
} from "lucide-react";
import { OFFICIAL_WHATSAPP_NUMBER } from "@/data/siteData";
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
type FieldKey = "fullName" | "email" | "phone" | "subject" | "message";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_REGEX = /^[+\d\s()-]{8,20}$/;

export function KontakFormClient() {
  const [purpose, setPurpose] = useState<PurposeId>("dialog-lintas-iman");
  const [fullName, setFullName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>(
    {}
  );
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [copiedDraft, setCopiedDraft] = useState(false);

  // Sync ?tujuan=... query parameter safely on client mount (static-export compatible)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const paramTujuan = params.get("tujuan");
    if (
      paramTujuan &&
      CORRESPONDENCE_PURPOSES.some((item) => item.id === paramTujuan)
    ) {
      setPurpose(paramTujuan as PurposeId);
    }
  }, []);

  const selectedPurposeObj =
    CORRESPONDENCE_PURPOSES.find((p) => p.id === purpose) ??
    CORRESPONDENCE_PURPOSES[0];

  // Real-time validation map
  const errors = useMemo(() => {
    const next: Partial<Record<FieldKey, string>> = {};
    if (fullName.trim().length < 3) {
      next.fullName = "Masukkan nama lengkap minimal 3 karakter.";
    }
    if (!EMAIL_REGEX.test(email.trim())) {
      next.email = "Format alamat email resmi belum valid.";
    }
    if (phone.trim().length > 0 && !PHONE_REGEX.test(phone.trim())) {
      next.phone = "Masukkan nomor telepon/WhatsApp yang valid (8–20 digit).";
    }
    if (subject.trim().length < 5) {
      next.subject = "Perihal surat minimal 5 karakter.";
    }
    if (message.trim().length < 20) {
      next.message = `Uraian pesan minimal 20 karakter (saat ini ${message.trim().length}/20).`;
    }
    return next;
  }, [fullName, email, phone, subject, message]);

  const isFormValid = Object.keys(errors).length === 0;

  const markTouched = (field: FieldKey) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  // Automatically compose formal WhatsApp correspondence draft
  const composedLetterDraft = useMemo(() => {
    const refLine = submittedRef
      ? `Nomor Referensi: ${submittedRef}\n`
      : "";
    return [
      "Yth. Sekretariat Pusat RAWINALA HARIDRA GLOBAL,",
      "",
      refLine ? refLine.trimEnd() : null,
      `Kategori: ${selectedPurposeObj.label}`,
      `Perihal: ${subject.trim() || `(Belum diisi — ${selectedPurposeObj.label})`}`,
      "",
      "Data Pengirim:",
      `• Nama: ${fullName.trim() || "-"}`,
      `• Instansi/Lembaga: ${organization.trim() || "-"}`,
      `• Email: ${email.trim() || "-"}`,
      `• Telepon/WhatsApp: ${phone.trim() || "-"}`,
      "",
      "Uraian Permohonan / Pesan:",
      message.trim() ||
        "Saya bermaksud mengajukan koordinasi resmi dengan Sekretariat Pusat Rawinala Haridra Global.",
      "",
      "Hormat kami,",
      fullName.trim() || "Pemohon",
    ]
      .filter((line) => line !== null)
      .join("\n");
  }, [
    submittedRef,
    selectedPurposeObj.label,
    subject,
    fullName,
    organization,
    email,
    phone,
    message,
  ]);

  const whatsAppUrl = useMemo(
    () =>
      `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(
        composedLetterDraft
      )}`,
    [composedLetterDraft]
  );

  const handleCopyDraft = async () => {
    try {
      await navigator.clipboard.writeText(composedLetterDraft);
      setCopiedDraft(true);
      setTimeout(() => setCopiedDraft(false), 2200);
    } catch {
      // ignore clipboard restrictions
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });

    if (!isFormValid) return;

    setStatus("submitting");
    setTimeout(() => {
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      setSubmittedRef(`RHG-2026-${randomCode}`);
      setStatus("success");
    }, 650);
  };

  if (status === "success" && submittedRef) {
    return (
      <div className="rounded-sm border border-saffron/55 bg-sand/75 p-7 sm:p-10">
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
          Draf korespondensi untuk kategori{" "}
          <strong className="text-navy">{selectedPurposeObj.label}</strong>{" "}
          telah terverifikasi. Untuk respon tercepat dari Sekretariat Pusat{" "}
          <OfficialOrgName />, Anda dapat langsung meneruskan draf surat resmi
          di bawah ini melalui WhatsApp Sekretariat.
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
          <div className="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-hairline pt-2">
            <span className="text-slate-editorial">Perihal:</span>
            <span className="font-semibold text-navy">{subject}</span>
          </div>
        </div>

        {/* Action Buttons: WhatsApp + Copy + New Letter */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-[#166534] px-5 py-3 text-xs font-bold tracking-wider uppercase text-alabaster transition-colors hover:bg-[#14532D]"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Kirim Draf Surat via WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={handleCopyDraft}
            className="inline-flex items-center gap-1.5 rounded-sm border border-navy/20 bg-alabaster px-4 py-3 text-xs font-semibold text-navy transition-colors hover:border-saffron hover:bg-sand"
          >
            {copiedDraft ? (
              <>
                <Check className="h-3.5 w-3.5 text-[#166534]" />
                <span>Draf Disalin</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-saffron-dark" />
                <span>Salin Draf Surat</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setSubmittedRef(null);
              setSubject("");
              setMessage("");
              setTouched({});
            }}
            className="inline-flex items-center gap-2 rounded-sm border border-navy/20 bg-navy px-4 py-3 text-xs font-semibold tracking-wider uppercase text-alabaster transition-colors hover:bg-terracotta"
          >
            Buat Surat Baru
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
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

      {/* Step 2: Sender Information with Real-Time Validation */}
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
            onBlur={() => markTouched("fullName")}
            onChange={(e) => {
              setFullName(e.target.value);
              if (!touched.fullName) markTouched("fullName");
            }}
            placeholder="Contoh: Dr. Ahmad Santoso"
            className={`mt-1.5 w-full rounded-sm border bg-alabaster px-3.5 py-2.5 text-sm text-navy placeholder:text-slate-editorial/55 focus:outline-none focus:ring-1 ${
              touched.fullName && errors.fullName
                ? "border-terracotta focus:border-terracotta focus:ring-terracotta"
                : "border-navy/20 focus:border-saffron focus:ring-saffron"
            }`}
          />
          {touched.fullName && errors.fullName && (
            <p className="mt-1.5 flex items-center gap-1 text-[11px] font-medium text-terracotta">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.fullName}</span>
            </p>
          )}
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
            onBlur={() => markTouched("email")}
            onChange={(e) => {
              setEmail(e.target.value);
              if (!touched.email) markTouched("email");
            }}
            placeholder="nama@instansi.or.id"
            className={`mt-1.5 w-full rounded-sm border bg-alabaster px-3.5 py-2.5 text-sm text-navy placeholder:text-slate-editorial/55 focus:outline-none focus:ring-1 ${
              touched.email && errors.email
                ? "border-terracotta focus:border-terracotta focus:ring-terracotta"
                : "border-navy/20 focus:border-saffron focus:ring-saffron"
            }`}
          />
          {touched.email && errors.email && (
            <p className="mt-1.5 flex items-center gap-1 text-[11px] font-medium text-terracotta">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
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
            onBlur={() => markTouched("phone")}
            onChange={(e) => {
              setPhone(e.target.value);
              if (!touched.phone) markTouched("phone");
            }}
            placeholder="+62 812 xxxx xxxx"
            className={`mt-1.5 w-full rounded-sm border bg-alabaster px-3.5 py-2.5 text-sm text-navy placeholder:text-slate-editorial/55 focus:outline-none focus:ring-1 ${
              touched.phone && errors.phone
                ? "border-terracotta focus:border-terracotta focus:ring-terracotta"
                : "border-navy/20 focus:border-saffron focus:ring-saffron"
            }`}
          />
          {touched.phone && errors.phone && (
            <p className="mt-1.5 flex items-center gap-1 text-[11px] font-medium text-terracotta">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
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
            onBlur={() => markTouched("subject")}
            onChange={(e) => {
              setSubject(e.target.value);
              if (!touched.subject) markTouched("subject");
            }}
            placeholder={`Perihal ${selectedPurposeObj.label}`}
            className={`mt-1.5 w-full rounded-sm border bg-alabaster px-3.5 py-2.5 text-sm text-navy placeholder:text-slate-editorial/55 focus:outline-none focus:ring-1 ${
              touched.subject && errors.subject
                ? "border-terracotta focus:border-terracotta focus:ring-terracotta"
                : "border-navy/20 focus:border-saffron focus:ring-saffron"
            }`}
          />
          {touched.subject && errors.subject && (
            <p className="mt-1.5 flex items-center gap-1 text-[11px] font-medium text-terracotta">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.subject}</span>
            </p>
          )}
        </div>

        <div>
          <div className="flex items-center justify-between gap-2">
            <label
              htmlFor="message"
              className="block text-xs font-semibold text-navy"
            >
              Uraian Pesan Resmi <span className="text-terracotta">*</span>
            </label>
            <span
              className={`text-[11px] font-medium ${
                message.trim().length >= 20
                  ? "text-emerald-700"
                  : "text-slate-editorial"
              }`}
            >
              {message.trim().length} karakter
            </span>
          </div>
          <textarea
            id="message"
            rows={5}
            required
            value={message}
            onBlur={() => markTouched("message")}
            onChange={(e) => {
              setMessage(e.target.value);
              if (!touched.message) markTouched("message");
            }}
            placeholder="Tuliskan rincian permohonan, jadwal yang diusulkan, atau informasi kemitraan secara jelas..."
            className={`mt-1.5 w-full rounded-sm border bg-alabaster px-3.5 py-2.5 text-sm leading-relaxed text-navy placeholder:text-slate-editorial/55 focus:outline-none focus:ring-1 ${
              touched.message && errors.message
                ? "border-terracotta focus:border-terracotta focus:ring-terracotta"
                : "border-navy/20 focus:border-saffron focus:ring-saffron"
            }`}
          />
          {touched.message && errors.message && (
            <p className="mt-1.5 flex items-center gap-1 text-[11px] font-medium text-terracotta">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>
      </div>

      {/* Submit + Automatic WhatsApp Draft Actions */}
      <div className="mt-7 space-y-4 border-t border-hairline pt-6">
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center gap-2 rounded-sm bg-navy px-6 py-3.5 text-xs font-bold tracking-[0.14em] uppercase text-alabaster transition-colors hover:bg-terracotta disabled:cursor-wait disabled:opacity-75"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-saffron" />
                <span>Mencatat Korespondensi...</span>
              </>
            ) : (
              <>
                <span>Catat &amp; Dapatkan Nomor Referensi</span>
                <Send className="h-3.5 w-3.5 text-saffron" />
              </>
            )}
          </button>

          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              setTouched({
                fullName: true,
                email: true,
                phone: true,
                subject: true,
                message: true,
              });
            }}
            className="inline-flex items-center gap-2 rounded-sm border border-[#166534]/35 bg-[#166534]/10 px-5 py-3.5 text-xs font-bold tracking-[0.1em] uppercase text-[#14532D] transition-colors hover:bg-[#166534] hover:text-alabaster"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Kirim Draf Surat via WhatsApp</span>
          </a>
        </div>

        <p className="text-[11px] text-slate-editorial">
          Tombol WhatsApp otomatis menyusun draf surat resmi berdasarkan isian
          formulir Anda tanpa memerlukan server backend.
        </p>
      </div>
    </form>
  );
}
