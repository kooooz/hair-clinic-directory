import type { Metadata } from "next"
import { HorizontalDividerLeftAligned } from "@/components/horizontal-divider-left-aligned"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Impressum | Beste Haarkliniken in Istanbul",
  description: "Impressum von beste-haarkliniken.de: Finde hier alle rechtlichen Informationen und Kontaktdaten des Website-Betreibers, einschließlich Angaben gemäß § 5 TMG.",
}

export default function ImpressumPage() {
  // Base URL für Schema.org
  const baseUrl = "https://beste-haarkliniken.de"

  return (
    <>
      {/* Schema.org Auszeichnung */}
      <Script id="schema-impressum" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${baseUrl}/impressum#webpage`,
          url: `${baseUrl}/impressum`,
          name: "Impressum | Beste Haarkliniken in Istanbul",
          description: "Rechtliche Informationen und Kontaktdaten des Betreibers von beste-haarkliniken.de",
          isPartOf: {
            "@id": `${baseUrl}#website`,
          },
          inLanguage: "de-DE",
          datePublished: "2025-01-01T00:00:00+00:00",
          dateModified: new Date().toISOString(),
        })}
      </Script>

      <Script id="schema-organization" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${baseUrl}#organization`,
          name: "Beste Haarkliniken",
          url: baseUrl,
          logo: `${baseUrl}/logo.svg`,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Stubenrauchstraße 62",
            addressLocality: "Berlin",
            postalCode: "12161",
            addressCountry: "DE",
          },
          contactPoint: {
            "@type": "ContactPoint",
            email: "kontakt@beste-haarkliniken.de",
            contactType: "customer service",
          },
        })}
      </Script>

      <div className="container mx-auto px-4 py-16 mt-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-body text-3xl md:text-4xl mb-8">Impressum</h1>

          <HorizontalDividerLeftAligned />

          <div className="my-12 space-y-8">
            <section>
              <h2 className="font-body text-xl mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="mb-2 font-mono text-xs">Kolja Orzeszko</p>
              <p className="mb-2 font-mono text-xs">Stubenrauchstraße 62</p>
              <p className="mb-2 font-mono text-xs">12161 Berlin</p>
              <p className="mb-2 font-mono text-xs">Deutschland</p>
            </section>

            <section>
              <h2 className="font-body text-xl mb-4">Kontakt</h2>
              <p className="mb-2 font-mono text-xs">E-Mail: kontakt@beste-haarkliniken.de</p>
            </section>

            <section>
              <h2 className="font-body text-xl mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p className="mb-2 font-mono text-xs">Kolja Orzeszko</p>
              <p className="mb-2 font-mono text-xs">Stubenrauchstraße 62</p>
              <p className="mb-2 font-mono text-xs">12161 Berlin</p>
              <p className="mb-2 font-mono text-xs">Deutschland</p>
            </section>

            <section>
              <h2 className="font-body text-xl mb-4">Hinweis zu Kooperationen und Affiliate-Links</h2>
              <p className="mb-4 font-mono text-xs">
                Auf unserer Website finden Sie Empfehlungen zu Haartransplantationskliniken in Istanbul. Wir möchten
                transparent darauf hinweisen, dass wir mit einigen dieser Kliniken Kooperationen eingegangen sind. Das
                bedeutet:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li className="font-mono text-xs">
                  Einige Links können Affiliate-Links sein, über die wir eine Provision erhalten können, wenn Sie eine
                  Beratung anfragen oder eine Behandlung buchen.
                </li>
                <li className="font-mono text-xs">
                  Unsere Bewertungen und Empfehlungen basieren dennoch auf sorgfältiger Recherche und eigenen
                  Erfahrungen.
                </li>
                <li className="font-mono text-xs">
                  Bezahlte Kooperationen haben keinen Einfluss auf unsere objektive Bewertung der Kliniken.
                </li>
              </ul>
              <p className="font-mono text-xs">
                Wir legen großen Wert auf Transparenz und kennzeichnen daher bezahlte Inhalte entsprechend.
              </p>
            </section>

            <section>
              <h2 className="font-body text-xl mb-4">Haftung für Inhalte</h2>
              <p className="mb-4 font-mono text-xs">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="font-mono text-xs">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
                bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
                einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="font-body text-xl mb-4">Haftung für Links</h2>
              <p className="mb-4 font-mono text-xs">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              <p className="font-mono text-xs">
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="font-body text-xl mb-4">Urheberrecht</h2>
              <p className="mb-4 font-mono text-xs">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p className="font-mono text-xs">
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
                auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </section>
          </div>

          <HorizontalDividerLeftAligned />
        </div>
      </div>
    </>
  )
}
