import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AnyFikra",
  description: "Discover innovative apps and solutions from AnyFikra",
  keywords: ["mobile apps", "iOS", "Android", "productivity", "finance", "relationships"],
  authors: [{ name: "AnyFikra" }],
  creator: "AnyFikra",
  publisher: "AnyFikra",
  icons: {
    icon: "/static/icon.ico",
    shortcut: "/static/icon.ico",
    apple: "/static/logo.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://anyfikra.com"),
  openGraph: {
    title: "AnyFikra",
    description: "Discover innovative apps and solutions from AnyFikra",
    url: "https://anyfikra.com",
    siteName: "AnyFikra",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/static/logo.png",
        width: 1200,
        height: 630,
        alt: "AnyFikra Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AnyFikra",
    description: "Discover innovative apps and solutions from AnyFikra",
    images: ["/static/logo.png"],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
