import type { Metadata } from "next";
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

// MODIFIÉ : Titre et description pour ton activité
export const metadata: Metadata = {
  title: "David Tolza | Développeur Web & Mobile Freelance",
  description: "Un problème ? Une solution. Je vous propose mes services de developpement web et mobile sur-mesure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}
      >
        
        {children}
      </body>
    </html>
  );
}