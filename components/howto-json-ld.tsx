import Script from "next/script"

export function HowToJsonLd() {
  const baseUrl = "https://beste-haarkliniken.de"

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Ablauf einer Haartransplantation in der Türkei",
    description: "Schritt-für-Schritt Anleitung zum Prozess einer Haartransplantation in der Türkei",
    step: [
      {
        "@type": "HowToStep",
        name: "Erste Beratung",
        text: "Kontaktieren Sie die Klinik für eine erste Beratung und Terminvereinbarung. Die Klinik wird Ihnen alle notwendigen Informationen und Vorbereitungen mitteilen.",
        url: `${baseUrl}/kontakt`
      },
      {
        "@type": "HowToStep",
        name: "Anreise und Vorbereitung",
        text: "Reisen Sie nach Istanbul und lassen Sie sich am Tag vor der Behandlung von den Ärzten untersuchen. Die Klinik kümmert sich um Ihren Transfer vom Flughafen.",
        url: `${baseUrl}/klinik`
      },
      {
        "@type": "HowToStep",
        name: "Durchführung der Haartransplantation",
        text: "Die Haartransplantation wird unter örtlicher Betäubung durchgeführt. Der Prozess dauert je nach Umfang 4-8 Stunden.",
        url: `${baseUrl}/klinik`
      },
      {
        "@type": "HowToStep",
        name: "Nachsorge",
        text: "Nach der Behandlung erhalten Sie detaillierte Anweisungen zur Nachsorge. Die Klinik bleibt auch nach Ihrer Rückkehr für Fragen erreichbar.",
        url: `${baseUrl}/kontakt`
      }
    ],
    totalTime: "PT8H",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "EUR",
      value: "2500"
    }
  }

  return (
    <Script id="json-ld-howto" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(jsonLd)}
    </Script>
  )
} 