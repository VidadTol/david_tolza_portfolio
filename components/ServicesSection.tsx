import { Atom } from "lucide-react";
import Image from "next/image";

export default function ServicesSection() {
  const technologies = [
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Firebase",
    "Stripe",
    "Resend",
    "Vercel",
    "OVH",
  ];

  const services = [
    "Dépannage, Maintenance & Accompagnement de proximité",
    "Création de sites vitrines et e-commerce sur mesure",
    "Refonte haute performance vers Next.js et React",
    "Optimisation de la vitesse et du référencement (SEO Google)",
    "Intégration d'APIs (Paiements, CMS, services tiers)",
    "Responsive design & Expérience utilisateur (UX)",
    "Correction de bugs et support technique réactif",
  ];

  return (
    <section className="w-full relative overflow-hidden bg-[#0a0f1a] py-12 px-6 border-y border-blue-900/20">
      {/* Halos de fond */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.1),transparent)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.1),transparent)]"></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 uppercase tracking-widest text-white px-4">
          Mes Services
        </h2>

        <div className="w-full max-w-2xl group relative">
          {/* LE NÉON ANIME */}
          <div
            className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-[2rem] blur animate-pulse opacity-50 group-hover:opacity-100 transition duration-1000"
            style={{ animationDuration: "1s" }}
          ></div>

          <div className="relative bg-slate-900/90 p-8 md:p-14 rounded-[2rem] border border-white/10 flex flex-col items-center backdrop-blur-sm shadow-2xl overflow-hidden">
            {/* Image background */}
            <div className="absolute inset-0 opacity-60 md:opacity-40 pointer-events-none">
              <Image
                src="/Services.png"
                alt=""
                fill
                className="object-cover"
                quality={75}
              />
            </div>

            {/* Contenu */}
            <div className="relative z-10">
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center drop-shadow-[0_2px_8px_rgba(59,130,246,0.6)]">
              Développement Web & Mobile
            </h3>

            <ul className="text-white space-y-4 text-base md:text-lg w-full font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {services.map((service, index) => {
                const colors = [
                  { dot: "bg-blue-500", shadow: "shadow-[0_0_8px_#3b82f6]" },
                  { dot: "bg-purple-500", shadow: "shadow-[0_0_8px_#a855f7]" },
                  { dot: "bg-pink-500", shadow: "shadow-[0_0_8px_#ec4899]" },
                  { dot: "bg-cyan-400", shadow: "shadow-[0_0_8px_#22d3ee]" },
                  { dot: "bg-blue-400", shadow: "shadow-[0_0_8px_#60a5fa]" },
                  { dot: "bg-purple-400", shadow: "shadow-[0_0_8px_#c084fc]" },
                  { dot: "bg-pink-400", shadow: "shadow-[0_0_8px_#f472b6]" },
                  { dot: "bg-indigo-500", shadow: "shadow-[0_0_8px_#6366f1]" },
                ];
                return (
                  <li key={service} className="flex items-start gap-3">
                    <span
                      className={`mt-2 w-2 h-2 ${colors[index].dot} rounded-full flex-shrink-0 ${colors[index].shadow}`}
                    ></span>
                    <span>{service}</span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-600/20 rounded-full text-[10px] md:text-xs font-bold text-white border border-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
