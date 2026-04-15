"use client";

import { useState } from "react";
import { HelpCircle } from "lucide-react";

const faqs: { question: string; answer: string }[] = [
  {
    question: "Combien cela coûte-t-il ?",
    answer:
      "Premier contact téléphonique gratuit, sans engagement.\n\nMes interventions sont facturées 50 € par heure.\n\nPas de frais caché, pas de devis complexe. Vous payez pour un résultat concret.",
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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-4 border-blue-300 rounded-2xl p-8 hover:border-blue-500 transition-colors bg-white shadow-md">
      <button
        className="flex items-start justify-between w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-lg md:text-2xl text-gray-900">{question}</span>
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

export default function AssistanceFAQSection() {
  return (
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
  );
}
