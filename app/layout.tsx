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

// Meta tags complets avec Open Graph et Twitter Card
export const metadata: Metadata = {
  title: "David Tolza | Développeur Web & Mobile Freelance",
  description: "Un problème ? Une solution. Je vous propose mes services de développement web et mobile sur-mesure. DWWM RNCP 5, créateur de sites modernes et performants.",
  keywords: ["développeur web", "développeur mobile", "freelance", "Next.js", "React", "web design", "e-commerce"],
  authors: [{ name: "David Tolza" }],
  creator: "David Tolza",
  
  // Open Graph pour les réseaux sociaux
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://david-tolza.fr", // À adapter avec ton domaine réel
    siteName: "David Tolza - Développeur Web & Mobile",
    title: "David Tolza | Développeur Web & Mobile Freelance",
    description: "Créez un site qui raconte votre histoire. Développement web et mobile sur-mesure, moderne et performant.",
    images: [
      {
        url: "https://david-tolza.fr/og-image.png", // À créer/adapter
        width: 1200,
        height: 630,
        alt: "David Tolza - Développeur Web & Mobile",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@david_tolza", // À adapter si tu as un compte Twitter
    creator: "@david_tolza",
    title: "David Tolza | Développeur Web & Mobile Freelance",
    description: "Développement web et mobile sur-mesure. Donnez vie à votre histoire.",
    images: ["https://david-tolza.fr/og-image.png"], // À créer/adapter
  },

  // Robots et indexation
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // Métadonnées additionnelles
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  applicationName: "Portfolio David Tolza",
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD pour le SEO structuré
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://david-tolza.fr",
        name: "David Tolza",
        url: "https://david-tolza.fr",
        image: "https://david-tolza.fr/logo2.png",
        description: "Développeur Web & Mobile Freelance - Création de sites modernes et performants",
        jobTitle: "Développeur Web et Mobile",
        email: "vidadtol31@gmail.com",
        telephone: "+33687232667",
        address: {
          "@type": "PostalAddress",
          addressCountry: "FR",
        },
        sameAs: [
          "https://github.com", // À adapter avec ton vrai profil si tu en as un
          "https://linkedin.com/in/", // À adapter
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://david-tolza.fr",
        name: "David Tolza - Développement Web",
        image: "https://david-tolza.fr/logo2.png",
        description: "Services de développement web et mobile sur-mesure",
        telephone: "+33687232667",
        email: "vidadtol31@gmail.com",
        areaServed: "FR",
        serviceType: "Web Development",
      },
      {
        "@type": "WebSite",
        url: "https://david-tolza.fr",
        name: "David Tolza - Développeur Web & Mobile",
        description: "Portfolio et services de développement web et mobile",
      },
    ],
  };

  return (
    <html lang="fr">
      <head>
        {/* Favicon - À créer et ajouter dans public/ */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://david-tolza.fr" />

        {/* Preconnect pour les polices Google */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* Theme color pour les navigateurs mobiles */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}