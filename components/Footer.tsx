"use client";

import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import ContactForm from "./ContactForm";

export default function Footer() {
  const [showForm, setShowForm] = useState(false);

  return (
    <footer className="w-full py-20 px-6 bg-slate-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white leading-tight">
          Prêt à collaborer ?
        </h2>
        <p className="text-slate-400 mb-12 text-lg md:text-xl max-w-2xl mx-auto text-justify md:text-center">
          Si vous avez une question ou un projet en tête, parlons-en ensemble
          pour{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
            créer un site qui raconte votre histoire
          </span>
          .
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
              <a
                href="mailto:vidadtol31@gmail.com"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                aria-label="Envoyer un email à David Tolza"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm md:text-base">vidadtol31@gmail.com</span>
              </a>
              <a
                href="tel:0687232667"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-800 text-white font-bold py-4 px-8 rounded-2xl border border-slate-700 hover:border-slate-500 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                aria-label="Appeler David Tolza au 06 87 23 26 67"
              >
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-sm md:text-base">06 87 23 26 67</span>
              </a>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="text-sm text-slate-400 hover:text-slate-200 transition underline"
              aria-label="Ouvrir le formulaire de contact"
            >
              Ou utilisez le formulaire ci-dessous →
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
