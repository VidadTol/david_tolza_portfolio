import { Atom } from "lucide-react";

export default function ServicesSection() {
  const technologies = [
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Firebase",
    "OVH",
  ];

  const services = [
    "Création de sites vitrines et e-commerce",
    "Refonte et optimisation de sites existants",
    "Applications modernes",
  ];

  return (
    <section className="w-full relative overflow-hidden bg-[#0a0f1a] py-24 px-6 border-y border-blue-900/20">
      {/* Halos de fond */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.1),transparent)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.1),transparent)]"></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 uppercase tracking-widest text-white px-4">
          Mes Services
        </h2>

        <div className="w-full max-w-2xl group relative">
          {/* LE NÉON QUI ANIME TOUT SEUL */}
          <div
            className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-[2rem] blur animate-pulse opacity-50 group-hover:opacity-100 transition duration-1000"
            style={{ animationDuration: "1s" }}
          ></div>

          <div className="relative bg-slate-900/90 p-8 md:p-14 rounded-[2rem] border border-white/10 flex flex-col items-center backdrop-blur-sm shadow-2xl">
            <div className="mb-6 p-4 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-lg">
              <Atom className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
              Développement Web & Mobile
            </h3>

            <ul className="text-slate-300 space-y-4 text-base md:text-xl w-full">
              {services.map((service, index) => {
                const colors = [
                  { dot: "bg-blue-500", shadow: "shadow-[0_0_8px_#3b82f6]" },
                  {
                    dot: "bg-purple-500",
                    shadow: "shadow-[0_0_8px_#a855f7]",
                  },
                  { dot: "bg-pink-500", shadow: "shadow-[0_0_8px_#ec4899]" },
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
                  className="px-3 py-1 bg-slate-950/50 rounded-full text-[10px] md:text-xs font-bold text-blue-300 border border-slate-800"
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
