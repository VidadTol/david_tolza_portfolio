import type { Metadata, Viewport } from "next";
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

// Viewport config - séparé de metadata
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Meta tags complets avec Open Graph et Twitter Card
export const metadata: Metadata = {
  title: "David Tolza | Développeur Web & Mobile Freelance à Castelmaurou",
  description:
    "Créez un site qui raconte votre histoire. Développement web et mobile sur-mesure, moderne et performant.",
  keywords: [
    "développeur web Castelmaurou",
    "développeur web Toulouse",
    "développeur mobile Castelmaurou",
    "création site internet 31",
    "freelance",
    "Next.js",
    "React",
    "web design",
    "e-commerce",
  ],
  authors: [{ name: "David Tolza" }],
  creator: "David Tolza",

  // Open Graph pour les réseaux sociaux
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://david-tolza.vercel.app/",
    siteName: "David Tolza - Développeur Web & Mobile",
    title: "David Tolza | Développeur Web & Mobile Freelance à Castelmaurou",
    description:
      "Créez un site qui raconte votre histoire. Développement web et mobile sur-mesure, moderne et performant.",
  },
  // Twitter Card

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
        "@id": "https://david-tolza.vercel.app/",
        name: "David Tolza",
        url: "https://david-tolza.vercel.app/",
        image: "https://david-tolza.vercel.app/logo2.png",
        description:
          "Développeur Web & Mobile Freelance à Castelmaurou - Création de sites modernes et performants",
        jobTitle: "Développeur Web et Mobile",
        email: "vidadtol31@gmail.com",
        telephone: "+33687232667",
        address: {
          "@type": "PostalAddress",
          "addressLocality": "Castelmaurou", 
          "postalCode": "31180",
          addressCountry: "FR",
        },
        sameAs: ["https://github.com/VidadTol"],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://david-tolza.vercel.app/",
        name: "David Tolza - Développement Web",
        image: "https://david-tolza.vercel.app/logo2.png",
        description: "Services de développement web et mobile sur-mesure",
        telephone: "+33687232667",
        email: "vidadtol31@gmail.com",
        "priceRange": "€€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Castelmaurou", 
          "postalCode": "31180",             
          "addressCountry": "FR"
        },
        areaServed: [
          "Castelmaurou",
          "Lapeyrouse-Fossat",
          "Saint-Geniès-Bellevue",
          "Pechbonnieu",
          "Gratentour",
          "Saint-Loup-Cammas",
          "Aucamville",
          "Fonbeauzard",
          "Saint-Alban",
          "Bruguières",
          "Fenouillet",
          "Saint-Jean",
          "L'Union",
          "Rouffiac-Tolosan",
          "Montrabé",
          "Beaupuy",
          "Verfeil",
          "Garidech",
          "Montastruc-la-Conseillère",
          "Saint-Sulpice-la-Pointe",
          "Buzet-sur-Tarn",
          "Toulouse",
        ],
        serviceType: "Web Development",
      },
      {
        "@type": "WebSite",
        url: "https://david-tolza.vercel.app/",
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
        <link rel="canonical" href="https://david-tolza.vercel.app/" />

        {/* Preconnect pour les polices Google */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

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
