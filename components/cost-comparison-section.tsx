import Image from 'next/image'
import Script from 'next/script'

export function CostComparisonSection() {
  const baseUrl = "https://beste-haarkliniken.de"

  const costComparisonSchema = {
    "@context": "https://schema.org",
    "@type": "Table",
    "about": "Kostenvergleich für Haartransplantationen in der Türkei",
    "description": "Durchschnittliche Kosten pro Graft und Gesamtkosten für eine Transplantation von 3.000 Grafts in verschiedenen Kliniken in der Türkei",
    "image": `${baseUrl}/kosten-vergleich-haartransplantation-türkei.jpg`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Durchschnittliche Kosten pro Graft",
          "description": "Kosten pro einzelner Haarwurzel bei der Transplantation"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Durchschnittliche Gesamtkosten",
          "description": "Gesamtkosten für eine Transplantation von 3.000 Grafts"
        }
      ]
    }
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-xl mb-8">
          Kosten für eine Haartransplantation in der Türkei
        </h2>
        <div className="relative w-full">
          <Image
            src="/kosten-vergleich-haartransplantation-türkei.jpg"
            alt="Kostenvergleich Haartransplantation Türkei"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex items-start justify-between px-4 md:px-8 pt-8 md:pt-16">
            <div className="w-1/2 flex justify-center">
              <p className="text-[12px] md:text-[14px] font-geist text-center bg-white/80 backdrop-blur-sm px-2 py-1 rounded">
                Durchschnittliche Kosten pro Graft
              </p>
            </div>
            <div className="w-1/2 flex justify-center">
              <p className="text-[12px] md:text-[14px] font-geist text-center bg-white/80 backdrop-blur-sm px-2 py-1 rounded">
                Durchschnittliche Gesamtkosten für eine Transplantation von<br className="hidden md:block" />
                3.000 Grafts
              </p>
            </div>
          </div>
        </div>
      </div>
      <Script id="cost-comparison-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(costComparisonSchema)}
      </Script>
    </section>
  )
} 