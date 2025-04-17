import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import localFont from "next/font/local";
import "./globals.css";

const vt323 = localFont({
  src: "./fonts/VT323-Regular.ttf", // Updated to use a .ttf file
  variable: "--font-vt323-regular",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Batsto Labs | Matt Goldeck",
  description: "Portfolio and projects by Matt Goldeck, aka Batsto Labs.",
  openGraph: {
    title: "Batsto Labs | Matt Goldeck",
    description: "Portfolio and experiments by Matt Goldeck, aka Batsto Labs.",
    url: "https://batstolabs.com",
    siteName: "Batsto Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Batsto Labs | matt Goldeck",
    description: "Projects and portfolio of Matt Goldeck, software engineer.",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${vt323.variable} antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Matt Goldeck",
              url: "https://batstolabs.com",
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Batsto Labs",
              },
              sameAs: [
                "https://github.com/matt-goldeck",
                "https://linkedin.com/in/matt-goldeck",
              ],
            }),
          }}
        />
      </body>
      <Analytics />
    </html>
  );
}
