"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqItems } from "@/lib/faq-data"
import { HorizontalDivider } from "./horizontal-divider"
import Link from "next/link"

export function FaqSection() {
  const baseUrl = "https://beste-haarkliniken.de"

  return (
    <section className="py-16" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-xl mb-8">Häufige Fragen zur Haartransplantation in der Türkei</h2>

          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.slice(0, 8).map((item, index) => (
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

            <div className="text-center mt-8">
              <Link href="/faq" className="text-[#EB5D49] hover:underline font-mono text-sm">
                Alle Fragen und Antworten anzeigen →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <HorizontalDivider />
      </div>
    </section>
  )
}
