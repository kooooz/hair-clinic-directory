import Script from "next/script"
import { clinics } from "@/lib/clinic-data"
import type { FaqItem } from "@/lib/faq-data"

type HomepageJsonLdProps = {
  faqItems: FaqItem[]
  baseUrl: string
}

export function HomepageJsonLd({ faqItems, baseUrl }: HomepageJsonLdProps) {
  // Organization and WebPage schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}#organization`,
    name: "Beste Haarkliniken",
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
    description: "Vergleiche Top-Kliniken für Haartransplantationen in Istanbul und der Türkei.",
    sameAs: ["https://www.facebook.com/bestehaarkliniken", "https://www.instagram.com/bestehaarkliniken"],
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}#webpage`,
    url: baseUrl,
    name: "Die 10 besten Kliniken für Haartransplantation in der Türkei 2025",
    description:
      "Vergleiche Top-Kliniken für Haartransplantationen in Istanbul und der Türkei. Erfahre alles über Preise, Methoden, Bewertungen und echte Erfahrungsberichte.",
    isPartOf: {
      "@id": `${baseUrl}#website`,
    },
    about: {
      "@id": `${baseUrl}#organization`,
    },
    datePublished: "2025-01-01T00:00:00+00:00",
    dateModified: new Date().toISOString(),
  }

  // ItemList schema for clinics
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: clinics.map((clinic, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "MedicalClinic",
        name: clinic.name,
        url: clinic.website,
        sameAs: [`${baseUrl}/klinik/${clinic.id}`],
        image: clinic.imageUrl,
        description: clinic.description,
        medicalSpecialty: "Haartransplantation",
        address: {
          "@type": "PostalAddress",
          addressLocality: clinic.district,
          addressRegion: "Istanbul",
          addressCountry: "TR",
        },
        hasMap: clinic.googleMapsUrl,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: clinic.rating.toFixed(1),
          reviewCount: clinic.treatmentsCount.replace(/\+/g, "").replace(/\./g, ""),
        },
      },
    })),
  }

  // FAQPage schema
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(organizationSchema)}
      </Script>
      <Script id="webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(webPageSchema)}
      </Script>
      <Script id="itemlist-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(itemListSchema)}
      </Script>
      <Script id="faqpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqPageSchema)}
      </Script>
    </>
  )
}
