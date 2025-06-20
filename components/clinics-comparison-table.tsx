import { useState } from "react";
import { clinicsComparisonData } from "@/lib/clinic-comparison-data";

export function ClinicsComparisonTable() {
  const [open, setOpen] = useState(false);

  return (
    <section className="my-12">
      <h2 className="font-heading text-xl mb-4">
        Vergleichstabelle: Die besten Haarkliniken für Haartransplantation in der Türkei auf einen Blick
      </h2>
      <button
        className="rounded-full bg-black text-white px-6 py-2 font-mono text-xs mb-4"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "Tabelle ausblenden" : "Vergleich als Tabelle anzeigen"}
      </button>
      {open && (
        <div className="overflow-x-auto">
          <table className="min-w-full border text-xs">
            <thead>
              <tr>
                <th>Klinik</th>
                <th>Standort</th>
                <th>Bewertung</th>
                <th>Methoden</th>
                <th>Preis ab</th>
                <th>Besonderheiten</th>
              </tr>
            </thead>
            <tbody>
              {clinicsComparisonData.map((clinic) => (
                <tr key={clinic.id}>
                  <td>{clinic.name}</td>
                  <td>{clinic.location}</td>
                  <td>
                    Google: {clinic.googleRating} / Trustpilot: {clinic.trustpilotRating}
                  </td>
                  <td>{clinic.methods.join(", ")}</td>
                  <td>{clinic.startingPrice}</td>
                  <td>{clinic.certificates.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
} 