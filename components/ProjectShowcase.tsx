"use client";
import { useState } from "react";
import { Pointer } from "lucide-react";
import IsacreaModal from "./IsacreaModal";

export default function ProjectShowcase() {
  const [isIsaModalOpen, setIsIsaModalOpen] = useState(false);

  const techBadges = [
    {
      src: "https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white",
      alt: "Next.js",
      label: "Performance",
    },
    {
      src: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
      alt: "Tailwind CSS",
      label: "Stylisation",
    },
    {
      src: "https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black",
      alt: "Firebase",
      label: "Gestion des données",
    },
    {
      src: "https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=stripe&logoColor=white",
      alt: "Stripe",
      label: "Sécurité des paiements",
    },
    {
      src: "https://img.shields.io/badge/RGPD-Audit-2ecc71?style=for-the-badge",
      alt: "Audit RGPD",
      label: "Conformité légale",
    },
  ];

  return (
    <div className="w-full max-w-6xl px-6 py-12">
      <div
        onClick={() => setIsIsaModalOpen(true)}
        className="bg-slate-900/80 p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden group cursor-pointer hover:border-slate-700 transition-colors"
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

        {/* Mise en page en deux colonnes sur PC */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Colonne GAUCHE : Textes et Badges */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4 italic">
              Ma dernière réussite :
            </h3>

            <p className="text-slate-200 text-justify leading-relaxed">
              Mon premier projet post-diplôme est une plateforme e-commerce{" "}
              <a
                href="https://www.isacreas.fr"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                "Les Créas d'Isa"
              </a>{" "}
              complète avec gestion de stocks en temps réel et paiement
              sécurisé.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {techBadges.map((badge, index) => (
                <img
                  key={index}
                  src={badge.src}
                  alt={badge.alt}
                  title={badge.label}
                  className="h-6 hover:opacity-80 transition-opacity"
                />
              ))}
            </div>

            <div className="mt-8">
              <p className="text-sm text-slate-200 italic mb-2">
                "Créativité, Écoute, Rigueur, analyse et résultat."
              </p>
            </div>
          </div>

          {/* Colonne DROITE : L'effet visuel miniature (face aux détails techniques) */}
          <div className="relative h-48 md:h-56 flex justify-center items-center">
            {/* Image PC Miniature */}
            <div className="w-[75%] rounded-lg overflow-hidden border border-slate-700 shadow-lg transform group-hover:-rotate-1 transition-all duration-500 z-10">
              <img
                src="/page-accueil-pc.png"
                alt="Preview PC"
                className="w-full h-auto opacity-80 group-hover:opacity-100"
              />
            </div>

            {/* Image Mobile Miniature avec Label */}
            <div className="absolute bottom-0 right-0 md:right-4 z-20 group-hover:z-30">
              <div className="relative">
                {/* Label : Masqué sur PC, visible sur Mobile */}
                <div className="block md:hidden absolute -top-6 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded transform rotate-12 shadow-lg">
                  Mobile
                </div>
                {/* Image */}
                <div className="w-24 md:w-32 rounded-xl overflow-hidden border-4 border-slate-950 shadow-2xl transform translate-y-0 group-hover:-translate-y-3 group-hover:rotate-3 transition-all duration-500 bg-white">
                  <img
                    src="/page-accueil-mobile.png"
                    alt="Preview Mobile"
                    className="w-full h-auto"
                  />

                  {/* Indicateur visuel clickable pour mobile */}
                  <div className="block md:hidden absolute bottom-2 right-2 z-10">
                    {/* Cercle de pulsation en arrière-plan (effet d'onde) */}
                    <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-75"></div>

                    {/* Le bouton : Fond Orange et Main Blanche */}
                    <div className="relative bg-orange-500 rounded-full p-2 shadow-lg flex items-center justify-center border-2 border-white">
                      <Pointer className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <IsacreaModal
        isOpen={isIsaModalOpen}
        onClose={() => setIsIsaModalOpen(false)}
      />
    </div>
  );
}
