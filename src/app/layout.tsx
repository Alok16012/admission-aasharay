import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AutoPopup from "@/components/AutoPopup";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Educational Consultancy in Patna | Admission Consultancy in Patna",
  description: "ADMISSION AASHARAY is a Leading Educational consultancy in Patna that can provide Medical Course in India / Abroad Colleges for your career path.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter, 'Inter', Arial, sans-serif)" }}
      >
        {children}
        <AutoPopup />
      </body>
    </html>
  );
}
