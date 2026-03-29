"use client";

import { CheckCircle2 } from "lucide-react";

export default function AssistancePourquoiSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-5xl font-bold mb-16 text-center text-gray-900">
        Pourquoi faire appel à moi ?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Bloc 1 */}
        <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
          <h3 className="text-xl font-bold mb-4 text-red-600 flex items-center">
            ❌ C'est compliqué
          </h3>
          <ul className="text-base text-gray-700 list-disc list-inside space-y-1 mb-4">
            <li>L'informatique vous fait peur ?</li>
            <li>Les termes semblent bizarres ?</li>
            <li>Peur de faire une erreur ?</li>
          </ul>
          <p className="text-sm text-gray-600 italic border-t border-red-200 pt-3">
            Je parle votre langue pour tout expliquer simplement.
          </p>
        </div>

        {/* Bloc 2 */}
        <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
          <h3 className="text-xl font-bold mb-4 text-red-600 flex items-center">
            ❌ Vous êtes seul
          </h3>
          <ul className="text-base text-gray-700 list-disc list-inside space-y-1 mb-4">
            <li>Personne à qui poser vos questions ?</li>
            <li>Besoin d'un interlocuteur unique ?</li>
            <li>Envie d'avancer à votre rythme ?</li>
          </ul>
          <p className="text-sm text-gray-600 italic border-t border-red-200 pt-3">
            Je suis là pour vous, avec patience et sans jugement.
          </p>
        </div>

        {/* Bloc 3 */}
        <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
          <h3 className="text-xl font-bold mb-4 text-red-600 flex items-center">
            ❌ Sentiment d'isolement
          </h3>
          <ul className="text-base text-gray-700 list-disc list-inside space-y-1 mb-4">
            <li>Internet semble inaccessible ?</li>
            <li>Difficulté à joindre vos proches ?</li>
            <li>Peur d'être dépassé ?</li>
          </ul>
          <p className="text-sm text-gray-600 italic border-t border-red-200 pt-3">
            Je ferme ce fossé pour vous reconnecter au monde.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center bg-green-50 rounded-xl p-6 border-2 border-green-300">
        <p className="text-xl text-green-700 font-bold flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 mr-3 text-green-600" /> 
          VOUS POUVEZ Y ARRIVER. JE VOUS AIDE !
        </p>
      </div>
    </section>
  );
}
