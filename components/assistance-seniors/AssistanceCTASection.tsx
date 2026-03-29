"use client";

import { Phone, Mail } from "lucide-react";

export default function AssistanceCTASection() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-600 to-blue-700 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-10 text-white">
          Parlons ensemble!
        </h2>
        <p className="text-2xl text-white mb-16 max-w-2xl mx-auto leading-relaxed font-semibold">
          Premier appel gratuit. Pas d'engagement. Juste une discussion pour
          voir comment je peux vous aider.
        </p>
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
          <a
            href="tel:+33687232667"
            className="flex-1 flex items-center justify-center bg-white text-blue-700 rounded-2xl p-8 hover:shadow-2xl transition-all font-bold text-2xl"
          >
            <Phone className="w-8 h-8 mr-4" />
            06 87 23 26 67
          </a>
          <a
            href="mailto:vidadtol31@gmail.com"
            className="flex-1 flex items-center justify-center bg-white text-blue-700 rounded-2xl p-8 hover:shadow-2xl transition-all font-bold text-2xl"
          >
            <Mail className="w-8 h-8 mr-4" />
            vidadtol31@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
