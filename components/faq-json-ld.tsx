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
          text: "Eine Haartransplantation in der Türkei kostet zwischen 1.500€ und 3.500€. Dies ist deutlich günstiger als in Deutschland, wo die Preise bei 4.000€ bis 8.000€ liegen. Die Kosten variieren je nach Klinik, Methode und Anzahl der benötigten Grafts."
        }
      },
      {
        "@type": "Question",
        name: "Wie lange dauert die Heilung nach einer Haartransplantation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die Heilung nach einer Haartransplantation verläuft in mehreren Phasen: Die initiale Heilung dauert 7-10 Tage, die Krusten fallen nach 10-14 Tagen ab. Nach 2-3 Wochen fallen die transplantierten Haare aus. Das neue Haarwachstum beginnt nach 3-4 Monaten, und das finale Ergebnis ist nach 12-18 Monaten sichtbar."
        }
      },
      {
        "@type": "Question",
        name: "Welche Methoden der Haartransplantation gibt es?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die vier gängigsten Methoden sind: 1) FUE (Follicular Unit Extraction): Einzelne Haarfollikel werden entnommen. 2) Saphir-FUE: Weiterentwicklung mit feineren Saphirklingen. 3) DHI (Direct Hair Implantation): Direktes Einsetzen ohne vorherige Kanäle. 4) FUT (Strip-Methode): Entnahme eines Hautstreifens. FUE und DHI sind heute die am häufigsten verwendeten Methoden."
        }
      },
      {
        "@type": "Question",
        name: "Ist eine Haartransplantation schmerzhaft?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Während der Haartransplantation selbst verspüren Sie durch die lokale Betäubung keine Schmerzen. Die Betäubungsspritzen sind der einzige unangenehme Moment. Nach der OP können leichte Spannungsgefühle im Spenderbereich auftreten, die aber gut behandelbar sind und nach wenigen Tagen verschwinden."
        }
      },
      {
        "@type": "Question",
        name: "Wie viele Grafts benötige ich für eine Haartransplantation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die benötigte Anzahl an Grafts hängt vom Ausmaß des Haarausfalls ab: Geheimratsecken benötigen 1.000-1.500 Grafts, Stirn und Haarlinie 2.000-2.500 Grafts, der Oberkopf 2.500-4.000 Grafts. Bei komplettem Haarausfall im oberen Bereich werden 4.000-6.000+ Grafts benötigt."
        }
      },
      {
        "@type": "Question",
        name: "Wie lange halten die transplantierten Haare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die transplantierten Haare sind dauerhaft, da sie aus dem genetisch stabilen Spenderbereich stammen. Diese Haare fallen nicht mehr aus. Allerdings können die nicht-transplantierten Haare weiterhin ausfallen, weshalb oft eine erhaltende Behandlung mit Minoxidil oder Finasterid empfohlen wird."
        }
      },
      {
        "@type": "Question",
        name: "Wie finde ich eine seriöse Haarklinik in der Türkei?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eine seriöse Haarklinik erkennen Sie an: Nachvollziehbaren Vorher-Nachher-Bildern, guter Erreichbarkeit, ehrlicher Kommunikation, echten Erfahrungsberichten, realistischen Versprechen und transparenten Preisen ohne versteckte Zusatzkosten. Die Klinik sollte zertifiziert sein und über erfahrene Ärzte verfügen."
        }
      },
      {
        "@type": "Question",
        name: "Was ist der Ablauf einer Haartransplantation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Der Ablauf einer Haartransplantation gliedert sich in: 1) Beratung und Planung mit Haarliniendesign, 2) Rasur und lokale Betäubung, 3) Entnahme der Grafts, 4) Aufbereitung und Zählung, 5) Einsetzen der Grafts, 6) Nachkontrolle und Pflegeanleitung. Der gesamte Eingriff dauert etwa 6-8 Stunden."
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