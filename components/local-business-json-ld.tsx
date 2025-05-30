import Script from 'next/script'

interface LocalBusinessJsonLdProps {
  name: string
  description: string
  image: string
  url: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  geo: {
    latitude: number
    longitude: number
  }
  priceRange: string
  telephone: string
  openingHours: string[]
  aggregateRating?: {
    ratingValue: number
    reviewCount: number
    bestRating: number
    worstRating: number
  }
}

export function LocalBusinessJsonLd({
  name,
  description,
  image,
  url,
  address,
  geo,
  priceRange,
  telephone,
  openingHours,
  aggregateRating
}: LocalBusinessJsonLdProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": name,
    "description": description,
    "image": image,
    "url": url,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": geo.latitude,
      "longitude": geo.longitude
    },
    "priceRange": priceRange,
    "telephone": telephone,
    "openingHours": openingHours,
    "aggregateRating": aggregateRating ? {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount,
      "bestRating": aggregateRating.bestRating,
      "worstRating": aggregateRating.worstRating
    } : undefined,
    "medicalSpecialty": "Hair Transplantation",
    "availableService": {
      "@type": "MedicalTherapy",
      "name": "Hair Transplantation",
      "description": "Professional hair transplantation services using advanced techniques like FUE, DHI, and Sapphire FUE"
    }
  }

  return (
    <Script id="local-business-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(localBusinessSchema)}
    </Script>
  )
} 