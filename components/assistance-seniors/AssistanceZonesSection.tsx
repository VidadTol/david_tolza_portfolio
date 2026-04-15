"use client";

import { MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const zones = [
  "Castelmaurou",
  "Garidech",
  "Saint-Jean",
  "L'Union",
  "Rouffiac-Tolosan",
  "Montrabé",
  "Saint-Geniès-Bellevue",
  "Pechbonnieu",
  "Gratentour",
  "Saint-Loup-Cammas",
  "Aucamville",
  "Fonbeauzard",
  "Saint-Alban",
  "Bruguières",
  "Fenouillet",
  "Beaupuy",
  "Verfeil",
  "Lapeyrouse-Fossat",
  "Montastruc-la-Conseillère",
  "Saint-Sulpice-la-Pointe",
  "Buzet-sur-Tarn",
  "Toulouse",
];

const mainZones = zones.slice(0, 6);
const otherZones = zones.slice(6);

export default function AssistanceZonesSection() {
  const [expanded, setExpanded] = useState(false);

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
        
        {/* VERSION MOBILE - Avec bouton "Voir plus" */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-4">
            {mainZones.map((zone, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-3 text-center border-2 border-blue-200 hover:border-blue-500 transition-colors"
              >
                <p className="font-semibold text-gray-800 text-sm">{zone}</p>
              </div>
            ))}
          </div>

          {expanded && (
            <div className="grid grid-cols-2 gap-4 mt-4">
              {otherZones.map((zone, index) => (
                <div
                  key={index + 6}
                  className="bg-white rounded-lg p-3 text-center border-2 border-blue-200 hover:border-blue-500 transition-colors"
                >
                  <p className="font-semibold text-gray-800 text-sm">{zone}</p>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors"
          >
            {expanded ? (
              <>
                <ChevronUp className="w-5 h-5" />
                Voir moins
              </>
            ) : (
              <>
                <ChevronDown className="w-5 h-5" />
                Voir les {otherZones.length} autres zones
              </>
            )}
          </button>
        </div>

        {/* VERSION DESKTOP - Toutes les villes visibles */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-4">
          {zones.map((zone, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-3 text-center border-2 border-blue-200 hover:border-blue-500 transition-colors"
            >
              <p className="font-semibold text-gray-800 text-sm">{zone}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-10 text-lg">
          Rayon de <span className="font-bold text-blue-600">15 km</span> <br />
          autour de <span className="font-bold text-blue-600">Castelmaurou</span>
        </p>
      </div>
    </section>
  );
}
