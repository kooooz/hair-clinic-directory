import type { Metadata } from "next"
import { HorizontalDividerLeftAligned } from "@/components/horizontal-divider-left-aligned"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Empfohlene Produkte für die Heilungsphase nach der Haartransplantation",
  description:
    "Entdecke die besten Vitamine, Shampoos und Pflegeprodukte für eine schnelle und gesunde Heilung nach deiner Haartransplantation. Unsere Empfehlungen basieren auf Erfahrung und Qualität.",
}

export default function EmpfehlungenPage() {
  // Base URL für Schema.org
  const baseUrl = "https://beste-haarkliniken.de"

  return (
    <>
      {/* Schema.org Auszeichnung */}
      <Script id="schema-empfehlungen" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${baseUrl}/empfehlungen#webpage`,
          url: `${baseUrl}/empfehlungen`,
          name: "Empfohlene Produkte für die Heilungsphase nach der Haartransplantation",
          description:
            "Entdecke die besten Vitamine, Shampoos und Pflegeprodukte für eine schnelle und gesunde Heilung nach deiner Haartransplantation. Unsere Empfehlungen basieren auf Erfahrung und Qualität.",
          isPartOf: {
            "@id": `${baseUrl}#website`,
          },
          inLanguage: "de-DE",
          mainContentOfPage: {
            "@type": "WebPageElement",
            about: {
              "@type": "Thing",
              name: "Haartransplantation Nachsorge",
            },
          },
        })}
      </Script>

      <div className="container mx-auto px-4 py-16 mt-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-body text-3xl md:text-4xl mb-8">
            Empfohlene Produkte für die Heilungsphase nach der Haartransplantation
          </h1>

          <HorizontalDividerLeftAligned />

          <div className="my-12 space-y-12">
            <section>
              <p className="font-mono text-sm mb-6">
                Nach einer Haartransplantation ist die richtige Pflege entscheidend für eine schnelle Regeneration und
                optimale Ergebnisse.
              </p>
              <p className="font-mono text-sm">
                Von deiner Klinik erhältst du in der Regel Pflegeprodukte und Medikamente für die ersten 10 Tage. Auf
                dieser Seite findest du sorgfältig ausgewählte Empfehlungen für Vitamine, medizinische Shampoos und
                beruhigende Pflegeprodukte bei gereizter Kopfhaut für die anschließende Phase. Alle vorgestellten
                Produkte unterstützen den Heilungsverlauf, fördern das Haarwachstum und sorgen für eine gesunde
                Kopfhaut. Die Empfehlungen basieren auf persönlicher Erfahrung.
              </p>
            </section>

            <HorizontalDividerLeftAligned />

            <section>
              <h2 className="font-body text-xl mb-6">Vitamine für Haarwachstum und Heilung</h2>
              <p className="font-mono text-sm mb-6">
                Vitamine wie Biotin, Zink und Vitamin D stärken das Haar von innen und beschleunigen die Regeneration
                nach dem Eingriff.
              </p>
              <div className="mt-6">
                <a
                  href="https://www.sunday.de/en/hair-root-complex-capsules.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="rounded-full font-mono text-xs flex items-center">
                    Vitamine
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </a>
              </div>
            </section>

            <HorizontalDividerLeftAligned />

            <section>
              <h2 className="font-body text-xl mb-6">
                Shampoos für frisch transplantierte Kopfhaut (10 Tage nach der Transplantation)
              </h2>
              <p className="font-mono text-sm mb-6">
                Sanfte Shampoos reinigen ohne zu reizen und unterstützen die natürliche Heilung der Haut und fördern das
                Wachstum der Haare.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="https://casida.com/products/rosmarin-shampoo-mit-biotin?gad_campaignid=21824551414&gad_source=1&gbraid=0AAAAADzKF-tyn-VporsQoBxpJHP_1lrXs&gclid=EAIaIQobChMIta3fjt6vjQMVdJKDBx0CTy-2EAQYASABEgKsEfD_BwE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="rounded-full font-mono text-xs flex items-center">
                    Shampoo Option 1
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </a>
                <a
                  href="https://khadi.de/products/haare-shampoo-ayurvedisches-elixier-amla-volume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="rounded-full font-mono text-xs flex items-center">
                    Shampoo Option 2
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </a>
              </div>
            </section>

            <HorizontalDividerLeftAligned />

            <section>
              <h2 className="font-body text-xl mb-6">Pflege bei gereizter oder spannender Kopfhaut</h2>
              <p className="font-mono text-sm mb-6">
                Speziell entwickelte Sprays, Gels oder Cremes beruhigen die Kopfhaut, lindern Juckreiz und beugen
                Entzündungen vor.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="https://www.eau-thermale-avene.de/p/thermalwasser-spray-3282779003131-0c591b54"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="rounded-full font-mono text-xs flex items-center">
                    Thermalwasser
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </a>
                <a
                  href="https://soenanaturals.com/products/bio-aloe-vera-gel?srsltid=AfmBOopTy9_W_bLXlC_YRwU0zsl-qYBz_iEy1wZlVDBbJEj2s7viVmBn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="rounded-full font-mono text-xs flex items-center">
                    Aloe Vera
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </a>
              </div>
            </section>

            <HorizontalDividerLeftAligned />

            <section>
              <h2 className="font-body text-xl mb-6">Hinweis</h2>
              <p className="font-mono text-sm">
                Alle hier aufgeführten Produkte basieren auf meinen persönlichen Erfahrungen. Jeder Heilungsverlauf ist
                individuell – was mir geholfen hat, muss nicht automatisch bei allen wirken. Ich übernehme daher keine
                Garantie für Wirksamkeit oder Verträglichkeit der empfohlenen Produkte. Bitte konsultiere im Zweifel
                deine behandelnde Klinik oder eine dermatologische Fachperson.
              </p>
            </section>
          </div>

          <HorizontalDividerLeftAligned />
        </div>
      </div>
    </>
  )
}
