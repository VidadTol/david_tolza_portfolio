"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import ProjectDetailsIsa from './ProjectDetailsIsa';

interface IsacreaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IsacreaModal({ isOpen, onClose }: IsacreaModalProps) {
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
                    Les Créas d'Isa
                  </h2>
                  <p className="text-blue-400 text-sm md:text-base mt-1">
                    E-commerce sur-mesure avec gestion avancée
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
                <ProjectDetailsIsa />

                {/* Section 1: Admin Dashboard */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                    <h3 className="text-2xl font-bold text-white">
                      Système de Gestion (Admin)
                    </h3>
                  </div>

                  {/* NOUVELLE STRUCTURE : Effet Flottant Section 1 */}
                  <div className="relative mt-8 mb-16 flex justify-start items-center">
                    {/* Image Desktop */}
                    <div className="w-[85%] rounded-xl overflow-hidden border border-slate-700 shadow-xl bg-slate-950 transform -rotate-1">
                      <Image
                        src="/dashboard-pc.png"
                        alt="Dashboard Admin Desktop"
                        width={1000}
                        height={600}
                        className="w-full h-auto"
                      />
                    </div>
                    {/* Image Mobile */}
                    <div className="absolute -bottom-8 right-0 w-[22%] min-w-[120px] rounded-2xl overflow-hidden border-4 border-slate-900 shadow-2xl z-10 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                      <Image
                        src="/dashboard-mobile.png"
                        alt="Dashboard Admin Mobile"
                        width={300}
                        height={500}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 md:p-6 mt-6">
                    <p className="text-slate-300 text-justify leading-relaxed">
                      <span className="text-orange-400 font-semibold">
                        Problème :
                      </span>{" "}
                      La vente de pièces uniques nécessite une précision absolue
                      : une double commande sur un même article est critique
                      pour la réputation de l'artisan
                    </p>
                    <p className="text-slate-300 text-justify leading-relaxed mt-3">
                      <span className="text-blue-400 font-semibold">
                        Solution :
                      </span>{" "}
                      Architecture "Real-time" via Firebase avec verrouillage
                      des stocks en millisecondes dès la validation Stripe. Côté
                      interface, le produit bascule automatiquement en mode
                      "Victime de son succès" : le bouton d'achat est
                      instantanément désactivé et remplacé par la mention
                      "Épuisé", rendant toute commande impossible.
                    </p>
                  </div>
                </motion.section>

                {/* Section 2: Analytics */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-orange-500 rounded-full" />
                    <h3 className="text-2xl font-bold text-white">
                      Business Intelligence (Data)
                    </h3>
                  </div>

                  {/* NOUVELLE STRUCTURE DUO POUR LES STATS */}
                  <div className="relative mt-8 mb-16 flex justify-start items-center">
                    {/* Image Desktop Stats */}
                    <div className="w-[85%] rounded-xl overflow-hidden border border-slate-700 shadow-xl bg-slate-950 transform -rotate-1">
                      <Image
                        src="/stats-analytics.png"
                        alt="Analytics Desktop"
                        width={1000}
                        height={600}
                        className="w-full h-auto"
                      />
                    </div>

                    {/* Image Mobile Stats */}
                    <div className="absolute -bottom-8 right-0 w-[22%] min-w-[120px] rounded-2xl overflow-hidden border-4 border-slate-900 shadow-2xl z-10 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                      <Image
                        src="/stats-analytics-mobile.png"
                        alt="Analytics Mobile"
                        width={300}
                        height={500}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 md:p-6 mt-6">
                    <p className="text-slate-300 text-justify leading-relaxed">
                      <span className="text-orange-400 font-semibold">
                        Besoin :
                      </span>{" "}
                      Piloter son activité financière en temps réel.
                    </p>
                    <p className="text-slate-300 text-justify leading-relaxed mt-3">
                      <span className="text-blue-400 font-semibold">
                        Solution :
                      </span>{" "}
                      Développement d'un moteur d'agrégation de données
                      sur-mesure. Le système traite et ventile automatiquement
                      chaque transaction pour isoler le Chiffre d'Affaires net,
                      les frais de port collectés et les volumes de ventes. Les
                      indicateurs sont recalculés en temps réel à chaque
                      commande, permettant un pilotage comptable rigoureux au
                      mois ou à l'année.
                    </p>
                  </div>
                </motion.section>

                {/* Section 3: Boutique UX */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-blue-500 rounded-full" />
                    <h3 className="text-2xl font-bold text-white">
                      Interface Boutique (UX)
                    </h3>
                  </div>

                  {/* NOUVELLE STRUCTURE : Effet Flottant Section 3 */}
                  <div className="relative mt-8 mb-16 flex justify-start items-center">
                    {/* Image Desktop */}
                    <div className="w-[85%] rounded-xl overflow-hidden border border-slate-700 shadow-xl bg-slate-950 transform -rotate-1">
                      <Image
                        src="/shop-desktop.png"
                        alt="Boutique Desktop"
                        width={1000}
                        height={600}
                        className="w-full h-auto"
                      />
                    </div>
                    {/* Image Mobile */}
                    <div className="absolute -bottom-8 right-0 w-[22%] min-w-[120px] rounded-2xl overflow-hidden border-4 border-slate-900 shadow-2xl z-10 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                      <Image
                        src="/shop-mobile.png"
                        alt="Boutique Mobile"
                        width={300}
                        height={500}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 md:p-6 mt-6">
                    <p className="text-slate-300 text-justify leading-relaxed">
                      <span className="text-blue-400 font-semibold">
                        Focus :
                      </span>{" "}
                      Une vitrine ultra-fluide où la performance technique sert
                      l'esthétique. Chaque produit est rigoureusement catalogué
                      et chaque photo bénéficie d'une double compression
                      intelligente. Ce procédé garantit un affichage instantané
                      et une qualité visuelle parfaite, tout en optimisant
                      l'espace de stockage et la rapidité de navigation sur
                      mobile.
                    </p>
                  </div>
                </motion.section>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="border-t border-slate-700 pt-8 mt-8"
                >
                  <h4 className="text-lg font-bold text-white mb-4">
                    Technologies utilisées
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Next.js",
                      "Stripe",
                      "Firebase",
                      "Resend",
                      "TypeScript",
                      "Tailwind CSS",
                      "Vercel",
                      "OVH",
                      "React",
                      "Framer Motion",
                      "Lucide React",
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
                  <a
                    href="https://www.isacreas.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105"
                  >
                    Visiter le site →
                  </a>
                </motion.div>
                
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
