import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full max-w-6xl mt-9 px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* COLONNE GAUCHE : LOGO & NOM */}
        <div className="flex flex-col items-center lg:items-start space-y-4 group">
          <div className="relative m-8 lg:m-12">
            <div className="absolute -inset-2 lg:-inset-3 bg-blue-500 rounded-full blur-lg opacity-90 md:opacity-50 md:group-hover:opacity-90 transition duration-500 md:group-hover:blur-xl"></div>
            <Image
              src="/logo2.png"
              alt="Logo David Tolza - Développeur Web et Mobile Freelance"
              className="relative object-contain"
              width={200}
              height={200}
              priority
              quality={90}
            />
          </div>

          <div className="flex flex-col items-center lg:items-start overflow-hidden">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-white uppercase text-center lg:text-left">
                David <span className="text-blue-400">Tolza</span>
              </h2>
              <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-purple-500 to-transparent mt-2 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
            </div>
          </div>
        </div>

        {/* COLONNE DROITE : QUI SUIS-JE */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center lg:text-left leading-tight">
            Mon Histoire <br />
          </h2>

          <div className="text-slate-300 text-base md:text-lg space-y-4 text-justify">
            <p>
              Après{" "}
              <strong>22 ans dans le secteur de la télésurveillance</strong>,
              j'ai choisi de mettre ma rigueur au profit du développement web.
              Je ne prétends pas être un expert, mais un{" "}
              <strong>apprenant passionné </strong> qui approfondit ses
              connaissances chaque jour pour construire des solutions fiables.
            </p>
            <p>
              Pour moi, un site internet doit fonctionner avec la même
              précision qu'un système de sécurité. C'est cette{" "}
              <strong>exigence de fiabilité</strong> que j'apporte aujourd'hui
              à chaque projet dont je m'occupe.
              <br />
              <br /> Ma force ? Une approche centrée sur l'expérience
              utilisateur (UX). Je ne laisse rien au hasard : chaque bouton,
              chaque menu et chaque interaction est pensé pour être simple et
              efficace. Mon but est de créer des interfaces modernes et
              fonctionnelles.
            </p>
            <p>
              Diplômé <strong>RNCP 5 DWWM</strong>, je me spécialise dans la
              création de sites sur-mesure et surtout dans la{" "}
              <strong>résolution de problèmes</strong> : je répare et
              j'optimise ce qui ne fonctionne plus pour vous offrir un outil
              performant, avec l'honnêteté et la persévérance qui me
              caractérisent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
