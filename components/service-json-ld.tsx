import Script from 'next/script'

interface ServiceJsonLdProps {
  name: string
  description: string
  provider: {
    name: string
    url: string
  }
  areaServed: {
    type: string
    name: string
  }[]
  serviceType: string[]
  priceSpecification: {
    price: number
    minPrice: number
    maxPrice: number
    priceCurrency: string
    unitText: string
  }
  hasOfferCatalog?: {
    name: string
    itemListElement: {
      name: string
      description: string
      price: number
    }[]
  }
}

export function ServiceJsonLd({
  name,
  description,
  provider,
  areaServed,
  serviceType,
  priceSpecification,
  hasOfferCatalog
}: ServiceJsonLdProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": name,
    "description": description,
    "provider": {
      "@type": "MedicalBusiness",
      "name": provider.name,
      "url": provider.url
    },
    "areaServed": areaServed.map(area => ({
      "@type": area.type,
      "name": area.name
    })),
    "serviceType": serviceType,
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": priceSpecification.price,
      "minPrice": priceSpecification.minPrice,
      "maxPrice": priceSpecification.maxPrice,
      "priceCurrency": priceSpecification.priceCurrency,
      "unitText": priceSpecification.unitText
    },
    "hasOfferCatalog": hasOfferCatalog ? {
      "@type": "OfferCatalog",
      "name": hasOfferCatalog.name,
      "itemListElement": hasOfferCatalog.itemListElement.map((item, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": item.name,
          "description": item.description
        },
        "price": item.price,
        "priceCurrency": priceSpecification.priceCurrency
      }))
    } : undefined,
    "medicalAudience": {
      "@type": "MedicalAudience",
      "audienceType": "Patient"
    }
  }

  return (
    <Script id="service-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(serviceSchema)}
    </Script>
  )
} 