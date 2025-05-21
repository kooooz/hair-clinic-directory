import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Overview() {
  return (
    <section className="relative w-full py-0 min-h-[100vh]">
      {/* Full-width background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/behandlungszimmer-haarklinik-tuerkei.jpg"
          alt="Modernes Behandlungszimmer einer Haarklinik in der Türkei für Haartransplantationen"
          className="w-full h-full object-cover"
          loading="lazy"
          width="1920"
          height="1080"
        />
      </div>

      {/* Semi-transparent overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Centered content */}
      <div className="relative z-20 container mx-auto px-4 py-48 md:py-64 flex flex-col items-center justify-center min-h-[100vh]">
        <div className="max-w-3xl text-center">
          <p className="font-mono text-base md:text-xl text-white mb-8">
            Zu viele Anbieter, zu viele Versprechen – und ich war komplett überfordert. Ich wusste, dass ich eine
            Haartransplantation in der Türkei machen lassen möchte – aber wem konnte ich vertrauen? Genau deshalb habe
            ich diese Übersicht erstellt: Damit du schnell und sicher deine passende Klinik findest – basierend auf
            Fakten, Erfahrung und ehrlicher Einschätzung.
          </p>
          <Link href="#kliniken">
            <Button className="rounded-full font-mono text-xs">Jetzt Top-Kliniken vergleichen</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
