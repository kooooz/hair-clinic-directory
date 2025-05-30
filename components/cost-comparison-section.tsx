import Image from 'next/image'

export function CostComparisonSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-heading mb-8 text-center">
        Kosten für eine Haartransplantation in der Türkei
      </h2>
      <div className="relative w-full max-w-6xl mx-auto">
        <Image
          src="/kosten-vergleich-haartransplantation-türkei.jpg"
          alt="Kostenvergleich Haartransplantation Türkei"
          width={1920}
          height={1080}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-between px-8">
          <div className="w-1/2 flex justify-center">
            <p className="text-[12px] font-geist text-center">
              Durchschnittliche Kosten pro Graft
            </p>
          </div>
          <div className="w-1/2 flex justify-center">
            <p className="text-[12px] font-geist text-center">
              Durchschnittliche Gesamtkosten für eine Transplantation von<br />
              3.000 Grafts
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 