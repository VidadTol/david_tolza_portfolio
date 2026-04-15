"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function AssistanceHeroSection() {
  return (
    <>
      {/* PHRASE EN TOP QUI DÉFILE */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-blue-500 py-6 px-4 text-center animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-white max-w-4xl mx-auto leading-relaxed uppercase tracking-wide">
          Votre Allié <br />
          <span className="text-blue-100">Numérique</span> <span className="text-white font-bold">&</span> <span className="text-blue-100">Administratif</span>
        </h1>
      </div>

      {/* HERO SECTION - Logo à gauche, histoire à droite */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* COLONNE GAUCHE : LOGO + NOM */}
          <div className="flex flex-col items-center space-y-6 group">
            <div className="relative">
              <div className="absolute -inset-2 lg:-inset-3 bg-blue-500 rounded-full blur-lg opacity-90 md:opacity-50 md:group-hover:opacity-90 transition duration-500 md:group-hover:blur-xl"></div>
              <Image
                src="/logo2.png"
                alt="Logo David Tolza - Assistance informatique à Castelmaurou"
                className="relative object-contain w-[160px] h-[160px] md:w-[250px] md:h-[250px]"
                width={240}
                height={240}
                priority
                quality={90}
              />
            </div>

            {/* NOM */}
            <div className="flex flex-col items-center overflow-hidden">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-gray-900 uppercase text-center">
                  David <span className="text-blue-600">Tolza</span>
                </h2>
                <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-purple-500 to-transparent mt-2 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : TEXTE + BOUTONS */}
          <div className="lg:col-span-2 space-y-8">
            <div className="text-gray-700 text-lg md:text-xl space-y-4 text-justify">
              <p className="text-lg leading-relaxed text-justify">
                Après un parcours de{" "}
                <span className="font-semibold text-blue-600">
                  22 ans
                </span>{" "}
                marqué par l'exigence et la fiabilité, j'ai choisi de me réorienter vers le Développement Web (Diplômé RNCP 5).
              </p>
              <p className="text-lg leading-relaxed">
                Au fil de mes premières interventions, j'ai découvert une véritable vocation : mettre mes compétences techniques au profit de l'humain. J'éprouve un réel épanouissement à accompagner ceux qui se sentent en détresse face à la complexité du numérique.
              </p>
              <p className="text-lg leading-relaxed">
                <span className="font-semibold text-blue-600">Assistance informatique à Castelmaurou</span>, <span className="font-semibold text-blue-600">support technique à domicile</span>, et <span className="font-semibold text-blue-600">aide administrative</span> pour vous rester connecté : c'est ma mission.
              </p>
              <p className="text-lg leading-relaxed">
                Pour moi, organiser un dossier administratif ou maîtriser son smartphone demande la même précision qu'un code bien écrit : chaque étape doit être simple, logique et rassurante.
              </p>
              <p className="font-semibold text-xl text-gray-900 mt-6">
                Ma méthode pour vous accompagner :
              </p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-3">•</span>
                  <span><span className="font-bold">Une ligne de conduite claire :</span> Avant notre rendez-vous, je vous invite à lister chaque point ou difficulté rencontrée. Cette liste devient notre fil rouge pour avancer sans rien oublier.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-3">•</span>
                  <span><span className="font-bold">La rigueur du développeur :</span> J'apporte des solutions structurées pour vos démarches sur Internet et mobile, en traitant chaque problème avec méthode.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-3">•</span>
                  <span><span className="font-bold">La bienveillance :</span> Je vous transmets les clés de votre autonomie, à votre rythme et sans jargon technique, pour que l'outil numérique ne soit plus un obstacle.</span>
                </li>
              </ul>
              <p className="font-bold text-xl text-blue-600 mt-6">
                Transformons ensemble vos outils numériques en alliés du quotidien.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <a
                href="tel:+33687232667"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-2xl font-bold text-xl transition-colors flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Phone className="w-6 h-6 mr-3" /> APPELER MAINTENANT <br /> 06 87 23 26 67
              </a>
              <a
                href="mailto:vidadtol31@gmail.com"
                className="border-4 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-5 rounded-2xl font-bold text-xl transition-colors flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Mail className="w-6 h-6 mr-3" /> ENVOYER MESSAGE
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
