import { Hero } from "@/components/hero"
import { Overview } from "@/components/overview"
import { AboutSection } from "@/components/about-section"
import { ClinicsList } from "@/components/clinics-list"
import { MethodologySection } from "@/components/methodology-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { HomepageJsonLd } from "@/components/homepage-json-ld"
import { faqItems } from "@/lib/faq-data"
import { CostComparisonSection } from "@/components/cost-comparison-section"
import { ClinicsComparisonTable } from "@/components/clinics-comparison-table"

export default function Home() {
  // In a production environment, this would come from environment variables
  const baseUrl = "https://www.beste-haarkliniken.de"

  return (
    <>
      <HomepageJsonLd faqItems={faqItems} baseUrl={baseUrl} />
      <div className="flex flex-col min-h-screen">
        <Hero />
        <Overview />
        <AboutSection />
        <ClinicsList />
        <MethodologySection />
        <CostComparisonSection />
        <ClinicsComparisonTable />
        <FaqSection />
        <ContactSection />

        {/* SEO Content Expansion: Beste Haartransplantation Türkei */}
        <section className="container mx-auto px-4 py-16 mt-16" id="beste-haartransplantation-tuerkei-info">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-body text-3xl md:text-4xl mb-8">Wie finde ich die beste Haartransplantation in der Türkei?</h2>
            <p className="font-mono text-base mb-6">
              Die Suche nach der <strong>besten Haartransplantation Türkei</strong> ist für viele Patienten eine Herausforderung. Ich habe selbst lange recherchiert, viele Angebote verglichen und mich schließlich für eine Behandlung in Istanbul entschieden. Hier teile ich meine sachlichen Erfahrungen und gebe Tipps, worauf du achten solltest.
            </p>
            <h3 className="font-body text-xl mb-4">Wichtige Auswahlkriterien</h3>
            <p className="font-mono text-base mb-6">
              Achte auf erfahrene Ärzte, transparente Preise, echte Vorher-Nachher-Bilder und unabhängige Bewertungen. Zertifizierungen wie ISO oder JCI sind ein gutes Zeichen für Qualität. Die beste Haartransplantation Türkei zeichnet sich durch individuelle Beratung, moderne Methoden (wie FUE oder DHI) und eine umfassende Nachsorge aus.
            </p>
            <h3 className="font-body text-xl mb-4">Risiken und Vorteile</h3>
            <p className="font-mono text-base mb-6">
              Die Türkei ist weltweit führend im Bereich Haartransplantation – dank hoher Fallzahlen, spezialisierter Kliniken und attraktiver Preise. Dennoch gibt es auch Risiken: Achte auf seriöse Anbieter, um Komplikationen zu vermeiden. Die beste Haartransplantation Türkei bietet dir Sicherheit, Erfahrung und ein natürliches Ergebnis.
            </p>
            <h3 className="font-body text-xl mb-4">Erfahrungsberichte & Bewertungen</h3>
            <p className="font-mono text-base mb-6">
              Echte Erfahrungsberichte helfen dir, die beste Klinik zu finden. Lies unabhängige Bewertungen, schaue dir Vorher-Nachher-Fotos an und informiere dich über die Erfahrungen anderer Patienten mit der besten Haartransplantation Türkei.
            </p>
            <h3 className="font-body text-xl mb-4">Kostenvergleich: Beste Haartransplantation Türkei</h3>
            <p className="font-mono text-base mb-6">
              Die Preise für die beste Haartransplantation Türkei liegen meist zwischen 1.500€ und 3.500€. Im Vergleich zu Deutschland sparst du oft mehr als 50%. Achte darauf, dass alle Leistungen (Beratung, OP, Nachsorge, Transfers, Hotel) im Preis enthalten sind.
            </p>
            <p className="font-mono text-base mt-8">
              Fazit: Die beste Haartransplantation Türkei findest du mit sorgfältiger Recherche, ehrlichen Erfahrungsberichten und einem transparenten Vergleich der Top-Kliniken. Nutze unsere Plattform, um die beste Entscheidung für deine Haartransplantation zu treffen!
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
