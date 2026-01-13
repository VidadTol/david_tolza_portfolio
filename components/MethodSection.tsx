export default function MethodSection() {
  const methods = [
    {
      number: "01",
      title: "Écoute",
      color: "blue",
      description:
        "On définit ensemble vos besoins et l'histoire que vous voulez raconter pour un résultat qui vous ressemble vraiment.",
    },
    {
      number: "02",
      title: "Création",
      color: "purple",
      description:
        "Un développement propre, moderne et optimisé pour tous les écrans, utilisant les dernières technologies du Web.",
    },
    {
      number: "03",
      title: "Suivi",
      color: "pink",
      description:
        "Je ne vous lâche pas après la livraison : mise en ligne, formation et maintenance sont assurées avec rigueur.",
    },
  ];

  const colorMap: Record<string, Record<string, string>> = {
    blue: { text: "text-blue-500", border: "group-hover:border-blue-500" },
    purple: {
      text: "text-purple-500",
      border: "group-hover:border-purple-500",
    },
    pink: { text: "text-pink-500", border: "group-hover:border-pink-500" },
  };

  return (
    <section
      className="w-full max-w-6xl px-6 py-12"
      role="region"
      aria-label="Ma méthodologie en 3 étapes"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {methods.map((method, index) => (
          <div
            key={method.number}
            className="relative group"
            role="region"
            aria-label={`Étape ${method.number}: ${method.title}`}
          >
            <div
              className={`absolute -inset-1 bg-${method.color}-600 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500`}
              aria-hidden="true"
            ></div>
            <div
              className={`relative p-8 rounded-2xl bg-slate-900/30 border border-slate-800 ${colorMap[method.color].border} transition-all duration-500 backdrop-blur-sm`}
            >
              <div
                className={`${colorMap[method.color].text} text-4xl font-bold mb-4`}
                aria-hidden="true"
              >
                {method.number}
              </div>
              <h4 className="text-xl font-bold text-white uppercase tracking-wider">
                {method.title}
              </h4>
              <p className="text-slate-400 text-sm mt-4 text-justify leading-relaxed">
                {method.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
