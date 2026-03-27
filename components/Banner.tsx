import Image from "next/image";
import Typewriter from "./Typewriter";

export default function Banner() {
  return (
    <>
      <div className="w-full h-[120px] md:h-[150px] relative mb-0 overflow-hidden rounded-b-3xl shadow-lg">
        <Image
          src="/banniere1.png"
          alt="Fond David Tolza - Développeur Web et Mobile"
          className="object-cover w-full h-full opacity-50"
          fill
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-2xl md:text-5xl font-bold text-white tracking-tight leading-tight uppercase">
            Développeur{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Web & Mobile
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              & Autonomie Numérique
            </span>
          </h1>
        </div>
      </div>

      <div className="w-full flex justify-center px-2 text-center">
        <Typewriter
          text="Un site sur mesure qui vous ressemble, et l'autonomie numérique que vous méritez."
          className="text-base md:text-xl mt-6 font-extrabold italic text-gradient-hero drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]"
        />
      </div>
    </>
  );
}
