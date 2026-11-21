import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { GoogleTranslateProvider } from "@/components/GoogleTranslateProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingConcierge } from "@/components/FloatingConcierge";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rawinala Haridra Global — Terang Bagi Kemanusiaan, Kekuatan Bagi Indonesia",
    template: "%s | Rawinala Haridra Global",
  },
  description:
    "Situs resmi organisasi kemasyarakatan dan sosial Rawinala Haridra Global. Merawat dialog lintas agama, solidaritas kemanusiaan, dan penguatan persatuan kebangsaan Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${cormorant.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Global script fallbacks for CJK (Mandarin, Japanese, Korean) & Arabic */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;600;700&family=Noto+Sans+KR:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;600;700&family=Noto+Serif+JP:wght@500;700&family=Noto+Serif+KR:wght@500;700&family=Noto+Serif+SC:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-alabaster text-ink antialiased flex flex-col">
        <GoogleTranslateProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingConcierge />
        </GoogleTranslateProvider>
      </body>
    </html>
  );
}
