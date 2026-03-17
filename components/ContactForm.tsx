"use client";

import { useState } from "react";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "" });

    try {
      // Validation basique
      if (!formData.name || !formData.email || !formData.message) {
        setStatus({
          type: "error",
          message: "Veuillez remplir tous les champs obligatoires",
        });
        return;
      }

      // Validation email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setStatus({
          type: "error",
          message: "Veuillez entrer une adresse email valide",
        });
        return;
      }

      // Envoi du formulaire via mailto
      const mailtoLink = `mailto:vidadtol31@gmail.com?subject=${encodeURIComponent(
        `[PORTFOLIO] ${formData.subject || "Nouvelle demande"}`
      )}&body=${encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone || "Non fourni"}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;

      setStatus({
        type: "success",
        message:
          "Merci ! Votre email s'ouvre. Appuyez sur Envoyer pour m'envoyer le message.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setStatus({ type: "idle", message: "" }), 5000);
    } catch (error) {
      setStatus({
        type: "error",
        message: "Une erreur est survenue. Veuillez réessayer.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto space-y-5"
      aria-label="Formulaire de contact"
    >
      {/* Nom */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-slate-200 mb-2"
        >
          Votre nom <span className="text-pink-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Jean Dupont"
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          required
          aria-required="true"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-slate-200 mb-2"
        >
          Votre email <span className="text-pink-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="jean@exemple.com"
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          required
          aria-required="true"
        />
      </div>

      {/* Téléphone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-slate-200 mb-2"
        >
          Votre téléphone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="06 12 34 56 78"
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      {/* Sujet */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-semibold text-slate-200 mb-2"
        >
          Sujet
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Ex: Dépannage informatique, création web ou optimisation SEO."
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-slate-200 mb-2"
        >
          Votre message <span className="text-pink-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Décrivez-moi votre projet, vos besoins..."
          rows={5}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
          required
          aria-required="true"
        />
      </div>

      {/* Status Messages */}
      {status.type === "success" && (
        <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
          <p className="text-green-400 text-sm">{status.message}</p>
        </div>
      )}

      {status.type === "error" && (
        <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
          <p className="text-red-400 text-sm">{status.message}</p>
        </div>
      )}

      {status.type === "loading" && (
        <div className="flex items-center gap-3 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
          <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-blue-400 text-sm">Envoi en cours...</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status.type === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950 animate-waves"
        aria-busy={status.type === "loading"}
      >
        <Mail className="w-5 h-5" />
        <span>{status.type === "loading" ? "Envoi..." : "Envoyer mon message"}</span>
      </button>

      <p className="text-xs text-slate-500 text-center">
        Les champs marqués d'un <span className="text-pink-500">*</span> sont obligatoires.
      </p>
    </form>
  );
}
