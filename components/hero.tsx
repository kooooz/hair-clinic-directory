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
        <div className="max-w-5xl">
          <h1 className="font-heading text-3xl md:text-5xl leading-tight mb-6 text-black uppercase">
            Die 10 besten Kliniken für eine
            <br />
            Haartransplantation in der Türkei - 2025
          </h1>
          <p className="font-mono text-lg md:text-2xl mb-8 max-w-3xl mx-auto text-black">
            Vergleiche Methoden, Erfahrungen & Preise – und finde die Klinik, die zu dir passt
          </p>
        </div>
      </div>
    </section>
  )
}
