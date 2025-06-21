import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Star, Stethoscope, BadgeIcon as Certificate } from "lucide-react"
import { clinics } from "@/lib/clinic-data"
import { clinicsComparisonData } from "@/lib/clinic-comparison-data"
import { notFound } from "next/navigation"
import { ClinicJsonLd } from "@/components/clinic-json-ld"
import { ClinicDetailJsonLd } from "@/components/clinic-detail-json-ld"
import { ClinicGallery } from "@/components/clinic-gallery"
import { ClinicExperiences } from "@/components/clinic-experiences"
import { SocialMetaTags } from "@/components/social-meta-tags"
import { ArticleJsonLd } from "@/components/article-json-ld"
import { Breadcrumb } from "@/components/breadcrumb"
// Helper function to format rating with dot for display
const formatRating = (rating: number): string => {
  return rating.toFixed(1)
}

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const clinic = clinics.find((c) => c.id === params.id)
  const clinicDetail = clinicsComparisonData.find((c) => c.id === params.id)

  if (!clinic) {
    return {
      title: "Klinik nicht gefunden",
    }
  }

  // Klinikspezifische Meta-Titel und Beschreibungen
  const metaTitles: Record<string, string> = {
    "vera-clinic": "Vera Clinic Istanbul: Haartransplantation & OxyCure",
    "cosmedica-clinic": "Cosmedica Clinic: Micro Sapphire DHI & Dr. Levent Acar",
    "smile-hair-clinic": "Smile Hair Clinic Türkei: Erfahrungen & Preise",
    "estepera-clinic": "Esteprea Klinik Istanbul: Haartransplantation ohne Rasur",
    clinicana: "Clinicana Istanbul: Perkutan-Transplantation & Erfahrungen",
    "dr-cinik-hair-hospital": "Dr. Cinik Hospital Istanbul: Haartransplantation & Erfahrungen",
    "hermest-clinic": "Hermest Clinic: UNIQUE FUE® Methode Istanbul",
    "sule-clinic": "Sule Clinic Türkei: Haartransplantation & Erfahrungen",
    "dr-serkan-aygin-clinic": "Dr. Serkan Aygin Clinic: Haartransplantation ohne Rasur",
    elithair: "Elithair Istanbul: NEO FUE® & SDHI Techniken",
  }

  const metaDescriptions: Record<string, string> = {
    "vera-clinic":
      "Erfahre alles über die Vera Clinic in Istanbul: OxyCure-Therapie, Preise, Erfahrungen und Vorher-Nachher-Bilder. Jetzt informieren und Beratung anfordern!",
    "cosmedica-clinic":
      "Die Cosmedica Clinic unter Dr. Levent Acar bietet Micro Sapphire DHI-Haartransplantationen. Erfahre alles über Methoden, Preise und Ergebnisse!",
    "smile-hair-clinic":
      "Die Smile Hair Clinic in Istanbul bietet Haartransplantationen nach der True™ Philosophy. Erfahre alles über Methoden, Preise und Erfahrungsberichte!",
    "estepera-clinic":
      "Die Estepera Klinik in Istanbul bietet Haartransplantationen ohne Rasur. Erfahre alles über Methoden, Preise und Erfahrungsberichte!",
    clinicana:
      "Clinicana in Istanbul ist spezialisiert auf Perkutan-Transplantationen. Erfahre alles über Methoden, Preise und Erfahrungsberichte!",
    "dr-cinik-hair-hospital":
      "Das Dr. Cinik Hospital in Istanbul ist offizieller Partner von West Ham United. Erfahre alles über Methoden, Preise und Erfahrungsberichte!",
    "hermest-clinic":
      "Die Hermest Clinic in Istanbul bietet die patentierte UNIQUE FUE®-Methode. Erfahre alles über Methoden, Preise und Erfahrungsberichte!",
    "sule-clinic":
      "Die Sule Clinic in Istanbul hat über 13.000 erfolgreiche Haartransplantationen durchgeführt. Erfahre alles über Methoden, Preise und Erfahrungsberichte!",
    "dr-serkan-aygin-clinic":
      "Die Dr. Serkan Aygin Clinic in Istanbul bietet Haartransplantationen ohne Rasur. Erfahre alles über Methoden, Preise und Erfahrungsberichte!",
    elithair:
      "Elithair in Istanbul ist die größte Haarklinik der Welt mit über 18.000 m². Erfahre alles über NEO FUE®, SDHI und weitere innovative Methoden!",
  }

  return {
    title: metaTitles[params.id] || `${clinic.name} - Haartransplantation in der Türkei | Beste Haarkliniken`,
    description: metaDescriptions[params.id] || clinic.description,
    alternates: {
      canonical: `/klinik/${params.id}`,
    },
  }
}

export async function generateStaticParams() {
  return clinics.map((clinic) => ({
    id: clinic.id,
  }))
}

export default function ClinicPage({ params }: Props) {
  const clinic = clinics.find((c) => c.id === params.id)
  const clinicDetail = clinicsComparisonData.find((c) => c.id === params.id)

  if (!clinic || !clinicDetail) {
    notFound()
  }

  // Klinikspezifische Überschriften
  const clinicHeadings: Record<string, string> = {
    "vera-clinic": "Vera Clinic – Haartransplantation mit OxyCure",
    "cosmedica-clinic": "Cosmedica Clinic – Haartransplantation mit Micro Sapphire DHI",
    "smile-hair-clinic": "Smile Hair Clinic – True™ Philosophy Haartransplantation",
    "estepera-clinic": "Estepera Klinik – Haartransplantation ohne Rasur",
    clinicana: "Clinicana – Perkutan-Transplantation Istanbul",
    "dr-cinik-hair-hospital": "Dr. Cinik Hospital – Partner von West Ham United",
    "hermest-clinic": "Hermest Clinic – UNIQUE FUE® Methode",
    "sule-clinic": "Sule Clinic – Klinik für viele prominente Persönlichkeiten",
    "dr-serkan-aygin-clinic": "Dr. Serkan Aygin Clinic – Haartransplantation ohne Rasur",
    elithair: "Elithair – größte Haarklinik der Welt",
  }

  // Klinikspezifische Überblicke
  const clinicOverviews: Record<string, string> = {
    "vera-clinic":
      "Die Vera Clinic in Istanbul zählt zu den führenden Einrichtungen für Haartransplantationen in der Türkei. Unter der Leitung von Dr. Kerim Benan Ünsal und Dr. Ekrem Ramazan Keskin bietet die Klinik innovative Behandlungsmethoden, darunter die exklusive OxyCure-Therapie. Die OxyCure-Therapie kombiniert Hyperbare Sauerstoffbehandlung mit Stammzellaktivierung, um die Heilung nach der Haartransplantation zu beschleunigen und die Überlebensrate der transplantierten Haarfollikel zu erhöhen. In Verbindung mit der Sapphire FUE-Technik ermöglicht diese Methode eine schnellere Genesung und ein dichteres Haarwachstum. Die Vera Clinic wurde mit dem European Award in Medicine 2021 ausgezeichnet und ist offizieller Haartransplantationspartner des Everton FC. Mit umfassenden Zertifizierungen wie ISO und JCI garantiert die Klinik höchste Qualitätsstandards.",
    "cosmedica-clinic":
      "Die Cosmedica Clinic in Istanbul, geleitet von Dr. Levent Acar, ist bekannt für ihre fortschrittlichen Haartransplantationstechniken. Die Micro Sapphire DHI-Methode kombiniert die Präzision von Saphirklingen mit der Direktimplantationstechnik, um natürliche und dauerhafte Ergebnisse zu erzielen. Dr. Acar, der fließend Deutsch spricht, hat über 20.000 erfolgreiche Haartransplantationen durchgeführt und betreut regelmäßig prominente Patienten. Die Klinik bietet maßgeschneiderte Behandlungspläne und umfassende Nachsorge, um den Heilungsprozess zu optimieren.",
    "smile-hair-clinic":
      "Die Smile Hair Clinic in Istanbul verfolgt die True™ Philosophy, die auf den Werten Analyse, Umsetzung und Weiterentwicklung basiert. Unter der Leitung von Dr. Mehmet Erdoğan bietet die Klinik individuelle Haartransplantationslösungen mit modernsten Techniken wie FUE und DHI. Die True™ Philosophy stellt sicher, dass jeder Patient eine detaillierte Beratung, präzise Haarliniengestaltung und kontinuierliche Innovation erhält. Die Klinik ist international anerkannt und wurde in Medien wie der BBC vorgestellt.",
    "estepera-clinic":
      "Die Estepera Klinik in Istanbul, unter der Leitung von Dr. Behruz Uysal, bietet Haartransplantationen ohne Rasur an. Diese Methode ermöglicht es Patienten, ihre bestehenden Haare zu behalten, während neue Haarfollikel transplantiert werden. Die Klinik verwendet Techniken wie FUE, DHI und Sapphire FUE, um natürliche Ergebnisse zu erzielen. Mit einem mehrsprachigen Ärzteteam und maßgeschneiderten Behandlungsplänen bietet Estepera umfassende Betreuung für internationale Patienten.",
    clinicana:
      "Clinicana, gelegen im Herzen Istanbuls, ist spezialisiert auf die Perkutan-Transplantationstechnik. Diese Methode ermöglicht präzisere Implantationen und fördert ein natürlicheres Haarwachstum. Unter der Leitung von Prof. Dr. Soner Tatlıdede bietet die Klinik moderne Einrichtungen und ein erfahrenes medizinisches Team. Mit transparenten Preisen und umfassender Nachsorge ist Clinicana eine bevorzugte Wahl für internationale Patienten.",
    "dr-cinik-hair-hospital":
      "Das Dr. Cinik Hospital in Istanbul wird von Dr. Emrah Cinik geleitet, einem renommierten Experten für Haartransplantationen mit über 19 Jahren Erfahrung. Die Klinik bietet moderne Techniken und individuelle Behandlungspläne. Dr. Emrah Cinik hat über 50.000 erfolgreiche Haartransplantationen durchgeführt. Als offizieller medizinischer Partner von West Ham United FC ist die Klinik international anerkannt. Die Klinik bietet modernste Techniken wie FUE, DHI und Sapphire FUE an. Mit einem erfahrenen Team und umfassender Betreuung gewährleistet das Dr. Cinik Hospital natürliche und dauerhafte Ergebnisse.",
    "hermest-clinic":
      "Die Hermest Clinic in Istanbul ist bekannt für ihre patentierte UNIQUE FUE®-Methode, die eine 99%ige Erfolgsquote bietet. Diese Technik ermöglicht präzisere Extraktionen und Implantationen, was zu natürlicheren Ergebnissen führt. Die Klinik ist von der türkischen Gesundheits- und Tourismusbehörde zertifiziert und bietet rund um die Uhr Unterstützung für internationale Patienten. Mit modernsten Einrichtungen und einem erfahrenen Team ist Hermest eine führende Wahl für Haartransplantationen in der Türkei.",
    "sule-clinic":
      "Die Sule Clinic in Istanbul, unter der Leitung von Prof. Dr. Hakan Hanımoglu, hat über 13.000 erfolgreiche Haartransplantationen durchgeführt und prominente Persönlichkeiten wie James Maddison und Fabio Cannavaro behandelt. Die Klinik bietet Techniken wie DHI, FUE und Sapphire FUE an und legt großen Wert auf individuelle Betreuung und natürliche Ergebnisse. Mit modernsten Einrichtungen und einem erfahrenen Team ist die Sule Clinic eine bevorzugte Wahl für internationale Patienten.",
    "dr-serkan-aygin-clinic":
      "Die Dr. Serkan Aygin Clinic in Istanbul gehört zu den renommiertesten Anlaufstellen für moderne Haartransplantationen in der Türkei. Unter der Leitung von Dr. Serkan Aygin, einem der Pioniere auf dem Gebiet der Haarchirurgie, hat die Klinik seit ihrer Gründung tausende erfolgreiche Haartransplantationen durchgeführt. Die Klinik ist besonders bekannt für ihre fortschrittlichen Techniken, die präzise, effektiv und patientenfreundlich sind. Ein herausragendes Merkmal der Klinik ist die Haartransplantation ohne Rasur, eine Technik, die besonders für Menschen geeignet ist, die ihre Behandlung diskret durchführen lassen möchten. Dabei kommt häufig die innovative DHI-Methode (Direct Hair Implantation) zum Einsatz, die ein besonders dichtes und natürlich wirkendes Ergebnis ermöglicht. Die Klinik nutzt außerdem eine speziell entwickelte, schmerzfreie Sedierung, die eine entspannte und angenehme Behandlung garantiert – auch für empfindliche Patient:innen. In der Klinik arbeitet ein eingespieltes medizinisches Team unter modernsten hygienischen Bedingungen. Die Einrichtung bietet zudem eine 3D-Haaranalyse, mit der die Spender- und Empfängerzonen exakt analysiert und individuelle Behandlungspläne erstellt werden können. Die Kombination aus moderner Technologie, fundierter Diagnostik und langjähriger Erfahrung sorgt für überdurchschnittlich gute Ergebnisse.",
    elithair:
      "Elithair in Istanbul ist die größte Haarklinik der Welt mit einer Fläche von 18.000 m² und 13 Etagen. Unter der Leitung von Dr. Abdulaziz Balwi bietet die Klinik innovative Verfahren wie NEO FUE® und SDHI an. Mit über 100.000 erfolgreichen Haartransplantationen und dem größten DHI-Team der Welt setzt Elithair neue Maßstäbe in der Haarmedizin. Die Klinik bietet modernste Einrichtungen, umfassende Betreuung und maßgeschneiderte Behandlungspläne für internationale Patienten.",
  }

  // Klinikspezifische Behandlungsmethoden
  const clinicTreatmentMethods: Record<string, string> = {
    "vera-clinic":
      "Spezialisiert auf die FUE-Technik, bietet die Vera Clinic auch DHI-Verfahren an, um natürliche und dauerhafte Ergebnisse zu erzielen. Die Klinik legt großen Wert auf eine individuelle Beratung und Nachsorge, um den Heilungsprozess optimal zu begleiten.",
    "cosmedica-clinic":
      "Die Klinik ist spezialisiert auf die Micro Sapphire DHI-Technologie, die für ihre hohe Präzision und natürliche Ergebnisse bekannt ist. Diese Methode ermöglicht eine schnellere Heilung und minimale Narbenbildung.",
    "smile-hair-clinic":
      "Spezialisiert auf FUE- und DHI-Techniken, legt die Smile Hair Clinic großen Wert auf natürliche Haarlinien und eine schnelle Genesung. Die Klinik bietet auch nadelfreie Anästhesie für maximalen Komfort.",
    "estepera-clinic":
      "Die Klinik bietet verschiedene Techniken wie FUE, DHI und Sapphire FUE an, um den individuellen Bedürfnissen der Patienten gerecht zu werden. Auch Haartransplantationen ohne Rasur sind möglich.",
    clinicana:
      "Spezialisiert auf FUE-Techniken, bietet Clinicana auch DHI-Verfahren an, um natürliche und dauerhafte Ergebnisse zu erzielen. Die Klinik legt großen Wert auf eine schonende Behandlung und schnelle Heilung.",
    "dr-cinik-hair-hospital":
      "Spezialisiert auf FUE- und DHI-Techniken, bietet das Dr. Cinik Hospital auch unrasierte Haartransplantationen und Barttransplantationen an. Die Klinik legt großen Wert auf natürliche Ergebnisse und schnelle Heilung.",
    "hermest-clinic":
      "Spezialisiert auf die Unique FUE®-Technik, bietet die Hermest Clinic individuelle Behandlungspläne für natürliche und dauerhafte Ergebnisse. Die Klinik legt großen Wert auf eine schonende Behandlung und schnelle Heilung.",
    "sule-clinic":
      "Spezialisiert auf DHI-, FUE- und Sapphire FUE-Techniken, bietet die Sule Clinic maßgeschneiderte Behandlungspläne für jeden Patienten. Die Klinik legt großen Wert auf eine schonende Behandlung und schnelle Heilung.",
    "dr-serkan-aygin-clinic":
      "Die Klinik bietet alle gängigen, modernen Methoden der Haarverpflanzung an – mit einem besonderen Fokus auf die DHI-Technik (Direct Hair Implantation). Diese Methode erlaubt eine besonders präzise Platzierung der Haarfollikel ohne vorherige Kanaleröffnung – das minimiert die Heilungszeit und liefert besonders natürliche Ergebnisse. Besonders hervorzuheben ist die Möglichkeit zur Haartransplantation ohne Rasur, die ideal für Patient:innen ist, die die Behandlung diskret durchführen lassen möchten. Zusätzlich setzt die Klinik auf die FUE-Technik (Follicular Unit Extraction) mit Saphir-klingen für saubere Schnitte und eine geringere Narbenbildung.",
    elithair:
      "Elithair bietet eine Vielzahl modernster Techniken an, darunter: NEO FUE®: Eine von Dr. Balwi entwickelte Methode zur Vorbereitung der Kopfhaut, die das Haarwachstum um bis zu 98 % steigern kann. SDHI-Technik: Eine exklusive Kombination aus Saphir- und DHI-Technik, die besonders für Frauen geeignet ist und natürliche Ergebnisse liefert. FUE, DHI und Saphir FUE: Bewährte Methoden für präzise und schonende Haartransplantationen.",
  }

  // Klinikspezifische Besonderheiten
  const clinicSpecialties: Record<string, string[]> = {
    "vera-clinic": [
      "Umfassende Zertifizierungen (EFQM, ISO, JCI)",
      "European Award in Medicine 2021",
      "Offizieller Haartransplantationspartner von Everton FC",
      "OxyCure-Therapie zur Förderung der Heilung",
    ],
    "cosmedica-clinic": [
      "Dr. Levent Acar spricht Deutsch",
      "Viele Berühmtheiten haben sich einer Behandlung unterzogen",
    ],
    "smile-hair-clinic": [
      "True™ Philosophy Schulungskonzept",
      "All-Inclusive-Betreuungspakete",
      "Erfahrene und international anerkannte Ärzte",
      "Moderne FUE- und DHI-Transplantationstechniken",
      "Internationale Medienpräsenz (z. B. BBC Feature)",
    ],
    "estepera-clinic": [
      "Mehrsprachiges Ärzteteam",
      "Breites Spektrum an Techniken (FUE Saphir, FUE ohne Rasur, DHI, FUT Streifen, BHT)",
    ],
    clinicana: ["Innovative Perkutan-Transplantationen", "Einheitlicher Preis für verschiedene Haarmengen"],
    "dr-cinik-hair-hospital": [
      "Über 50.000 erfolgreiche Transplantationen",
      "Offizieller medizinischer Partner von West Ham United FC",
    ],
    "hermest-clinic": ["Patentierte UNIQUE FUE®-Methode", "99% Erfolgsquote", "Mehrfach ausgezeichnet"],
    "sule-clinic": [
      "Über 13.000 erfolgreiche Haartransplantationen",
      "Behandlung prominenter Persönlichkeiten wie James Maddison und Fabio Cannavaro",
    ],
    "dr-serkan-aygin-clinic": [
      "Schmerzfreie Behandlung dank optimierter Sedierung",
      "Haartransplantation ohne Rasur (ideal für Berufstätige)",
      "3D-Haaranalyse für präzise Planung",
      "International ausgezeichnet, u. a. mit dem European Award in Medicine",
    ],
    elithair: [
      "Größte Haarklinik der Welt mit über 18.000 m² Fläche",
      "Über 100.000 erfolgreiche Haartransplantationen weltweit",
      "Eigenentwickelte Verfahren wie NEO FUE® und SDHI",
      "Größtes DHI-Team der Welt",
      'Innovative "Sleep-Deep"-Sedierung für eine schmerzfreie Behandlung',
    ],
  }

  // Klinikspezifische Erfahrungen
  const clinicExperiences: Record<string, string> = {
    "vera-clinic":
      "Viele Patienten berichten von positiven Erfahrungen und beeindruckenden Vorher-Nachher-Ergebnissen nach ihrer Haartransplantation in der Vera Clinic.",
    "cosmedica-clinic":
      "Patienten loben die professionelle Betreuung und die natürlichen Ergebnisse ihrer Haartransplantation bei Cosmedica.",
    "smile-hair-clinic":
      "Patienten berichten von positiven Erfahrungen und natürlichen Ergebnissen nach ihrer Haartransplantation in der Smile Hair Clinic.",
    "estepera-clinic":
      "Patienten schätzen die professionelle Betreuung und die natürlichen Ergebnisse ihrer Haartransplantation bei Estepera.",
    clinicana:
      "Patienten berichten von positiven Erfahrungen und natürlichen Ergebnissen nach ihrer Haartransplantation bei Clinicana.",
    "dr-cinik-hair-hospital":
      "Patienten loben die professionelle Betreuung und die natürlichen Ergebnisse ihrer Haartransplantation im Dr. Cinik Hospital.",
    "hermest-clinic":
      "Patienten berichten von positiven Erfahrungen und natürlichen Ergebnissen nach ihrer Haartransplantation in der Hermest Clinic.",
    "sule-clinic":
      "Patienten schätzen die professionelle Betreuung und die natürlichen Ergebnisse ihrer Haartransplantation in der Sule Clinic.",
    "dr-serkan-aygin-clinic":
      "Die Dr. Serkan Aygin Clinic genießt international einen exzellenten Ruf. Viele Patient:innen loben in ihren Erfahrungsberichten nicht nur das ästhetische Ergebnis, sondern auch die herzliche Betreuung, die moderne Ausstattung und die reibungslose Organisation vom ersten Kontakt bis zur Nachsorge.",
    elithair:
      "Patienten berichten von beeindruckenden Vorher-Nachher-Ergebnissen und schätzen die professionelle Betreuung sowie die modernen Behandlungsmethoden bei Elithair.",
  }

  // Extract lead doctor names from clinic overviews
  const extractLeadDoctor = (clinicId: string): string => {
    const overviewText = clinicOverviews[clinicId] || ""

    // Define patterns to match doctor names in the overviews
    const patterns: Record<string, RegExp> = {
      "vera-clinic": /Unter der Leitung von (Dr\. Kerim Benan Ünsal und Dr\. Ekrem Ramazan Keskin)/i,
      "cosmedica-clinic": /geleitet von (Dr\. Levent Acar)/i,
      "smile-hair-clinic": /Unter der Leitung von (Dr\. Mehmet Erdoğan)/i,
      "estepera-clinic": /unter der Leitung von (Dr\. Behruz Uysal)/i,
      clinicana: /Unter der Leitung von (Prof\. Dr\. Soner Tatlıdede)/i,
      "dr-cinik-hair-hospital": /von (Dr\. Emrah Cinik) geleitet/i,
      "hermest-clinic": /Leitung von (Dr\. Fatih Öztürk)/i,
      "sule-clinic": /unter der Leitung von (Prof\. Dr\. Hakan Hanımoglu)/i,
      "dr-serkan-aygin-clinic": /Unter der Leitung von (Dr\. Serkan Aygin)/i,
      elithair: /Unter der Leitung von (Dr\. Abdulaziz Balwi)/i,
    }

    const pattern = patterns[clinicId]
    if (!pattern) return clinicDetail.leadDoctor

    const match = overviewText.match(pattern)
    return match ? match[1] : clinicDetail.leadDoctor
  }

  // Instagram-Links für jede Klinik
  const instagramLinks: Record<string, string> = {
    "vera-clinic": "https://www.instagram.com/veraclinic",
    "cosmedica-clinic": "https://www.instagram.com/cosmedicaclinic/",
    "smile-hair-clinic": "https://www.instagram.com/smilehairclinic/",
    "estepera-clinic": "https://www.instagram.com/esteperahairclinic/",
    clinicana: "https://www.instagram.com/clinicana_hair_transplant/",
    "dr-cinik-hair-hospital": "https://www.instagram.com/drcinik.global/",
    "hermest-clinic": "https://www.instagram.com/hermest.turkey/",
    "sule-clinic": "https://www.instagram.com/sulehairtransplant/",
    "dr-serkan-aygin-clinic": "https://www.instagram.com/drserkanaygin/",
    elithair: "https://www.instagram.com/elithair.de/",
  }

  // Beispielhafte Links für Erfahrungen (in einer realen Implementierung würden diese aus der CSV-Datei kommen)
  const experienceLinks = {
    beforeAfter: "https://www.example.com/before-after",
    clinicVideos: "https://www.example.com/clinic-videos",
    customerVideos: "https://www.example.com/customer-videos",
    pressArticles: "https://www.example.com/press-articles",
  }

  // Base URL for the website - in production, this would come from environment variables
  const baseUrl = "https://www.beste-haarkliniken.de"
  const pageUrl = `${baseUrl}/klinik/${clinic.id}`
  const ogImageUrl = clinic.imageUrl.startsWith("http") ? clinic.imageUrl : `${baseUrl}${clinic.imageUrl}`

  // Use clinic's gallery images from clinicDetail
  const galleryImages = clinicDetail.galleryImages || [
    clinic.imageUrl,
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ]

  const breadcrumbItems = [
    { name: "Home", url: baseUrl },
    { name: "Kliniken vergleichen", url: `${baseUrl}/kliniken-vergleichen` },
    { name: clinic.name, url: pageUrl }
  ]

  return (
    <>
      <ArticleJsonLd
        title={`${clinic.name} - Haartransplantation in der Türkei | Beste Haarkliniken`}
        description={clinic.description}
        url={pageUrl}
        imageUrl={clinic.imageUrl}
        datePublished="2024-01-01T00:00:00+00:00"
        dateModified={new Date().toISOString()}
        authorName="Max"
        baseUrl={baseUrl}
      />
      <Breadcrumb items={[
        { label: "Kliniken vergleichen", href: "/kliniken-vergleichen" },
        { label: clinic.name, href: `/klinik/${clinic.id}` }
      ]} />
      <ClinicJsonLd clinic={clinic} />
      <ClinicDetailJsonLd
        clinic={clinic}
        clinicDetail={clinicDetail}
        overview={clinicOverviews[clinic.id]}
        leadDoctor={clinicDetail.leadDoctor}
      />

      {/* Add social meta tags specific to this clinic */}
      <SocialMetaTags
        title={`${clinicHeadings[clinic.id] || clinic.name} | Beste Haarkliniken`}
        description={clinicOverviews[clinic.id] || clinic.description}
        url={pageUrl}
        imageUrl={ogImageUrl}
      />

      <div id="top" className="container mx-auto px-4 py-16 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="font-heading text-3xl md:text-4xl mb-4">{clinicHeadings[clinic.id] || clinic.name}</h1>
              <p className="font-body text-lg mb-4">Leitender Arzt: {extractLeadDoctor(clinic.id)}</p>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <a
                  href={clinic.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-gray-900 transition-colors"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="font-mono">
                    {clinic.district}, {clinic.location}
                  </span>
                </a>
              </div>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center">
                  <span className="font-mono text-sm mr-1">Google:</span>
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-mono text-sm">{formatRating(clinicDetail.googleRating)}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-mono text-sm mr-1">Trustpilot:</span>
                  <Star className="h-4 w-4 fill-green-500 text-green-500 mr-1" />
                  <span className="font-mono text-sm">{formatRating(clinicDetail.trustpilotRating)}</span>
                </div>
              </div>
            </div>

            {/* Galerie */}
            <div className="mb-12">
              <h2 className="font-heading text-2xl mb-6 text-center">Bildergalerie</h2>
              <ClinicGallery images={galleryImages} clinicName={clinic.name} />
            </div>

            {/* Überblick */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl mb-4">Überblick</h2>
              <p className="text-base mb-6">{clinicOverviews[clinic.id] || clinic.description}</p>
            </div>

            {/* Behandlungsmethoden */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl mb-4">Behandlungsmethoden</h2>
              <p className="text-base mb-6">{clinicTreatmentMethods[clinic.id]}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="p-6">
                  <h3 className="font-heading text-lg mb-4 flex items-center">
                    <Stethoscope className="h-5 w-5 mr-2" />
                    Angebotene Methoden
                  </h3>
                  <ul className="space-y-2">
                    {clinicDetail.methods.map((method, index) => (
                      <li key={index} className="text-base flex items-center">
                        <span className="h-1.5 w-1.5 bg-black rounded-full mr-2"></span>
                        {method}
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-heading text-lg mb-4 flex items-center">
                    <Certificate className="h-5 w-5 mr-2" />
                    Zertifikate & Qualifikationen
                  </h3>
                  <ul className="space-y-2">
                    {clinicDetail.certificates.map((cert, index) => (
                      <li key={index} className="text-base flex items-center">
                        <span className="h-1.5 w-1.5 bg-black rounded-full mr-2"></span>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>

            {/* Besonderheiten */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl mb-4">Besonderheiten</h2>
              <ul className="space-y-2 mb-6">
                {clinicSpecialties[clinic.id]?.map((specialty, index) => (
                  <li key={index} className="text-base flex items-start">
                    <span className="h-1.5 w-1.5 bg-black rounded-full mr-2 mt-2"></span>
                    <span>{specialty}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Erfahrungen */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl mb-4">Erfahrungen</h2>
              <p className="text-base mb-6">{clinicExperiences[clinic.id]}</p>

              <ClinicExperiences clinicId={clinic.id} />
            </div>
          </div>

          <div>
            <Card className="p-6 sticky top-24">
              <h3 className="font-heading text-lg mb-4">Kontakt & Preise</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-xs text-gray-600">Preis</p>
                  <p className="font-mono font-semibold">{clinicDetail.startingPrice}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-600">Gegründet</p>
                  <p>{clinicDetail.foundedYear}</p>
                </div>

                <div className="flex items-center">
                  <div>
                    <p className="text-xs text-gray-600">Standort</p>
                    <p className="flex items-center">
                      {clinic.district}, {clinic.location}
                      <MapPin className="h-4 w-4 ml-1 text-gray-600" />
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <a href={`mailto:${clinicDetail.email}`}>
                  <Button
                    className="w-full rounded-full font-mono text-xs flex items-center justify-center border border-input bg-background text-black hover:bg-accent"
                  >
                    {clinicDetail.email}
                  </Button>
                </a>
                <a
                  href={`https://wa.me/${clinicDetail.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="w-full rounded-full font-mono text-xs flex items-center justify-center border border-input bg-background text-black hover:bg-accent"
                  >
                    {clinicDetail.whatsapp}
                  </Button>
                </a>
                {instagramLinks[clinic.id] && (
                  <a href={instagramLinks[clinic.id]} target="_blank" rel="noopener noreferrer">
                    <Button
                      className="w-full rounded-full font-mono text-xs flex items-center justify-center border border-input bg-background text-black hover:bg-accent"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      Instagram
                    </Button>
                  </a>
                )}
              </div>

              <div className="space-y-3">
                <a href={clinicDetail.website} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full rounded-full font-mono text-xs">Offizielle Website besuchen</Button>
                </a>
                <a href={clinic.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full rounded-full font-mono text-xs border border-input bg-background text-black hover:bg-accent">
                    Standort auf Google Maps
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
