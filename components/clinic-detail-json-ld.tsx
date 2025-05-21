import Script from "next/script"
import type { Clinic } from "@/lib/clinic-data"
import type { ClinicComparisonData } from "@/lib/clinic-comparison-data"

interface ClinicDetailJsonLdProps {
  clinic: Clinic
  clinicDetail: ClinicComparisonData
  overview: string
  leadDoctor: string
}

export function ClinicDetailJsonLd({ clinic, clinicDetail, overview, leadDoctor }: ClinicDetailJsonLdProps) {
  // Convert treatment count to a number for reviewCount
  const reviewCount = clinic.treatmentsCount.replace(/\+/g, "").replace(/\./g, "")

  // Format certificates as a comma-separated string
  const certificatesString = clinic.certificates.join(", ")

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinic.name,
    description: overview,
    url: clinicDetail.website,
    telephone: clinicDetail.whatsapp,
    email: clinicDetail.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: clinic.district,
      addressRegion: "Istanbul",
      addressCountry: "TR",
    },
    hasMap: clinic.googleMapsUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: clinicDetail.googleRating.toFixed(1),
      reviewCount: reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    availableService: clinicDetail.methods,
    foundingDate: clinicDetail.foundedYear.toString(),
    priceRange: clinicDetail.startingPrice,
    identifier: {
      "@type": "PropertyValue",
      name: "Zertifikate",
      value: certificatesString,
    },
    medicalSpecialty: "Haartransplantation",
    image: clinic.imageUrl,
    employee: {
      "@type": "Person",
      name: leadDoctor,
      jobTitle: "Leitender Arzt",
    },
    sameAs: [clinicDetail.website],
    paymentAccepted: clinicDetail.paymentMethods.join(", "),
    availableLanguage: clinicDetail.languages,
  }

  return (
    <Script id={`json-ld-detail-${clinic.id}`} type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(jsonLd)}
    </Script>
  )
}
