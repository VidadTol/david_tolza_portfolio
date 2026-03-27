"use client";

import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  HelpCircle,
  FileText,
  Home,
  BarChart3,
  Users,
  Send,
  MessageSquareHeart,
} from "lucide-react";
import { useState } from "react";
import Separator from "@/components/Separator";

// 2. Services reformulés avec ton approche humaine et ton expérience
const services = [
  {
    icon: FileText,
    title: "Créer et gérer un compte email",
    description:
      "Création de compte Gmail, Outlook... Je vous explique chaque étape. Zéro stress.",
  },
  {
    icon: Home,
    title: "Assistance comptes en ligne",
    description:
      "PayPal, Amazon, Accédez à vos services facilement et en sécurité.",
  },
  {
    icon: BarChart3,
    title: "Maîtriser vos mails",
    description:
      "Envoyer, recevoir, classer vos messages. Je démystifie l'email avec patience.",
  },
  {
    icon: Users,
    title: "Créer des raccourcis pratiques",
    description:
      "Smartphone ou ordinateur. Les sites que vous aimez à portée de clic. Simple et rapide.",
  },
  {
    icon: Send,
    title: "Aide navigation Internet",
    description:
      "Rechercher des informations, regarder des vidéos, parcourir les sites en toute confiance.",
  },
  {
    icon: MessageSquareHeart,
    title: "Écoute, patience et soutien",
    description:
      "Une écoute attentive pour résoudre vos points bloquants. Je vous aide à maîtriser vos outils et vos dossiers pour rester connecté à vos proches, à votre rythme.",
  },
];

// 3. FAQ modifiée pour la transparence SAP et ton approche locale
const faqs = [
  {
    question: "Combien coûte ce service et y a-t-il un crédit d'impôt ?",
    answer:
      "Premier échange gratuit pour voir comment je peux vous aider. Tarifs transparents ensuite. Mon agrément 'Services à la Personne' (SAP) est en cours pour vous permettre de bénéficier de 50% de crédit d'impôt sur les tarifs.",
  },
  {
    question: "Venez-vous à domicile ?",
    answer:
      "Oui! Je me déplace à votre domicile à Castelmaurou et dans les communes environnantes (15km). C'est plus facile et moins stressant pour vous.",
  },
  {
    question: "Quel est votre parcours ?",
    answer:
      "Mon parcours en développement web m'a apporté une méthodologie de fer : diagnostic précis et organisation fluide. Je mets cette expertise au service de votre gestion administrative pour des dossiers propres et parfaitement ordonnés.",
  },
  {
    question: "Quels documents/appareils dois-je préparer ?",
    answer:
      "Notez vos questions sur une feuille au fur et à mesure qu'elles surviennent jusqu'à notre rendez-vous. Cette liste sera notre feuille de route pour avancer avec rigueur et méthode, sans stress et sans oubli, sur vos outils numériques ou vos dossiers.",
  },
  {
    question: "Est-ce vraiment efficace contre l'isolement ?",
    answer:
      "Maîtriser internet et son smartphone, c'est rouvrir des canaux de communication qui semblaient fermés. Mon rôle est de simplifier ces outils pour que l'échange avec vos proches redevienne naturel, sans stress technique ni sentiment de dépassement.",
  },
  {
    question: "Comment vous contacter rapidement ?",
    answer:
      "Par téléphone au 06 87 23 26 67 (du lundi au vendredi, 9h-17h) ou par email : vidadtol31@gmail.com. Je vous rappelle dans les 24h maximum.",
  },
];

// 4. Communes de Castelmaurou et environs pour le SEO local
const zones = [
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
];

// 5. Composant FAQItem (inline puisqu'on est maintenant en 'use client')
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-4 border-blue-300 rounded-2xl p-8 hover:border-blue-500 transition-colors bg-white shadow-md">
      <button
        className="flex items-start justify-between w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-2xl text-gray-900">{question}</span>
        <HelpCircle
          className={`w-8 h-8 text-blue-600 flex-shrink-0 ml-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <p className="mt-6 text-xl text-gray-700 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

// 6. Page Principale
export default function AssistanceSeniorsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-start">
      {/* PHRASE EN TOP QUI DÉFILE */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-blue-500 py-6 px-4 text-center animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-white max-w-4xl mx-auto leading-relaxed uppercase tracking-wide">
          Votre Allié <br />
          <span className="text-blue-100">Numérique</span> <span className="text-white font-bold">&</span> <span className="text-blue-100">Administratif</span>
        </h1>
      </div>

      {/* HERO SECTION - Comme le portfolio dev: logo à gauche, histoire à droite */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* COLONNE GAUCHE : LOGO + NOM */}
          <div className="flex flex-col items-center space-y-6 group">
            <div className="relative">
              <div className="absolute -inset-2 lg:-inset-3 bg-blue-500 rounded-full blur-lg opacity-90 md:opacity-50 md:group-hover:opacity-90 transition duration-500 md:group-hover:blur-xl"></div>
              <Image
                src="/logo2.png"
                alt="Logo David Tolza - Assistance Technique Seniors"
                className="relative object-contain w-[160px] h-[160px] md:w-[250px] md:h-[250px]"
                width={240}
                height={240}
                priority
                quality={90}
              />
            </div>

            {/* NOM COMME DANS PORTFOLIO DEV */}
            <div className="flex flex-col items-center overflow-hidden">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-gray-900 uppercase text-center">
                  David <span className="text-blue-600">Tolza</span>
                </h2>
                <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-purple-500 to-transparent mt-2 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
              </div>
            </div>

            <div className="text-center">
            </div>
          </div>

          {/* COLONNE DROITE : TEXTE + BOUTONS */}
          <div className="lg:col-span-2 space-y-8">
            <div className="text-gray-700 text-lg md:text-xl space-y-4">
              <p className="text-lg leading-relaxed">
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
                <Phone className="w-6 h-6 mr-3" /> APPELER MAINTENANT
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

      <Separator />

      {/* POURQUOI CETTE SERVICE? */}
 {/* POURQUOI CE SERVICE ? */}
<section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h2 className="text-5xl font-bold mb-16 text-center text-gray-900">
    Pourquoi faire appel à moi ?
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Bloc 1 */}
    <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
      <h3 className="text-xl font-bold mb-4 text-red-600 flex items-center">
        ❌ C'est compliqué
      </h3>
      <ul className="text-base text-gray-700 list-disc list-inside space-y-1 mb-4">
        <li>L'informatique vous fait peur ?</li>
        <li>Les termes semblent bizarres ?</li>
        <li>Peur de faire une erreur ?</li>
      </ul>
      <p className="text-sm text-gray-600 italic border-t border-red-200 pt-3">
        Je parle votre langue pour tout expliquer simplement.
      </p>
    </div>

    {/* Bloc 2 */}
    <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
      <h3 className="text-xl font-bold mb-4 text-red-600 flex items-center">
        ❌ Vous êtes seul
      </h3>
      <ul className="text-base text-gray-700 list-disc list-inside space-y-1 mb-4">
        <li>Personne à qui poser vos questions ?</li>
        <li>Besoin d'un interlocuteur unique ?</li>
        <li>Envie d'avancer à votre rythme ?</li>
      </ul>
      <p className="text-sm text-gray-600 italic border-t border-red-200 pt-3">
        Je suis là pour vous, avec patience et sans jugement.
      </p>
    </div>

    {/* Bloc 3 */}
    <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
      <h3 className="text-xl font-bold mb-4 text-red-600 flex items-center">
        ❌ Sentiment d'isolement
      </h3>
      <ul className="text-base text-gray-700 list-disc list-inside space-y-1 mb-4">
        <li>Internet semble inaccessible ?</li>
        <li>Difficulté à joindre vos proches ?</li>
        <li>Peur d'être dépassé ?</li>
      </ul>
      <p className="text-sm text-gray-600 italic border-t border-red-200 pt-3">
        Je ferme ce fossé pour vous reconnecter au monde.
      </p>
    </div>
  </div>

  <div className="mt-12 text-center bg-green-50 rounded-xl p-6 border-2 border-green-300">
    <p className="text-xl text-green-700 font-bold flex items-center justify-center">
      <CheckCircle2 className="w-6 h-6 mr-3 text-green-600" /> 
      VOUS POUVEZ Y ARRIVER. JE VOUS AIDE !
    </p>
  </div>
</section>

      <Separator />

      {/* SERVICES PROPOSÉS */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-white to-blue-50">
        <h2 className="text-5xl font-bold mb-16 text-center text-gray-900">
          Ce que je vous propose
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-10 border-4 border-blue-300 hover:border-blue-500 hover:shadow-xl transition-all"
              >
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-8 border-4 border-blue-400">
                  <IconComponent className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <Separator />


      {/* FAQ */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-white to-blue-50">
        <h2 className="text-5xl font-bold mb-16 text-center text-gray-900">
          Questions souvent posées
        </h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      <Separator />

      {/* CTA FINAL */}
      <section className="w-full bg-gradient-to-b from-blue-600 to-blue-700 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-10 text-white">
            Parlons ensemble!
          </h2>
          <p className="text-2xl text-white mb-16 max-w-2xl mx-auto leading-relaxed font-semibold">
            Premier appel gratuit. Pas d'engagement. Juste une discussion pour
            voir comment je peux vous aider.
          </p>
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
            <a
              href="tel:+33687232667"
              className="flex-1 flex items-center justify-center bg-white text-blue-700 rounded-2xl p-8 hover:shadow-2xl transition-all font-bold text-2xl"
            >
              <Phone className="w-8 h-8 mr-4" />
              06 87 23 26 67
            </a>
            <a
              href="mailto:vidadtol31@gmail.com"
              className="flex-1 flex items-center justify-center bg-white text-blue-700 rounded-2xl p-8 hover:shadow-2xl transition-all font-bold text-2xl"
            >
              <Mail className="w-8 h-8 mr-4" />
              vidadtol31@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
