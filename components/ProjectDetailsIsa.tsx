import { Rocket, ShieldCheck, Mail, Database, LayoutDashboard, Globe } from "lucide-react";

const ProjectDetailsIsa = () => {
  // La classe du dégradé réutilisable
  const gradientClass = "bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-bold";

  const points = [
    {
      title: "Interface Boutique (UX/UI)",
      desc: "Design moderne et 100% responsive, optimisé pour la conversion sur smartphone et tablette.",
      icon: <Rocket className="text-blue-400" size={20} />
    },
    {
      title: "Hébergement & Performance (Vercel)",
      desc: "Déploiement sur Vercel pour une vitesse de chargement optimale et une stabilité maximale.",
      icon: <Globe className="text-blue-400" size={20} />
    },
    {
      title: "Paiements Sécurisés (Stripe)",
      desc: "Intégration de Stripe pour des transactions fluides et une sécurité bancaire garantie.",
      icon: <ShieldCheck className="text-blue-400" size={20} />
    },
    {
      title: "Emails Automatisés (Resend)",
      desc: "Notifications emails automatiques pour confirmer les achats et assurer un suivi client pro.",
      icon: <Mail className="text-blue-400" size={20} />
    },
    {
      title: "Gestion des Stocks (Firebase)",
      desc: "Verrouillage intelligent en temps réel via Firebase pour éviter les erreurs sur les pièces uniques.",
      icon: <Database className="text-blue-400" size={20} />
    },
    {
      title: "Pilotage via Dashboard",
      desc: "Interface d'administration privée pour gérer les produits, les stocks et les statistiques.",
      icon: <LayoutDashboard className="text-blue-400" size={20} />
    }
  ];

  return (
    <div className="mt-2">
      {/* Titre Principal avec Dégradé */}
      <h3 className={`mb-4 text-2xl ${gradientClass}`}>
        Écosystème E-commerce complet
      </h3>
      
      <p className="mb-8 text-white leading-relaxed">
        Plus qu’un simple site, j’ai conçu une solution robuste, de la gestion du domaine jusqu’à l’automatisation des ventes.
      </p>

      <div className="grid gap-8 sm:grid-cols-2">
        {points.map((item, index) => (
          <div key={index} className="flex gap-4 group">
            <div className="mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
              {item.icon}
            </div>
            <div>
              {/* Titres des points avec Dégradé */}
              <h4 className={`${gradientClass} text-lg mb-1`}>
                {item.title}
              </h4>
              <p className="text-sm text-white leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Box de Résultat en bas */}
      <div className="mt-10 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-1">
        <div className="bg-[#0a0a0a] rounded-lg p-4">
          <p className="text-sm text-white italic">
            <strong className={gradientClass}>Résultat :</strong> Un site performant, sécurisé et entièrement automatisé pour permettre au vendeur de se concentrer sur ses créations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsIsa;