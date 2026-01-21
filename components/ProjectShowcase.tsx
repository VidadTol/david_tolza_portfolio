"use client";

export default function ProjectShowcase() {
  const techBadges = [
    { 
      src: "https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white",
      alt: "Next.js",
      label: "Performance"
    },
    { 
      src: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
      alt: "Tailwind CSS",
      label: "Stylisation"
    },
    { 
      src: "https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black",
      alt: "Firebase",
      label: "Gestion des données"
    },
    { 
      src: "https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=stripe&logoColor=white",
      alt: "Stripe",
      label: "Sécurité des paiements"
    },
    { 
      src: "https://img.shields.io/badge/RGPD-Audit-2ecc71?style=for-the-badge",
      alt: "Audit RGPD",
      label: "Conformité légale"
    },
  ];

  return (
    <div className="w-full max-w-6xl px-6 py-12">
      <div className="bg-slate-900/80 p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
        
        <h3 className="text-xl font-bold text-blue-400 mb-4 italic">
          Ma dernière réussite :
        </h3>
        
        <p className="text-slate-400 leading-relaxed text-center sm:text-justify">
          Le développement de A à Z du site e-commerce{" "}
          <a 
            href="https://www.isacreas.fr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            "Les Créas d'Isa"
          </a>. <br className="block sm:hidden" /> Un projet complexe,
          aujourd'hui déployé et parfaitement fonctionnel.
        </p>

        {/* Badges des technologies avec shields.io - RESPONSIVE */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 justify-start">
          {techBadges.map((badge, index) => (
            <div key={index} title={badge.label} className="inline-flex">
              <img 
                src={badge.src}
                alt={badge.alt}
                className="h-7 sm:h-8 hover:opacity-80 transition-opacity"
              />
            </div>
          ))}
        </div>

        <div className="mt-6">
          <span className="text-sm text-slate-500 italic">
            "Créativité, Écoute, Rigueur, analyse et résultat."
          </span>
        </div>
      </div>
    </div>
  );
}
