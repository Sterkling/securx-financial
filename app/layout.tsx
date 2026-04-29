import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SecurX Financial - Free ATM Placement for Your Business",
  description: "Fast ATM installs, cash loading, and 24/7 support — zero cost to your business. Serving London, Woodstock, Kitchener, and Southwestern Ontario.",
  keywords: "ATM placement, ATM rental, ATM service Ontario, cash machine, business ATM, London ON",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
