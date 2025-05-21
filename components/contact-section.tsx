import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-xl mb-8">Noch Fragen zur Haartransplantation in der Türkei?</h2>

        <Link href="/kontakt">
          <Button className="rounded-full font-mono text-xs px-8">Kontakt</Button>
        </Link>
      </div>
    </section>
  )
}
