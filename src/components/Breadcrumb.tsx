import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
}

export function Breadcrumb({ items, variant = "light" }: BreadcrumbProps) {
  const isDark = variant === "dark";

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium tracking-wide">
        <li>
          <Link
            href="/"
            className={`transition-colors ${
              isDark
                ? "text-alabaster/70 hover:text-saffron"
                : "text-slate-editorial hover:text-navy"
            }`}
          >
            Beranda
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-1.5">
              <ChevronRight
                className={`rtl-flip h-3.5 w-3.5 shrink-0 ${
                  isDark ? "text-saffron/60" : "text-navy/35"
                }`}
              />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    isDark
                      ? "text-alabaster/70 hover:text-saffron"
                      : "text-slate-editorial hover:text-navy"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={`max-w-[260px] truncate sm:max-w-md ${
                    isDark ? "text-saffron" : "font-semibold text-navy"
                  }`}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
