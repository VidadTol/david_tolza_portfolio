export default function ProjectShowcase() {
  return (
    <div className="w-full max-w-6xl px-6 py-8">
      <div className="bg-slate-900/80 p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
        <h3 className="text-xl font-bold text-blue-400 mb-4 italic">
          Ma dernière réussite :
        </h3>
        <p className="text-slate-400 leading-relaxed text-justify">
          Le développement de A à Z du site e-commerce{" "}
          <strong>"Les Créas d'Isa"</strong>. Un projet complexe,
          aujourd'hui déployé et parfaitement fonctionnel.
        </p>
        <div className="mt-6">
          <span className="text-sm text-slate-500 italic">
            "Créativité, Écoute, Rigueur, analyse et résultat."
          </span>
        </div>
      </div>
    </div>
  );
}
