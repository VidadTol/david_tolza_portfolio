"use client";

import {
  FileText,
  Home,
  BarChart3,
  Users,
  Send,
  MessageSquareHeart,
} from "lucide-react";

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

export default function AssistanceServicesSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-white to-blue-50">
      <h2 className="text-5xl font-bold mb-16 text-center text-gray-900">
        Ce que je vous propose
      </h2>
      <div className="mb-12 bg-blue-100 rounded-lg p-6 border-2 border-blue-300">
        <p className="text-lg text-gray-700 text-center font-semibold">
          <span className="text-blue-600">Dépannage informatique</span> et <span className="text-blue-600">support technique à domicile</span> adapté à votre niveau. <span className="text-blue-600">Accompagnement numérique</span> et <span className="text-blue-600">aide aux démarches administratives en ligne</span> pour votre autonomie.
        </p>
      </div>
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
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
