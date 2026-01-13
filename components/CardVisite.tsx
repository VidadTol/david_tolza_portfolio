import React from 'react';

export default function CardVisite() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center max-w-sm mx-auto">
      {/* Remplace ces infos par les tiennes */}
      <img src="/logo1.png" alt="Carte de visite" className="w-64 h-64 rounded-full mb-4 object-cover border-4 border-blue-500" />

      <h2 className="text-2xl font-bold mb-2 text-gray-800">David Tolza</h2>
      <p className="text-lg text-blue-600 mb-2">Développeur Web & Mobile</p>
      <p className="text-gray-600 mb-2">React • Next.js • Tailwind CSS</p>
      <a href="mailto:contact@davidtolza.com" className="text-blue-500 hover:underline">contact@davidtolza.com</a>
    </div>
  );
}
