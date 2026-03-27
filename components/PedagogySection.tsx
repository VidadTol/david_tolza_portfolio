export default function PedagogySection() {
  return (
    <section className="w-full relative overflow-hidden bg-[#0a0f1a] py-12 px-6 border-y border-blue-900/20">
      {/* Halos de fond */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.1),transparent)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.1),transparent)]"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 uppercase tracking-widest text-white px-4">
          Assistance & Pédagogie Numérique
        </h2>

        <div className="space-y-8 text-slate-300 text-base md:text-lg leading-relaxed">
          <p>
            Parce que l'informatique ne doit pas être une barrière, je propose un accompagnement de proximité dédié aux particuliers et aux seniors à Castelmaurou.
          </p>

          <div className="bg-slate-900/40 border border-blue-900/30 rounded-lg p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-bold text-blue-400 mb-4">Ma priorité : la pédagogie</h3>
            <p>
              Je veux que l'outil numérique devienne un allié simple et non plus une source de stress. Ce qui est le plus gratifiant pour moi, c'est de briser cette peur que l'ordinateur soit un « ogre » et d'aider à rompre l'isolement.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold text-purple-400 mb-4">Mon but : vous accompagner pour que vous gagniez en autonomie et en sérénité dans votre quotidien :</h3>
            
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-pink-400 font-bold flex-shrink-0">•</span>
                <div>
                  <strong className="text-white">Échanges familiaux :</strong>
                  <p className="text-slate-400 mt-1">Réussir ses appels en visio et envoyer des emails facilement.</p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <span className="text-cyan-400 font-bold flex-shrink-0">•</span>
                <div>
                  <strong className="text-white">Démarches administratives :</strong>
                  <p className="text-slate-400 mt-1">Réaliser vos formalités en ligne en toute confiance.</p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <span className="text-blue-400 font-bold flex-shrink-0">•</span>
                <div>
                  <strong className="text-white">Gestion du quotidien :</strong>
                  <p className="text-slate-400 mt-1">Apprendre à classer ses documents, scanner et organiser son ordinateur.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-center py-8 md:py-12">
            <p className="text-lg md:text-2xl lg:text-3xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(59,130,246,0.4)]">
              Au-delà du dépannage, je m'attache à ce que chaque utilisateur se sente rassuré et capable de manipuler ses outils seul après mon passage.
            </p>
          </div>

          <div className="flex items-center justify-center pt-8">
            <a
              href="/assistance-seniors"
              className="px-8 py-4 rounded-2xl font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Découvrir mon accompagnement pour seniors
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
