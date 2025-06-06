import { CheckSquare } from "lucide-react"
import { HorizontalDivider } from "./horizontal-divider"
import Link from "next/link"
import Image from "next/image"

export function MethodologySection() {
  const methodologyPoints = [
    "Direkter Austausch mit allen gelisteten Kliniken",
    "Analyse von Klinikwebseiten, Presseberichten und Videomaterial",
    "Auswertung unabhängiger Erfahrungsberichte und Patientenbewertungen",
    "Bewertung von medizinischem Anspruch, Hygiene, Transparenz & Kommunikation",
    "Eigene Erfahrung mit einer der gelisteten Kliniken",
  ]

  return (
    <section className="py-16" id="empfehlungen">
      <HorizontalDivider />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-xl mb-8">So kam es zu der Übersicht der besten Kliniken in der Türkei</h2>

          <div className="flex flex-row gap-8">
            <div className="w-1/3">
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src="/saphir-fue-haartransplantation.jpg"
                  alt="Saphir-FUE Technik bei der Haartransplantation am Kopf eines Patienten"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            <div className="w-2/3">
              <ul className="space-y-4">
                {methodologyPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckSquare className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-body text-sm">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link href="/empfehlungen" className="text-[#EB5D49] hover:underline font-mono text-sm">
                  Meine Produktempfehlungen für die Heilungsphase →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HorizontalDivider />
    </section>
  )
}
