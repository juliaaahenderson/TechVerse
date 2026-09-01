import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechVerse | Premium E-Commerce & Bitdefender Security Hub",
  description: "Explore elite engineering hardware combined with Bitdefender's premium cybersecurity threat shield protection.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/TechVerse favicon.png", sizes: "512x512", type: "image/png" },
      { url: "/TechVerse favicon.png", sizes: "192x192", type: "image/png" },
      { url: "/TechVerse favicon.png", sizes: "96x96", type: "image/png" },
      { url: "/TechVerse favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/TechVerse favicon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: [
      { url: "/TechVerse favicon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/TechVerse favicon.png", sizes: "512x512", type: "image/png" },
      { url: "/TechVerse favicon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/TechVerse favicon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans">
        <AppProvider>
          <Navbar />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
