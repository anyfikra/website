import type { Metadata } from "next";
import {
  Caveat,
  Fraunces,
  Hanken_Grotesk,
  JetBrains_Mono,
  Reem_Kufi,
} from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { THEME_SCRIPT } from "@/lib/theme";
import "./globals.css";

// Only set in Vercel's Production environment, so local and preview visits
// stay out of the analytics data.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// SOFT rounds the serifs; opsz lets large headlines use the sharper cuts.
const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
  variable: "--font-display",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Only used for the word فكرة.
const kufi = Reem_Kufi({
  subsets: ["arabic"],
  variable: "--font-kufi",
  display: "swap",
});

// Only used for the notes on DeluluJar's page.
const hand = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

const DESCRIPTION =
  "AnyFikra is an independent studio of one, turning small ideas into apps, tools and open-source libraries.";

export const metadata: Metadata = {
  title: {
    default: "AnyFikra — Every dream starts as a fikra",
    template: "%s — AnyFikra",
  },
  description: DESCRIPTION,
  keywords: [
    "AnyFikra",
    "indie app studio",
    "mobile apps",
    "open source",
    "React Native",
    "macOS",
  ],
  authors: [{ name: "AnyFikra" }],
  creator: "AnyFikra",
  publisher: "AnyFikra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://anyfikra.com"),
  openGraph: {
    title: "AnyFikra",
    description: DESCRIPTION,
    url: "https://anyfikra.com",
    siteName: "AnyFikra",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AnyFikra",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning: THEME_SCRIPT sets data-theme on <html> before
    // React hydrates, so the attribute legitimately differs from the server's.
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} ${kufi.variable} ${hand.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2578516293530627"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}
