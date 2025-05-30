import Script from 'next/script'

interface MedicalProcedureJsonLdProps {
  name: string
  description: string
  image: string
  url: string
  provider: {
    name: string
    url: string
  }
  preparation: string[]
  procedure: string[]
  recovery: string[]
  risks: string[]
  benefits: string[]
  cost: {
    currency: string
    value: number
    minValue: number
    maxValue: number
  }
}

export function MedicalProcedureJsonLd({
  name,
  description,
  image,
  url,
  provider,
  preparation,
  procedure,
  recovery,
  risks,
  benefits,
  cost
}: MedicalProcedureJsonLdProps) {
  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": name,
    "description": description,
    "image": image,
    "url": url,
    "provider": {
      "@type": "MedicalBusiness",
      "name": provider.name,
      "url": provider.url
    },
    "preparation": preparation,
    "procedure": procedure,
    "recovery": recovery,
    "risks": risks,
    "benefits": benefits,
    "cost": {
      "@type": "PriceSpecification",
      "priceCurrency": cost.currency,
      "price": cost.value,
      "minPrice": cost.minValue,
      "maxPrice": cost.maxValue
    },
    "medicineSystem": "https://schema.org/Allopathic",
    "bodyLocation": "https://schema.org/Head",
    "followup": "Regular follow-up appointments are scheduled to monitor progress and ensure optimal results",
    "howPerformed": "The procedure is performed under local anesthesia by experienced surgeons using advanced techniques",
    "status": "https://schema.org/ActiveActionStatus"
  }

  return (
    <Script id="medical-procedure-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(medicalProcedureSchema)}
    </Script>
  )
} 