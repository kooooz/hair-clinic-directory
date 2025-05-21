import { HorizontalDivider } from "./horizontal-divider"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="py-16" id="uber">
      <HorizontalDivider />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-xl mb-8">
            Über mich und warum ich diese Übersicht für Kliniken zur Haartransplantation in der Türkei erstellt habe
          </h2>

          <div className="space-y-4">
            <p className="font-body text-sm">
              Vor 12 Monaten stand ich da, wo du jetzt bist: Unzufrieden mit meinem Haar, überfordert mit der
              Entscheidung. In der Türkei gibt es hunderte Anbieter für Haartransplantationen – mit vielen Versprechen,
              aber wenig Transparenz. Ich habe recherchiert, verglichen, Interviews geführt – und mich schließlich
              selbst behandeln lassen.
            </p>
            <p className="font-body text-sm">
              Aus dieser Erfahrung ist diese Seite entstanden. Ich möchte dir helfen, schneller Klarheit zu bekommen –
              mit echten Empfehlungen, ehrlichem Vergleich und verständlichen Informationen zu Kosten, Methoden,
              Klinikqualität und Betreuung.
            </p>
            <div className="pt-4">
              <Link href="/ueber-mich" className="text-[#ff4d00] hover:underline font-mono text-sm">
                Mehr über mich erfahren →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <HorizontalDivider />
    </section>
  )
}
