export default function AssistanceSchemaScript() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://david-tolza.vercel.app/assistance-seniors",
    name: "David Tolza - Assistance Informatique & Administrative",
    description: "Service d'aide informatique et administrative pour seniors à Castelmaurou",
    url: "https://david-tolza.vercel.app/assistance-seniors",
    telephone: "+33687232667",
    email: "vidadtol31@gmail.com",
    image: "https://david-tolza.vercel.app/logo2.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Castelmaurou",
      postalCode: "31180",
      addressCountry: "FR",
    },
    areaServed: [
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
    ],
    priceRange: "€",
    serviceType: ["IT Support", "Personal Assistant"],
    knowsAbout: ["Assistance informatique", "Aide administrative", "Support seniors"],
    founder: {
      "@type": "Person",
      name: "David Tolza",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
