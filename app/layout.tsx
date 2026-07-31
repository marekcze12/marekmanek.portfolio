import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();

  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host");

  const protocol =
    requestHeaders.get("x-forwarded-proto") ?? "https";

  const origin = host
    ? `${protocol}://${host}`
    : "http://localhost:3000";

  return {
    title: "Marek Maněk — junior frontend vývojář",
    description:
      "Portfolio Marka Maňka, studenta aplikované informatiky. React, JavaScript a první projekty z praxe i školy.",

    alternates: {
      canonical: "/",
      languages: {
        "cs-CZ": "/",
        en: "/en",
      },
    },

    openGraph: {
      title: "Marek Maněk — junior frontend vývojář",
      description:
        "React, JavaScript a první projekty z praxe i školy.",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1200,
          height: 630,
          alt: "Portfolio Marka Maňka",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      images: [`${origin}/og.png`],
    },

    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}