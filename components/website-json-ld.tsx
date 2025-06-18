import Script from "next/script"

export function WebsiteJsonLd() {
  const baseUrl = "https://www.beste-haarkliniken.de"

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}#website`,
    url: baseUrl,
    name: "Beste Haarkliniken in der Türkei",
    description: "Finde die beste Haarklinik in der Türkei für deine Haartransplantation. Vergleiche Top-Kliniken in Istanbul und treffe eine fundierte Entscheidung.",
    inLanguage: "de-DE",
    publisher: {
      "@type": "Organization",
      name: "Beste Haarkliniken",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.svg`
      }
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/suche?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <Script id="json-ld-website" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(jsonLd)}
    </Script>
  )
} 