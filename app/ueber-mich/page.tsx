import type { Metadata } from "next"
import { HorizontalDividerLeftAligned } from "@/components/horizontal-divider-left-aligned"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Über mich | Haartransplantation Istanbul Erfahrung",
  description: "Meine Erfahrung mit Haartransplantation in Istanbul & warum ich beste-haarkliniken.de gegründet habe.",
  alternates: {
    canonical: '/ueber-mich',
  },
}

export default function UeberMichPage() {
  // Base URL für Schema.org
  const baseUrl = "https://beste-haarkliniken.de"

  return (
    <>
      {/* Schema.org Auszeichnung */}
      <Script id="schema-ueber-mich" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${baseUrl}/ueber-mich#webpage`,
          url: `${baseUrl}/ueber-mich`,
          name: "Über mich | Haartransplantation Istanbul – Persönlicher Erfahrungsbericht",
          description:
            "Erfahre mehr über meine persönliche Erfahrung mit einer Haartransplantation in Istanbul und die Motivation hinter beste-haarkliniken.de.",
          isPartOf: {
            "@id": `${baseUrl}#website`,
          },
          inLanguage: "de-DE",
          mainEntity: {
            "@type": "Person",
            name: "Max",
            knowsAbout: ["Haartransplantation", "Istanbul", "Klinikvergleich"],
            description:
              "Gründer von beste-haarkliniken.de mit persönlicher Erfahrung mit Haartransplantation in Istanbul",
          },
        })}
      </Script>

      {/* Hero-Bereich mit Hintergrundbild */}
      <section className="relative w-full min-h-[100vh] pt-48">
        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center justify-center text-center mb-24">
          <div className="max-w-5xl">
            <h1 className="font-heading text-3xl md:text-5xl leading-tight mb-6 text-black">
              Meine persönliche Erfahrung mit einer Haartransplantation in der Türkei
            </h1>
            <p className="font-mono text-lg md:text-2xl mb-8 max-w-3xl mx-auto text-black">
              Warum ich diese Seite erstellt habe und was ich auf meiner Reise gelernt habe
            </p>
          </div>
        </div>

        <div className="relative w-full h-[90vh] -mt-16">
          <img
            src="/nachher-haartransplantation-istanbul.jpg"
            alt="Ergebnis nach Haartransplantation in Istanbul – dichter Haaransatz nach Saphir-FUE Methode"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-body text-3xl md:text-4xl mb-8">Über mich | Haartransplantation Istanbul Erfahrung</h2>

          <HorizontalDividerLeftAligned />

          <div className="my-12 space-y-12">
            <section>
              <h2 className="font-body text-xl mb-6">Der tägliche Blick in den Spiegel</h2>
              <p className="font-mono text-sm">
                Jeden Morgen sah ich im Spiegel, wie mein Haaransatz weiter zurückwich. Was zunächst nur eine kleine
                Veränderung war, entwickelte sich zu einer ständigen Quelle der Unsicherheit. Ich fühlte mich weniger
                selbstbewusst, mied Fotos und begann, mich in sozialen Situationen unwohl zu fühlen.
              </p>
            </section>

            <HorizontalDividerLeftAligned />

            <section>
              <h2 className="font-body text-xl mb-6">Die Entscheidung für eine Haartransplantation</h2>
              <p className="font-mono text-sm">
                Nach langem Zögern entschloss ich mich, etwas zu unternehmen. Die Idee einer Haartransplantation in
                Istanbul kam auf, da die Stadt für qualitativ hochwertige und dennoch erschwingliche Behandlungen
                bekannt ist. Doch je mehr ich recherchierte, desto verwirrter wurde ich. Unzählige Kliniken,
                widersprüchliche Erfahrungsberichte und aggressive Werbung machten die Entscheidung nicht leichter.
              </p>
            </section>

            <HorizontalDividerLeftAligned />

            <section>
              <h2 className="font-body text-xl mb-6">Meine Erfahrung in Istanbul</h2>
              <p className="font-mono text-sm">
                Letztendlich wählte ich eine Klinik, die mir durch transparente Kommunikation und positive Bewertungen
                Vertrauen vermittelte. Der Eingriff verlief reibungslos, und das medizinische Team war professionell und
                unterstützend. Die ersten Tage nach der Transplantation waren geprägt von Vorsicht und Geduld, aber mit
                der Zeit begann ich, die Veränderungen zu sehen.
              </p>
            </section>

            <HorizontalDividerLeftAligned />

            <section>
              <h2 className="font-body text-xl mb-6">Warum ich beste-haarkliniken.de gegründet habe</h2>
              <p className="font-mono text-sm mb-6">
                Während meiner Recherche wünschte ich mir eine zentrale, unabhängige Plattform, die verlässliche
                Informationen bietet. Mit beste-haarkliniken.de möchte ich genau das schaffen:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 bg-black rounded-full mr-2 mt-2"></span>
                  <span className="font-mono text-sm">Transparente Klinikprofile mit echten Erfahrungsberichten</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 bg-black rounded-full mr-2 mt-2"></span>
                  <span className="font-mono text-sm">
                    Tipps zur Vorbereitung und Nachsorge einer Haartransplantation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 bg-black rounded-full mr-2 mt-2"></span>
                  <span className="font-mono text-sm">Aufklärung über Risiken und realistische Erwartungen</span>
                </li>
              </ul>
              <p className="font-mono text-sm">
                Mein Ziel ist es, anderen dabei zu helfen, informierte Entscheidungen zu treffen und sich auf ihrer
                eigenen Reise sicherer zu fühlen.
              </p>
            </section>
          </div>

          <HorizontalDividerLeftAligned />
        </div>
      </div>
    </>
  )
}
