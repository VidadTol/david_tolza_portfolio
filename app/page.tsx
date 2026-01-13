import { Mail, Phone, Wrench, Code2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-start">
      {/* 1. TA BANNIÈRE (STRICTEMENT INTACTE) */}
      <div className="w-full h-26 relative mb-8">
        <img
          src="/banniere.png"
          alt="David Tolza - Développeur Freelance"
          className="object-cover w-full h-full rounded-b-2xl shadow-lg"
        />
        <p className="text-white text-xl mt-2 font-medium italic text-center">
          "Un problème ? Une solution."
        </p>
      </div>

      {/* 2. TON LOGO IMAGE */}
      <div className="flex flex-col items-center mb-16 mt-8">
        <img
          src="/logo1.png" // <--- Mets ici le nom exact de ton fichier dans le dossier public
          alt="Logo David Tolza"
          className="w-32 h-auto object-contain" // Tu peux régler la taille avec w-32 (largeur)
        />
        <h2 className="mt-4 text-2xl font-bold tracking-widest text-blue-400 uppercase">
          David Tolza
        </h2>
        <div className="h-1 w-12 bg-blue-600 mt-2 rounded-full"></div>
      </div>

      {/* 3. SECTION QUI SUIS-JE (MON CODE ADAPTÉ) */}
      <section className="w-full max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              Qui suis-je ? <br />
              <span className="text-blue-500 text-2xl">
                Je vous apporte mon serieux et experience pour que votre site
                Web vous ressemble et raconte votre histoire
              </span>
            </h2>
            <div className="text-slate-300 text-lg space-y-4">
              <p>
                Après une carrière de{" "}
                <strong>22 ans dans la télésurveillance</strong>, j'ai choisi le
                développement web pour créer et surtout,{" "}
                <strong>
                  réparer ce qui ne fonctionne pas ou plus sur votre site Web
                </strong>
                .
              </p>
              <p>
                Aujourd'hui diplômé <strong>RNCP 5 (DWWM)</strong>, je mets
                cette rigueur au service de vos projets, du développement
                sur-mesure.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl">
            <h3 className="text-xl font-bold text-blue-400 mb-4 italic">
              Ma dernière réussite :
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Le développement de A à Z du site e-commerce{" "}
              <strong>"Les Créas d'Isa"</strong>. Un projet complexe,
              aujourd'hui déployé et parfaitement fonctionnel.
            </p>
            <div className="mt-6">
              <span className="text-sm text-slate-500 italic">
                "Créativité, Ecoute, Rigueur, analyse et résultat."
              </span>
            </div>
          </div>
        </div>
        {/* SECTION MÉTHODE */}
        <section className="w-full max-w-5xl px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="text-blue-500 text-3xl font-bold">01</div>
              <h4 className="text-xl font-bold">Écoute</h4>
              <p className="text-slate-400">
                On définit ensemble vos besoins et l'histoire que vous voulez
                raconter.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-blue-500 text-3xl font-bold">02</div>
              <h4 className="text-xl font-bold">Création</h4>
              <p className="text-slate-400">
                Développement propre, moderne et optimisé pour tous les écrans.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-blue-500 text-3xl font-bold">03</div>
              <h4 className="text-xl font-bold">Suivi</h4>
              <p className="text-slate-400">
                Je ne vous lâche pas : mise en ligne, formation et maintenance
                assurées.
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* 4. SECTION SERVICES (DESIGN MODERNE AVEC LUCIDE) */}
      {/* 4. SECTION SERVICES (MODIFIÉE POUR CENTRAGE PARFAIT) */}
      <section className="w-full bg-slate-900/50 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {" "}
          {/* flex-col + items-center centrent le titre et le contenu */}
          <h2 className="text-3xl font-bold text-center mb-16 underline decoration-blue-500 underline-offset-8 uppercase tracking-wider text-white">
            Mes Services
          </h2>
          {/* On remplace 'grid' par un simple div avec une largeur max pour que la carte soit centrée */}
          <div className="w-full max-w-2xl">
            {/* Carte Développement */}
            <div className="bg-slate-800/40 p-10 rounded-3xl border border-slate-800 transition-all duration-500 group text-center flex flex-col items-center hover:ring-4 hover:ring-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]">
              <div className="mb-6 inline-block p-4 bg-blue-600/20 rounded-2xl group-hover:bg-blue-600/40 transition-colors">
                <Code2 className="w-10 h-10 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Développement Web & Mobile
              </h3>
              <ul className="text-slate-400 space-y-3 text-lg flex flex-col items-start md:items-center">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Création de sites vitrines et e-commerce
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Refonte et optimisation de sites existants
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  Applications modernes (React / Next.js)
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs font-semibold text-blue-300 border border-slate-600">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs font-semibold text-blue-300 border border-slate-600">
                  React
                </span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs font-semibold text-blue-300 border border-slate-600">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs font-semibold text-blue-300 border border-slate-600">
                  API Resful
                </span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs font-semibold text-blue-300 border border-slate-600">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs font-semibold text-blue-300 border border-slate-600">
                  Vercel
                </span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs font-semibold text-blue-300 border border-slate-600">
                  Firebase
                </span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs font-semibold text-blue-300 border border-slate-600">
                  OVH
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full py-24 text-center px-4 bg-slate-900/30">
        <h2 className="text-4xl font-bold mb-6 text-white">
          Prêt à collaborer ?
        </h2>

        <p className="text-slate-400 mb-12 text-xl max-w-2xl mx-auto leading-relaxed">
          Si vous avez une question ou un projet en tête, parlons-en ensemble
          pour{" "}
          <span className="text-blue-400 font-semibold text-glow">
            Créer un site qui raconte votre histoire
          </span>
          .
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Bouton Email Moderne */}
          <a
            href="mailto:vidadtol31@gmail.com"
            className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-xl shadow-blue-900/20 hover:scale-105 active:scale-95"
          >
            <Mail className="w-6 h-6 group-hover:animate-bounce" />
            <span>vidadtol31@gmail.com</span>
          </a>

          {/* Bloc Téléphone Moderne */}
          <a
            href="tel:0687232667"
            className="group flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-10 rounded-2xl transition-all border border-slate-700 hover:border-blue-500 shadow-xl"
          >
            <Phone className="w-6 h-6 text-blue-400 group-hover:rotate-12 transition-transform" />
            <span>06 87 23 26 67</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
