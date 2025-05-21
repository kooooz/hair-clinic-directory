import type { Metadata } from "next"
import { HorizontalDividerLeftAligned } from "@/components/horizontal-divider-left-aligned"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Script from "next/script"
import { faqItems } from "@/lib/faq-data"

export const metadata: Metadata = {
  title: "Haartransplantation Türkei: Alle Antworten aus Erfahrung",
  description:
    "Du planst eine Haartransplantation in der Türkei? Hier findest Du ehrliche Antworten aus eigener Erfahrung: Kosten, Methoden, Ablauf, Heilung, Pflege & mehr.",
}

export default function FaqPage() {
  // Base URL für Schema.org
  const baseUrl = "https://beste-haarkliniken.de"

  return (
    <>
      {/* Schema.org FAQPage Auszeichnung */}
      <Script id="schema-faq" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        })}
      </Script>

      <div className="container mx-auto px-4 py-16 mt-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-body text-3xl md:text-4xl mb-8">Häufige Fragen zur Haartransplantation in der Türkei</h1>

          <HorizontalDividerLeftAligned />

          <div className="my-12">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="font-body text-sm py-4">
                    <span className="text-left">
                      {index + 1}. {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="font-mono text-xs text-gray-700 pb-4 whitespace-pre-line">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <HorizontalDividerLeftAligned />
        </div>
      </div>
    </>
  )
}
