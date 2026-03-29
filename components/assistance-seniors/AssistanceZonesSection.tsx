"use client";

import { MapPin } from "lucide-react";

const zones = [
  "Castelmaurou",
  "Lapeyrouse-Fossat",
  "Saint-Geniès-Bellevue",
  "Pechbonnieu",
  "Gratentour",
  "Saint-Loup-Cammas",
  "Aucamville",
  "Fonbeauzard",
  "Saint-Alban",
  "Bruguières",
  "Fenouillet",
  "Saint-Jean",
  "L'Union",
  "Rouffiac-Tolosan",
  "Montrabé",
  "Beaupuy",
  "Verfeil",
  "Garidech",
  "Montastruc-la-Conseillère",
  "Saint-Sulpice-la-Pointe",
  "Buzet-sur-Tarn",
  "Toulouse",
];

export default function AssistanceZonesSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-5xl font-bold mb-16 text-center text-gray-900">
        Zones d'intervention
      </h2>
      <div className="bg-blue-50 rounded-2xl p-12 border-4 border-blue-300">
        <div className="flex items-center justify-center mb-10">
          <MapPin className="w-8 h-8 text-blue-600 mr-3" />
          <p className="text-2xl font-bold text-gray-900">
            Je me déplace à votre domicile
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {zones.map((zone, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 text-center border-2 border-blue-200 hover:border-blue-500 transition-colors"
            >
              <p className="font-semibold text-gray-800">{zone}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-10 text-lg">
          Rayon de <span className="font-bold text-blue-600">15 km autour de Castelmaurou</span>
        </p>
      </div>
    </section>
  );
}
