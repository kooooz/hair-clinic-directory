"use client"

import { useState } from "react";
import { clinicsComparisonData } from "@/lib/clinic-comparison-data";

export function ClinicsComparisonTable() {
  const [open, setOpen] = useState(false);

  // Schema.org ItemList markup
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Vergleich der besten Haarkliniken für Haartransplantation in der Türkei",
    "itemListElement": clinicsComparisonData.map((clinic, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "MedicalClinic",
        "name": clinic.name,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": clinic.district,
          "addressRegion": "Istanbul",
          "addressCountry": "TR"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": clinic.googleRating,
          "reviewCount": clinic.treatmentsCount?.replace(/\D/g, "") || ""
        },
        "medicalSpecialty": "Haartransplantation",
        "priceRange": clinic.startingPrice,
        "url": clinic.website
      }
    }))
  };

  return (
    <section className="my-12">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="font-heading text-xl mb-4 text-center">
          Vergleichstabelle: Die besten Haarkliniken für Haartransplantation in der Türkei auf einen Blick
        </h2>
        <button
          className="rounded-full bg-black text-white px-6 py-2 font-mono text-xs mb-4 mx-auto block"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Tabelle ausblenden" : "Vergleich als Tabelle anzeigen"}
        </button>
        {open && (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-0 text-xs bg-white shadow-md rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left">Klinik</th>
                    <th className="p-3 text-left">Standort</th>
                    <th className="p-3 text-left">Bewertung</th>
                    <th className="p-3 text-left">Methoden</th>
                    <th className="p-3 text-left">Preis ab</th>
                    <th className="p-3 text-left">Besonderheiten</th>
                  </tr>
                </thead>
                <tbody>
                  {clinicsComparisonData.map((clinic, idx) => (
                    <tr key={clinic.id} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-3 whitespace-nowrap">{clinic.name}</td>
                      <td className="p-3 whitespace-nowrap">{clinic.location}</td>
                      <td className="p-3 whitespace-nowrap">
                        Google: {clinic.googleRating} / Trustpilot: {clinic.trustpilotRating}
                      </td>
                      <td className="p-3 whitespace-nowrap">{clinic.methods.join(", ")}</td>
                      <td className="p-3 whitespace-nowrap">{clinic.startingPrice}</td>
                      <td className="p-3 whitespace-nowrap">{clinic.certificates.join(", ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          </>
        )}
      </div>
    </section>
  );
} 