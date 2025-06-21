import type { Metadata } from "next"
import { HorizontalDividerLeftAligned } from "@/components/horizontal-divider-left-aligned"
import { ContactForm } from "@/components/contact-form"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Kontakt: Fragen zu Haartransplantation in der Türkei",
  description:
    "Du hast Fragen oder brauchst Hilfe bei der Wahl deiner Haarklinik in der Türkei? Kontaktiere mich persönlich – ich helfe dir gerne weiter.",
  alternates: {
    canonical: '/kontakt',
  },
}

export default function KontaktPage() {
  // Base URL für Schema.org
  const baseUrl = "https://beste-haarkliniken.de"

  return (
    <>
      {/* Schema.org Auszeichnung für ContactPage */}
      <Script id="schema-contact" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": `${baseUrl}/kontakt#webpage`,
          url: `${baseUrl}/kontakt`,
          name: "Kontakt | Beste Haarkliniken in Istanbul",
          description:
            "Du hast Fragen oder brauchst Hilfe bei der Wahl deiner Haarklinik in der Türkei? Kontaktiere mich persönlich – ich helfe dir gerne weiter.",
          isPartOf: {
            "@id": `${baseUrl}#website`,
          },
          inLanguage: "de-DE",
          mainEntity: {
            "@type": "Organization",
            name: "Beste Haarkliniken",
            contactPoint: {
              "@type": "ContactPoint",
              email: "kontakt@beste-haarkliniken.de",
              contactType: "customer service",
              availableLanguage: ["German", "English"],
            },
          },
        })}
      </Script>

      <div className="container mx-auto px-4 py-16 mt-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-body text-3xl md:text-4xl mb-8">Kontakt | Fragen zur Haartransplantation in der Türkei</h1>

          <HorizontalDividerLeftAligned />

          <div className="my-12 space-y-8">
            <section>
              <p className="mb-6 font-mono text-sm">
                Du hast Fragen oder Feedback? Schreib uns – wir melden uns schnellstmöglich.
              </p>
            </section>

            <section>
              <h2 className="font-body text-xl mb-6">Deine Nachricht an uns</h2>
              <ContactForm />
            </section>
          </div>

          <HorizontalDividerLeftAligned />
        </div>
      </div>
    </>
  )
}
