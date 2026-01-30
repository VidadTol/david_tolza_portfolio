"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import ProjectDetailsMotivSport from "./ProjectDetailsMotivSport";

interface MotivSportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SlideData {
  id: number;
  title: string;
  description: string;
  srcDesktop?: string;
  gradientFrom: string;
  gradientTo: string;
}

export default function MotivSportModal({
  isOpen,
  onClose,
}: MotivSportModalProps) {
  const slides: SlideData[] = [
    {
      id: 1,
      title: "Dashboard",
      description:
        "Gestion des widgets (météo, flux d'activité) via Firestore. Une interface centralisée offrant à chaque utilisateur un récapitulatif complet de son écosystème en temps réel.",
      srcDesktop: "/dashboard.png",

      gradientFrom: "from-blue-500",
      gradientTo: "to-purple-500",
    },
    {
      id: 2,
      title: "Logique de Création",
      description:
        "Formulaire complexe avec validation des types de sport et créneaux. Système intelligent de vérification des données pour assurer la cohérence des événements créés.",
      srcDesktop: "/createEvent.png",

      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-500",
    },
    {
      id: 3,
      title: "Chat Temps Réel",
      description:
        "Messagerie interactive en direct : un système de chat synchronisé en temps réel pour une communication instantanée entre les membres de la communauté.",
      srcDesktop: "/chat.png",

      gradientFrom: "from-pink-500",
      gradientTo: "to-orange-500",
    },
    {
      id: 4,
      title: "Exploration des Événements",
      description:
        "Système de gestion d'activités : consultation des événements sportifs par niveau et secteur, avec inscription simplifiée et suivi du nombre de participants en temps réel.",
      srcDesktop: "/events.png",

      gradientFrom: "from-yellow-500",
      gradientTo: "to-green-500",
    },
  ];
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          >
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              {/* Header */}
              <div className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 px-6 md:px-8 py-6 flex items-center justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Motiv'Sport
                  </h2>
                  <p className="text-blue-400 text-sm md:text-base mt-1">
                    Communauté sportive
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="ml-4 p-2 bg-slate-800/50 hover:bg-red-500/20 border border-slate-700 hover:border-red-500 rounded-lg transition-all duration-200 flex-shrink-0"
                  aria-label="Fermer la modale"
                >
                  <X className="w-6 h-6 text-slate-400 hover:text-red-400 transition-colors" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-10">
                {/* ProjectDetailsIsa - Placed at the top */}
                <ProjectDetailsMotivSport />
                
                {/* Render all 6 slides */}
                {slides.map((slide, index) => (
                  <motion.section
                    key={slide.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-1 h-8 bg-gradient-to-b ${slide.gradientFrom} ${slide.gradientTo} rounded-full`}
                      />
                      <h3 className="text-2xl font-bold text-white">
                        {slide.title}
                      </h3>
                    </div>

                    {/* Image Section */}
                    {slide.srcDesktop && (
                      <div className="relative mt-8 mb-6 flex justify-center items-center">
                        {/* Image Desktop */}
                        <div className="w-full md:w-[40%] rounded-xl overflow-hidden border border-slate-700 shadow-xl bg-slate-950 transform -rotate-1 hover:shadow-2xl transition-all duration-300">
                          <Image
                            src={slide.srcDesktop}
                            alt={`${slide.title} Desktop`}
                            width={400}
                            height={240}
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    )}

                    {/* Description Box */}
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 md:p-6 mt-6">
                      <p className="text-slate-300 text-justify leading-relaxed">
                        <span className="text-blue-400 font-semibold">
                          Détail technique :
                        </span>{" "}
                        {slide.description}
                      </p>
                    </div>
                  </motion.section>
                ))}

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="border-t border-slate-700 pt-8 mt-8"
                >
                  <h4 className="text-lg font-bold text-white mb-4">
                    Stack Technologique
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Next.js",
                      "Firebase",
                      "TypeScript",
                      "Tailwind CSS",
                      "React",                       
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300 hover:border-blue-500 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center pt-4"
                >
                  <p className="text-slate-400 mb-4">
                    La technologie au service du sport : un outil robuste pour
                    dynamiser le lien social.
                  </p>
                  <button
                    onClick={onClose}
                    className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105"
                  >
                    Retour au portfolio ←
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
