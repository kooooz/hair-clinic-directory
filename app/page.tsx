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

export default function Home() {
  // In a production environment, this would come from environment variables
  const baseUrl = "https://beste-haarkliniken.de"

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
        <FaqSection />
        <ContactSection />
      </div>
    </>
  )
}
