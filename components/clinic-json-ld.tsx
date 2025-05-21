import Script from "next/script"
import type { Clinic } from "@/lib/clinic-data"

export function ClinicJsonLd({ clinic }: { clinic: Clinic }) {
  // Convert treatment count to a number for reviewCount
  const reviewCount = clinic.treatmentsCount.replace(/\+/g, "").replace(/\./g, "")

  // Format certificates as a comma-separated string
  const certificatesString = clinic.certificates.join(", ")

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinic.name,
    description: clinic.description,
    url: clinic.website,
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
      reviewCount: reviewCount,
    },
    availableService: clinic.methods,
    foundingDate: clinic.foundedYear.toString(),
    priceRange: clinic.startingPrice,
    identifier: {
      "@type": "PropertyValue",
      name: "Zertifikate",
      value: certificatesString,
    },
    medicalSpecialty: "Haartransplantation",
    image: clinic.imageUrl,
  }

  return (
    <Script id={`json-ld-${clinic.id}`} type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(jsonLd)}
    </Script>
  )
}
