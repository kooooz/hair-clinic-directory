import type { Metadata } from "next"
import { ClinicComparisonTable } from "@/components/clinic-comparison-table"
import { HorizontalDividerLeftAligned } from "@/components/horizontal-divider-left-aligned"
import Script from "next/script"
import { clinicsComparisonData } from "@/lib/clinic-comparison-data"
import { Suspense } from "react"

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const baseUrl = "https://www.beste-haarkliniken.de"
  const canonicalUrl = `${baseUrl}/kliniken-vergleichen`

  return {
    title: "Beste Haarkliniken Türkei im Vergleich | FUE & DHI",
    description:
      "Hier findest du die vollständige Liste aller geprüften Haarkliniken für Haartransplantationen in der Türkei – inklusive Methoden, Preisen und Bewertungen.",
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

export default function KlinikenVergleichenPage() {
  // Base URL für Schema.org
  const baseUrl = "https://www.beste-haarkliniken.de"

  return (
    <>
      {/* Schema.org Auszeichnung */}
      <Script id="schema-kliniken-vergleichen" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${baseUrl}/kliniken-vergleichen#webpage`,
          url: `${baseUrl}/kliniken-vergleichen`,
          name: "Alle empfohlenen Haarkliniken in der Türkei im Überblick | FUE & DHI Vergleich",
          description:
            "Hier findest du die vollständige Liste aller geprüften Haarkliniken für Haartransplantationen in der Türkei – inklusive Methoden, Preisen und Bewertungen.",
          isPartOf: {
            "@id": `${baseUrl}#website`,
          },
          inLanguage: "de-DE",
          mainContentOfPage: {
            "@type": "Table",
            about: {
              "@type": "Thing",
              name: "Haarkliniken in der Türkei",
            },
          },
        })}
      </Script>

      {/* ItemList Schema für die Kliniken */}
      <Script id="schema-itemlist" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: clinicsComparisonData.map((clinic, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "MedicalClinic",
              name: clinic.name,
              url: clinic.website,
              image: clinic.imageUrl,
              description: `${clinic.name} bietet Haartransplantationen mit den Methoden ${clinic.methods.join(
                ", ",
              )} an.`,
              medicalSpecialty: "Haartransplantation",
              address: {
                "@type": "PostalAddress",
                addressLocality: clinic.district,
                addressRegion: "Istanbul",
                addressCountry: "TR",
              },
              telephone: clinic.whatsapp,
              email: clinic.email,
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: clinic.googleRating.toFixed(1),
                bestRating: "5",
                worstRating: "1",
                ratingCount: clinic.treatmentsCount.replace(/\+/g, "").replace(/\./g, ""),
              },
            },
          })),
        })}
      </Script>

      <div className="container mx-auto px-4 py-16 mt-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-body text-3xl md:text-4xl mb-8">Top 10 Haarkliniken in der Türkei im Vergleich</h1>

          <HorizontalDividerLeftAligned />

          <div className="my-12">
            <p className="font-mono text-sm mb-8">
              Hier kommen noch einmal alle 10 Kliniken mit allen Informationen, um sie untereinander vergleichen zu
              können. Du kannst nach verschiedenen Kriterien filtern und bis zu drei Kliniken direkt nebeneinander
              vergleichen.
            </p>
            <Suspense fallback={<div>Lade Vergleichstabelle...</div>}>
              <ClinicComparisonTable />
            </Suspense>
          </div>

          <HorizontalDividerLeftAligned />
        </div>
      </div>
    </>
  )
}
