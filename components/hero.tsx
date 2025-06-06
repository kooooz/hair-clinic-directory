export function Hero() {
  return (
    <section className="relative w-full min-h-[140vh] pt-32 md:pt-48">
      <div className="absolute inset-0 z-0 mt-32">
        <img
          src="/vorher-haartransplantation-istanbul.jpg"
          alt="Vorher-Foto eines Patienten vor der Haartransplantation in Istanbul mit zurückgehendem Haaransatz"
          className="w-full h-full object-cover object-top"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center justify-center h-full text-center mb-64">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">
            <span className="text-[#EB5D49]">Die 10 besten Kliniken für Haartransplantation in der Türkei – 2025</span>
          </h1>
          <p className="font-body text-lg md:text-xl mb-8">
            Vergleiche die besten Haarkliniken in der Türkei und finde die perfekte Klinik für deine Haartransplantation.
          </p>
        </div>
      </div>
    </section>
  )
}
