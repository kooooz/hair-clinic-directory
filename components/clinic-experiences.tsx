import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ImageIcon, Video, Users, Newspaper } from "lucide-react"

interface ClinicExperiencesProps {
  clinicId: string
}

export function ClinicExperiences({ clinicId }: ClinicExperiencesProps) {
  // Update the clinicLinksMap object with the actual links for Dr. Serkan Aygin Clinic and Elithair
  const clinicLinksMap = {
    "vera-clinic": {
      beforeAfter:
        "https://lp.veraclinic.net/hair-transplant-turkey/?gad_source=1&gbraid=0AAAAADApdrw7Rz8aAQU9U4mNmbGUHNXWg&gclid=Cj0KCQjw5azABhD1ARIsAA0WFUEiK_chEXFwu5aH6aZ8Bak6LhSWaTqb7cXeWSSxDmowR_kHvgpkSnEaAm1MEALw_wcB#beforeafter",
      clinicVideos: "https://www.youtube.com/@VeraClinic",
      customerVideos: [
        "https://www.youtube.com/watch?v=ti1DcipVmN8",
        "https://www.youtube.com/watch?v=-50HI-DirL4&utm_source=chatgpt.com",
        "https://www.youtube.com/watch?v=Q8u22b6cihM",
      ],
      pressArticles: [
        "https://www.merkur.de/leben/gesundheit/haartransplantation-in-der-tuerkei-mit-urlaub-verbinden-92046549.html",
        "https://www.digitalfernsehen.de/news/inhalte/buntes/haartransplantationskosten-2024-in-der-tuerkei-erschwingliche-loesungen-fuer-dauerhafte-ergebnisse-1120059/",
        "https://www.globenewswire.com/news-release/2024/07/06/2909247/0/en/Vera-Clinic-Introduces-New-Generation-Hair-Implementation-Revolutionary-Techniques-and-Unmatched-Success-Rates.html?utm_source=chatgpt.com",
      ],
    },
    "cosmedica-clinic": {
      beforeAfter: "https://cosmedica.com/before-after/",
      clinicVideos: "https://www.youtube.com/@cosmedicaclinic",
      customerVideos: [
        "https://www.youtube.com/watch?v=NA6wUs0eq_Y",
        "https://www.youtube.com/watch?v=toK99UShoDI",
        "https://www.youtube.com/watch?v=rrvtAYphnho",
      ],
      pressArticles: [
        "https://www.handelsblatt.com/adv/firmen/tuerkische-haartransplantation.html",
        "https://www.businesswire.com/news/home/20221207005377/en/Giallorossi-legend-Francesco-Totti-announces-partnership-with-Dr.-Levent-Acar-to-invest-in-Turkish-hair-transplant-clinic-Cosmedica?utm_source=chatgpt.com",
        "https://www.jpost.com/consumerism/article-849073?utm_source=chatgpt.com",
      ],
    },
    "smile-hair-clinic": {
      beforeAfter: "https://www.smilehairclinic.com/de/vorher-nachher/",
      clinicVideos: "https://www.youtube.com/@SmileHairClinic",
      customerVideos: [
        "https://www.youtube.com/watch?v=nSoSe8iZ9kU",
        "https://youtu.be/E6Nzq0gv3jw?si=qKJQdUkaDux6cgNF",
        "https://youtu.be/AM0SGz2bRa8?si=e55cAiHaeUA8Bhlg",
      ],
      pressArticles: [
        "https://www.reuters.com/press-releases/smile-hair-clinic-brings-advanced-hair-transplantation-to-germany-2025-02-24/",
        "https://www.latimes.com/b2bpublishing/business-partnerships/story/2024-06-24/smile-hair-clinics-offers-a-detailed-treatment-approach-and-a-medical-tourist-experience-in-turkey",
        "https://www.cbsnews.com/news/turkey-istanbul-hair-transplant-medical-tourism/",
      ],
    },
    "estepera-clinic": {
      beforeAfter: "https://www.estepera.com/de/vorher-nachher/",
      clinicVideos: "https://www.youtube.com/@EstePeraHairClinic",
      customerVideos: [],
      pressArticles: [
        "https://markets.businessinsider.com/news/stocks/estepera-hair-clinic-advancing-hair-restoration-in-istanbul-1033900851?utm_source=chatgpt.com",
        "https://www.yorkshireeveningpost.co.uk/sponsored/estepera-hair-clinic-head-to-turkey-for-pioneering-hair-transplant-4881582?utm_source=chatgpt.com",
        "https://www.dailyrecord.co.uk/special-features/estepera-hair-clinic-shares-four-22443765",
      ],
    },
    clinicana: {
      beforeAfter: "https://www.clinicana.com/results/before-and-after/",
      clinicVideos: "https://www.youtube.com/@Clinicana",
      customerVideos: [],
      pressArticles: [],
    },
    "dr-cinik-hair-hospital": {
      beforeAfter: "https://emrahcinik.com/de/vorher-nachher/",
      clinicVideos: "https://www.youtube.com/@emrahcinik",
      customerVideos: [
        "https://youtu.be/4jfueE276h8?si=QSzoUFjXDZt9zLtj",
        "https://youtu.be/822mxZ5iwGw?si=CMVP0sXWpJ0JJPBm",
        "https://youtu.be/jk7yYRYd2Uw?si=BGiUkTbALUKwAEQQ",
      ],
      pressArticles: [],
    },
    "hermest-clinic": {
      beforeAfter:
        "https://de.hermestclinic.com/hero-v5/?gad_source=1&gbraid=0AAAAA-yqUoAoONOmWGlczZ4YbC7aQHynj&gclid=Cj0KCQjw5azABhD1ARIsAA0WFUFQtKQ_zGMq_Ck6ffIX4Odn26jkpVuSv70kn-N0RO24Pn7HW9KXkW8aAmyaEALw_wcB#vorher-nachher",
      clinicVideos: "https://www.youtube.com/@HermestClinic",
      customerVideos: [
        "https://www.youtube.com/watch?v=upeP24fG0fI",
        "https://www.youtube.com/watch?v=51t7TJSZE04",
        "https://www.youtube.com/watch?v=CCfWP7kmXfw",
      ],
      pressArticles: [
        "https://cmk.tagesspiegel.de/cms/articles/15014/anzeige/airmotion/haartransplantation-in-der-tuerkei",
        "https://www.sueddeutsche.de/advertorial/hermest/die-wahreit-ueber-den-haartransplantation-testsieger-der-tuerkei",
        "https://www.handelsblatt.com/adv/firmen/testsieger-haartransplantation-tuerkei.html",
      ],
    },
    "sule-clinic": {
      beforeAfter:
        "https://sule-hairtransplant.com/de/haartransplantation-truthahn-vor-nach-fotos/?_gl=1*1fs6mar*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjw5ubABhDIARIsAHMighYlID0UWiSQpiIrPFE5yOR-7eTWE5wGDgKfv3sgpOfI_IOyi8wmwO4aAoIOEALw_wcB&gbraid=0AAAAADFHhH-R0VItUIkiTUGXTxZYHQYia",
      clinicVideos: "https://www.youtube.com/@sulehairtransplant",
      customerVideos: ["https://youtu.be/9bdRTY74L4s?si=OK3v1ArKeQzClM9q"],
      pressArticles: [
        "https://www.feast-magazine.co.uk/business/the-emergence-of-turkey-as-a-premier-destination-for-hair-transplants-insights-by-sule-hair-transplant-clinic-36805?utm_source=chatgpt.com",
        "https://www.businessmole.com/sule-hair-transplant-clinics-perspective-on-turkeys-ascendancy-in-hair-transplantation/?utm_source=chatgpt.com",
      ],
    },
    "dr-serkan-aygin-clinic": {
      beforeAfter: "https://www.drserkanaygin.com/de/haartransplantation-turkei-ergebnisse/",
      clinicVideos: "https://www.youtube.com/@DrSerkanAyginClinic",
      customerVideos: ["https://youtu.be/sXfr1SV1xJk", "https://youtu.be/I8nCaMHzmwg", "https://youtu.be/yUS3a8Ta4AI"],
      pressArticles: [
        "https://www.gq.com/story/hair-transplant-before-after",
        "https://www.mensjournal.com/style/hair-transplant-surgery-inside-the-procedure-and-results-mens-journal",
      ],
    },
    elithair: {
      beforeAfter: "https://elithairtransplant.com/german/haartransplantation-vorher-nachher/",
      clinicVideos: "https://www.youtube.com/@Elithair",
      customerVideos: [
        "https://youtu.be/db3zaF1HhtI?si=9z_TMhmsOWURCZNu",
        "https://youtu.be/zT0QKK7PrC4?si=ynTX6L1zdtwmAcXT",
        "https://youtu.be/hEiOunUQxRA?si=bJKkaGloWdq5susJ",
      ],
      pressArticles: [
        "https://www.presseportal.de/pm/168205/5573085",
        "https://www.fr.de/pressemitteilungen/wunderwaffe-haartransplantation-dr-balwi-erklaert-wann-man-sich-dafuer-entscheiden-sollte-92299642.html",
        "https://www.handelsblatt.com/adv/firmen/haartransplantation-tuerkei-vorher-nachher.html",
      ],
    },
  }

  const links = clinicLinksMap[clinicId as keyof typeof clinicLinksMap] || {
    beforeAfter: "#",
    clinicVideos: "#",
    customerVideos: [],
    pressArticles: [],
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="p-4 flex flex-col">
        <div className="flex items-center mb-3">
          <ImageIcon className="h-5 w-5 mr-2" />
          <h3 className="font-heading text-lg">Vorher-Nachher Bilder</h3>
        </div>
        <p className="text-sm mb-4 flex-grow">Sieh dir die beeindruckenden Ergebnisse von Haartransplantationen an.</p>
        <a href={links.beforeAfter} target="_blank" rel="noopener noreferrer" className="mt-auto">
          <Button className="w-full font-mono text-xs rounded-full bg-black text-white hover:bg-gray-800">
            Vorher-Nachher Bilder ansehen
          </Button>
        </a>
      </Card>

      <Card className="p-4 flex flex-col">
        <div className="flex items-center mb-3">
          <Video className="h-5 w-5 mr-2" />
          <h3 className="font-heading text-lg">Klinik-Videos</h3>
        </div>
        <p className="text-sm mb-4 flex-grow">Offizielle Videos der Klinik zu Methoden und Ergebnissen.</p>
        <a href={links.clinicVideos} target="_blank" rel="noopener noreferrer" className="mt-auto">
          <Button className="w-full font-mono text-xs rounded-full bg-black text-white hover:bg-gray-800">
            Klinik-Videos ansehen
          </Button>
        </a>
      </Card>

      {links.customerVideos && links.customerVideos.length > 0 && (
        <Card className="p-4 flex flex-col">
          <div className="flex items-center mb-3">
            <Users className="h-5 w-5 mr-2" />
            <h3 className="font-heading text-lg">Kundenvideos</h3>
          </div>
          <p className="text-sm mb-4 flex-grow">Unabhängige Videos von Patienten über ihre Erfahrungen.</p>
          <div className="space-y-2 mt-auto">
            {links.customerVideos.map((url, index) => (
              <a key={index} href={url} target="_blank" rel="noopener noreferrer" className="block">
                <Button
                  className="w-full font-mono text-xs rounded-full bg-black text-white hover:bg-gray-800"
                  variant={index > 0 ? "outline" : "default"}
                >
                  Kundenvideo {index + 1} ansehen
                </Button>
              </a>
            ))}
          </div>
        </Card>
      )}

      {links.pressArticles && links.pressArticles.length > 0 && (
        <Card className="p-4 flex flex-col">
          <div className="flex items-center mb-3">
            <Newspaper className="h-5 w-5 mr-2" />
            <h3 className="font-heading text-lg">Presseartikel</h3>
          </div>
          <p className="text-sm mb-4 flex-grow">Berichte und Artikel über die Klinik in den Medien.</p>
          <div className="space-y-2 mt-auto">
            {links.pressArticles.map((url, index) => (
              <a key={index} href={url} target="_blank" rel="noopener noreferrer" className="block">
                <Button
                  className="w-full font-mono text-xs rounded-full bg-black text-white hover:bg-gray-800"
                  variant={index > 0 ? "outline" : "default"}
                >
                  Presseartikel {index + 1} lesen
                </Button>
              </a>
            ))}
          </div>
        </Card>
      )}
    </div>
  )
}
