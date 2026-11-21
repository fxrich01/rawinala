"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { LANGUAGES, LanguageOption } from "@/data/siteData";

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay?: boolean;
            layout?: number;
          },
          elementId: string
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
    __rhgDomPatched?: boolean;
  }
}

interface LanguageContextValue {
  currentLang: string;
  activeOption: LanguageOption;
  setLanguage: (langCode: string) => void;
  isSwitching: boolean;
}

const LanguageContext = createContext<LanguageContextValue>({
  currentLang: "id",
  activeOption: LANGUAGES[0],
  setLanguage: () => {},
  isSwitching: false,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

const VALID_CODES = new Set(LANGUAGES.map((l) => l.code));

function readGoogTransCookie(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
  if (!match) return null;
  const decoded = decodeURIComponent(match[1]);
  // Format: /id/en or /auto/zh-CN
  const parts = decoded.split("/").filter(Boolean);
  const target = parts[parts.length - 1];
  if (target && VALID_CODES.has(target)) {
    return target;
  }
  return null;
}

function writeGoogTransCookie(langCode: string) {
  if (typeof document === "undefined") return;
  const host = window.location.hostname;
  const rootDomain =
    host && host !== "localhost" && !/^\d+\.\d+\.\d+\.\d+$/.test(host)
      ? `.${host.replace(/^www\./, "")}`
      : null;

  if (langCode === "id") {
    const expired = "Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = `googtrans=; expires=${expired}; path=/; SameSite=Lax`;
    if (host && host !== "localhost") {
      document.cookie = `googtrans=; expires=${expired}; path=/; domain=${host}; SameSite=Lax`;
    }
    if (rootDomain) {
      document.cookie = `googtrans=; expires=${expired}; path=/; domain=${rootDomain}; SameSite=Lax`;
    }
    try {
      localStorage.setItem("rhg_lang", "id");
    } catch {
      // ignore storage quota errors
    }
    return;
  }

  const value = `/id/${langCode}`;
  document.cookie = `googtrans=${value}; path=/; SameSite=Lax`;
  if (host && host !== "localhost") {
    document.cookie = `googtrans=${value}; path=/; domain=${host}; SameSite=Lax`;
  }
  if (rootDomain) {
    document.cookie = `googtrans=${value}; path=/; domain=${rootDomain}; SameSite=Lax`;
  }
  try {
    localStorage.setItem("rhg_lang", langCode);
  } catch {
    // ignore storage quota errors
  }
}

/**
 * Patches Node.prototype.removeChild and insertBefore safely so React
 * never throws NotFoundError during client-side route transitions after
 * Google Translate wraps text nodes inside <font> elements.
 */
function installGoogleTranslateReactGuard() {
  if (typeof window === "undefined" || window.__rhgDomPatched) return;
  window.__rhgDomPatched = true;

  if (typeof Node === "function" && Node.prototype) {
    const originalRemoveChild = Node.prototype.removeChild;
    Node.prototype.removeChild = function <T extends Node>(child: T): T {
      if (child.parentNode !== this) {
        return child;
      }
      return originalRemoveChild.call(this, child) as T;
    };

    const originalInsertBefore = Node.prototype.insertBefore;
    Node.prototype.insertBefore = function <T extends Node>(
      newNode: T,
      referenceNode: Node | null
    ): T {
      if (referenceNode && referenceNode.parentNode !== this) {
        return newNode;
      }
      return originalInsertBefore.call(this, newNode, referenceNode) as T;
    };
  }
}

export function GoogleTranslateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState<string>("id");
  const [isSwitching, setIsSwitching] = useState<boolean>(false);
  const scriptLoadedRef = useRef(false);

  const applyDirection = useCallback((langCode: string) => {
    if (typeof document === "undefined") return;
    const opt = LANGUAGES.find((l) => l.code === langCode) ?? LANGUAGES[0];
    document.documentElement.setAttribute("dir", opt.dir);
    document.documentElement.setAttribute("lang", opt.code);
  }, []);

  const triggerGoogleCombo = useCallback(
    (langCode: string, attempt = 0) => {
      if (typeof document === "undefined") return;
      const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");

      if (combo) {
        if (combo.value !== langCode) {
          combo.value = langCode;
        }
        combo.dispatchEvent(new Event("change", { bubbles: true }));
        setTimeout(() => setIsSwitching(false), 320);
        return;
      }

      if (attempt < 18) {
        setTimeout(() => triggerGoogleCombo(langCode, attempt + 1), 220);
      } else {
        setIsSwitching(false);
      }
    },
    []
  );

  // Initialize DOM guard, read persisted cookie, and inject Google Translate script
  useEffect(() => {
    installGoogleTranslateReactGuard();

    const cookieLang = readGoogTransCookie();
    let initialLang = cookieLang ?? "id";
    if (!cookieLang) {
      try {
        const stored = localStorage.getItem("rhg_lang");
        if (stored && VALID_CODES.has(stored) && stored !== "id") {
          initialLang = stored;
          writeGoogTransCookie(stored);
        }
      } catch {
        // ignore
      }
    }

    setCurrentLang(initialLang);
    applyDirection(initialLang);

    // Define global callback expected by Google Translate Website Element
    window.googleTranslateElementInit = () => {
      const container = document.getElementById("google_translate_element");
      if (!container || container.childElementCount > 0) return;

      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "id",
            includedLanguages: "id,en,zh-CN,ja,ko,ar",
            autoDisplay: false,
          },
          "google_translate_element"
        );

        const active = readGoogTransCookie();
        if (active && active !== "id") {
          setTimeout(() => triggerGoogleCombo(active), 350);
        }
      }
    };

    if (!scriptLoadedRef.current) {
      scriptLoadedRef.current = true;
      const existingScript = document.getElementById(
        "google-translate-element-script"
      );
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = "google-translate-element-script";
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      } else if (window.google?.translate?.TranslateElement) {
        window.googleTranslateElementInit();
      }
    }

    // Keep body top at 0px in case Google injects inline top style
    const observer = new MutationObserver(() => {
      if (document.body.style.top && document.body.style.top !== "0px") {
        document.body.style.top = "0px";
      }
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => observer.disconnect();
  }, [applyDirection, triggerGoogleCombo]);

  // Re-ensure active translation persists smoothly on client-side route navigation
  useEffect(() => {
    if (currentLang === "id") {
      applyDirection("id");
      return;
    }

    applyDirection(currentLang);
    const timer = setTimeout(() => {
      const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (combo) {
        combo.value = currentLang;
        combo.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }, 180);

    return () => clearTimeout(timer);
  }, [pathname, currentLang, applyDirection]);

  const setLanguage = useCallback(
    (langCode: string) => {
      if (!VALID_CODES.has(langCode)) return;
      if (langCode === currentLang) return;

      setIsSwitching(true);
      writeGoogTransCookie(langCode);
      setCurrentLang(langCode);
      applyDirection(langCode);

      if (langCode === "id") {
        // Cleanly restore original pristine Indonesian DOM on the same route
        const htmlEl = document.documentElement;
        const wasTranslated =
          htmlEl.classList.contains("translated-ltr") ||
          htmlEl.classList.contains("translated-rtl") ||
          Boolean(document.querySelector("font[style]"));

        if (wasTranslated) {
          window.location.reload();
          return;
        }
        setIsSwitching(false);
        return;
      }

      triggerGoogleCombo(langCode);
    },
    [currentLang, applyDirection, triggerGoogleCombo]
  );

  const activeOption = useMemo(
    () => LANGUAGES.find((l) => l.code === currentLang) ?? LANGUAGES[0],
    [currentLang]
  );

  const contextValue = useMemo(
    () => ({
      currentLang,
      activeOption,
      setLanguage,
      isSwitching,
    }),
    [currentLang, activeOption, setLanguage, isSwitching]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {/* Hidden Official Google Translate Website Element */}
      <div
        id="google_translate_element"
        className="notranslate"
        aria-hidden="true"
      />
      {children}
    </LanguageContext.Provider>
  );
}
