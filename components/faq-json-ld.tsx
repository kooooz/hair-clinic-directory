import Script from "next/script"

export function FaqJsonLd() {
  const baseUrl = "https://beste-haarkliniken.de"

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Was kostet eine Haartransplantation in der Türkei?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die Kosten für eine Haartransplantation in der Türkei liegen zwischen 1.500€ und 3.500€. Dies ist deutlich günstiger als in Deutschland, wo die Preise bei 4.000€ bis 8.000€ liegen."
        }
      },
      {
        "@type": "Question",
        name: "Welche Methoden der Haartransplantation gibt es?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die gängigsten Methoden sind FUE (Follicular Unit Extraction) und DHI (Direct Hair Implantation). Beide Methoden sind minimal-invasiv und hinterlassen kaum sichtbare Narben."
        }
      },
      {
        "@type": "Question",
        name: "Wie lange dauert die Heilung nach einer Haartransplantation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die initiale Heilung dauert etwa 7-10 Tage. Die transplantierten Haare fallen nach 2-3 Wochen aus und wachsen dann neu. Nach 6-12 Monaten ist das Endergebnis sichtbar."
        }
      },
      {
        "@type": "Question",
        name: "Ist eine Haartransplantation schmerzhaft?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die Behandlung wird unter örtlicher Betäubung durchgeführt. Während der Behandlung verspüren Sie keine Schmerzen. Nach der Behandlung können leichte Beschwerden auftreten, die mit Schmerzmitteln gut behandelbar sind."
        }
      }
    ]
  }

  return (
    <Script id="json-ld-faq" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(jsonLd)}
    </Script>
  )
} 