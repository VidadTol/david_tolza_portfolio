"use client";

import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import ContactForm from "./ContactForm";

export default function Footer() {
  const [showForm, setShowForm] = useState(false);

  return (
    <footer className="w-full py-5 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white leading-tight">
          Prêt à collaborer ?
        </h2>
        <p className="text-slate-300 mb-12 text-lg md:text-2xl max-w-2xl mx-auto text-center space-y-4">
          Un bug à corriger ou un nouveau projet à lancer ? <br />
          <span className="block pt-4 bg-gradient-to-r md:text-1sxl from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
            Parlons-en pour que votre site raconte votre histoire...
          </span>
        </p>

        {/* Formulaire de Contact */}
        {showForm ? (
          <div className="mb-12">
            <ContactForm />
            <div className="text-center mt-6">
              <button
                onClick={() => setShowForm(false)}
                className="text-sm text-slate-400 hover:text-slate-200 transition underline"
                aria-label="Fermer le formulaire de contact"
              >
                ← Retour aux contacts rapides
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <div className="w-full sm:w-auto group relative hover:z-[100]">
                <a
                  href="mailto:vidadtol31@gmail.com"
                  className="flex items-center justify-center gap-3 bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                  aria-label="Envoyer un email à David Tolza"
                >
                  <Mail className="w-10 h-10" />
                  <span className="text-lg md:text-base">vidadtol31@gmail.com</span>
                </a>
              </div>
              <div className="w-full sm:w-auto group relative hover:z-50">
                <button
                  className="w-full flex items-center justify-center gap-3 bg-slate-800 text-white font-bold py-4 px-8 rounded-2xl border border-slate-700 transition-all duration-500 group-hover:scale-125 group-hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                  aria-label="Appeler David Tolza au 06 87 23 26 67"
                >
                  <Phone className="w-10 h-10 text-blue-400" />
                  <span className="text-lg md:text-base">06 87 23 26 67</span>
                </button>
              </div>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="text-2xl mt-6 text-slate-400 hover:text-slate-200 cursor-pointer transition-all hover:underline hover:underline-offset-4"
              aria-label="Ouvrir le formulaire de contact"
            >
              Ouvrir le formulaire →
            </button>
          </div>
        )}

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-slate-800/50">
          <p className="text-center text-slate-500 text-xs md:text-sm">
            © 2026 David Tolza. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
