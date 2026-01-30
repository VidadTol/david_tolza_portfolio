import { Users, Calendar, MessageSquare, ShieldCheck, Zap, Layout } from "lucide-react";

const ProjectDetailsMotiv = () => {
  // On reprend EXACTEMENT le même dégradé que pour les Créas d'Isa
  const gradientClass = "bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-bold";

  const points = [
    {
      title: "Mise en Relation Sociale",
      desc: "Système de profils et d'amis pour connecter les passionnés selon leur niveau et sport favori.",
      icon: <Users className="text-blue-400" size={20} />
    },
    {
      title: "Gestion d'Événements",
      desc: "CRUD complet pour organiser, rejoindre et gérer des sessions sportives en quelques clics.",
      icon: <Calendar className="text-blue-400" size={20} />
    },
    {
      title: "Messagerie Instantanée",
      desc: "Chat en temps réel intégré via Firebase pour faciliter la logistique entre participants.",
      icon: <MessageSquare className="text-blue-400" size={20} />
    },
    {
      title: "Sécurité & Permissions",
      desc: "Contrôle strict des accès : seul l'organisateur peut modifier ou supprimer son événement.",
      icon: <ShieldCheck className="text-blue-400" size={20} />
    },
    {
      title: "Architecture Next.js",
      desc: "Optimisation des performances (SSR/SSG) pour un rendu fluide sur mobile et desktop.",
      icon: <Zap className="text-blue-400" size={20} />
    },
    {
      title: "Dashboard Utilisateur",
      desc: "Vue centralisée pour suivre son planning sportif et gérer ses créations personnelles.",
      icon: <Layout className="text-blue-400" size={20} />
    }
  ];

  return (
    <div className="mt-2">
      <h3 className={`mb-4 text-2xl ${gradientClass}`}>
        Écosystème Sportif Communautaire
      </h3>
      
      <p className="mb-8 text-gray-400 leading-relaxed">
        Motiv'Sport transforme la pratique individuelle en expérience collective grâce à une stack technologique réactive et une interface centrée sur l'humain.
      </p>

      <div className="grid gap-8 sm:grid-cols-2">
        {points.map((item, index) => (
          <div key={index} className="flex gap-4 group">
            <div className="mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
              {item.icon}
            </div>
            <div>
              <h4 className={`${gradientClass} text-lg mb-1`}>
                {item.title}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Box de résultat avec le même dégradé bleu/violet en bordure */}
      <div className="mt-10 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-1">
        <div className="bg-[#0a0a0a] rounded-lg p-4 text-center">
          <p className="text-sm text-gray-300 italic">
            <strong className={gradientClass}>Résultat :</strong> Une application robuste validée par des tests unitaires (Jest) et des audits de performance Lighthouse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsMotiv;