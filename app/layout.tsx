import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const vt323 = localFont({
  src: "./fonts/VT323-Regular.ttf", // Updated to use a .ttf file
  variable: "--font-vt323-regular",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Batsto Labs",
  description: "A collection of projects and experiments by Batsto Labs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${vt323.variable} antialiased`}>{children}</body>
    </html>
  );
}
