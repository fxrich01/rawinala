"use client";

import React, { useState } from "react";
import { Check, Link2, Printer } from "lucide-react";

export function ArticleActions() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // ignore clipboard restrictions
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 rounded-sm border border-navy/15 bg-alabaster px-3.5 py-2 text-xs font-semibold text-navy transition-colors hover:border-saffron hover:bg-sand"
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-terracotta" />
            <span>Tautan Disalin</span>
          </>
        ) : (
          <>
            <Link2 className="h-3.5 w-3.5 text-saffron-dark" />
            <span>Salin Tautan Artikel</span>
          </>
        )}
      </button>
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center gap-1.5 rounded-sm border border-navy/15 bg-alabaster px-3.5 py-2 text-xs font-semibold text-navy transition-colors hover:border-saffron hover:bg-sand"
      >
        <Printer className="h-3.5 w-3.5 text-saffron-dark" />
        <span>Cetak Siaran Pers</span>
      </button>
    </div>
  );
}
