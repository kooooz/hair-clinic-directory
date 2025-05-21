export type ClinicComparisonData = {
  id: string
  name: string
  location: string
  district: string
  googleMapsUrl: string
  methods: string[]
  treatments: string[]
  website: string
  email: string
  whatsapp: string
  leadDoctor: string
  foundedYear: number
  treatmentsCount: string
  certificates: string[]
  startingPrice: string
  paymentMethods: string[]
  languages: string[]
  googleRating: number
  trustpilotRating: number
  services: string[]
  imageUrl: string
  galleryImages?: string[]
}

// Diese Daten würden normalerweise aus der CSV-Datei geladen werden
export const clinicsComparisonData: ClinicComparisonData[] = [
  {
    id: "vera-clinic",
    name: "Vera Clinic",
    location: "Istanbul, Türkei",
    district: "Kartal",
    googleMapsUrl: "https://maps.app.goo.gl/P9ECYJjuvDJekmu5A",
    methods: ["DHI", "FUE", "Sapphire FUE", "Hyper FUE"],
    treatments: ["Haartransplantation", "Barttransplantation", "Augenbrauentransplantation"],
    website: "https://www.veraclinic.net/de",
    email: "info@veraclinic.net",
    whatsapp: "+90 549 843 4629",
    leadDoctor: "Kerim Benan Ünsal und Ekrem Ramazan Keskin",
    foundedYear: 2013,
    treatmentsCount: "25.000+",
    certificates: [
      "ISO 9001",
      "ISO 10002",
      "ISO 14001",
      "ISO 27001",
      "TÜV-Zertifizierung",
      "Health Tourism Authorization Certificate",
    ],
    startingPrice: "ab 2.990 €",
    paymentMethods: ["Kreditkarte", "Überweisung", "Bar"],
    languages: ["Deutsch", "Englisch", "Türkisch", "Spanisch", "Französisch", "Italienisch", "Portugiesisch"],
    googleRating: 4.8,
    trustpilotRating: 4.9,
    services: [
      "VIP-Transferservice",
      "5-Sterne-Hotelunterkunft inkl. Frühstück",
      "persönliche Betreuung durch Übersetzer",
      "Haaranalyse und Beratung",
      "Individuelle Behandlungsplanung",
      "Nachsorge-Kit",
      "PRP-Behandlung",
      "12 Monate Post-Op Care per WhatsApp",
      "Lasertherapie zur Haarregeneration",
      "24/7 Betreuung"
  ],
  imageUrl: "/vera-clinic-haartransplantation-istanbul-rezeption.jpg",
  galleryImages: [
    "/vera-clinic-haartransplantation-istanbul-rezeption.jpg",
    "/vera-clinic-haartransplantation-istanbul-behandlungsraum.jpg",
    "/vera-clinic-haartransplantation-istanbul-waschraum.jpg",
    "/vera-clinic-haartransplantation-istanbul-klinik.jpg"
  ]
},
  {
    id: "cosmedica-clinic",
    name: "Cosmedica Clinic",
    location: "Istanbul, Türkei",
    district: "Şişli",
    googleMapsUrl: "https://maps.app.goo.gl/ffetmBzMBGeH9Jv7A",
    methods: ["DHI", "FUE", "Sapphire FUE", "Micro Sapphire DHI"],
    treatments: ["Haartransplantation", "Barttransplantation"],
    website: "https://www.cosmedica.com/de",
    email: "info@cosmedica.com",
    whatsapp: "+90 444 4267",
    leadDoctor: "Dr. Levent Acar",
    foundedYear: 2007,
    treatmentsCount: "20.000+",
    certificates: ["ISO 9001", "JCI", "Health Tourism Authorization Certificate"],
    startingPrice: "ab 2.450 €",
    paymentMethods: ["Kreditkarte", "Überweisung", "Bar"],
    languages: ["Deutsch", "Englisch", "Französisch", "Italienisch", "Spanisch", "Portugiesisch", "Türkisch"],
    googleRating: 4.9,
    trustpilotRating: 4.9,
    services: [
      "VIP-Transferservice",
      "5-Sterne-Hotelunterkunft inkl. Frühstück",
      "persönliche Betreuung durch Übersetzer",
      "Haaranalyse und Beratung",
      "Individuelle Behandlungsplanung",
      "Nachsorge-Kit",
      "PRP-Behandlung",
      "12 Monate Post-Op Care per WhatsApp",
      "24/7 Betreuung"
    ],
    imageUrl: "/cosmedica-clinic-haartransplantation-istanbul-aufenthaltsraum.jpg",
    galleryImages: [
      "/cosmedica-clinic-haartransplantation-istanbul-aufenthaltsraum.jpg",
      "/cosmedica-clinic-haartransplantation-istanbul-behandlungbereich.jpg",
      "/cosmedica-clinic-haartransplantation-istanbul-behandlungszimmer.jpg",
      "/cosmedica-clinic-haartransplantation-istanbul-klinik.jpg"
    ]
  },
  {
    id: "smile-hair-clinic",
    name: "Smile Hair Clinic",
    location: "Istanbul, Türkei",
    district: "Ümraniye",
    googleMapsUrl: "https://maps.app.goo.gl/D1fGJG98UNJmfaLE8",
    methods: ["DHI", "FUE", "Sapphire FUE"],
    treatments: ["Haartransplantation", "Barttransplantation", "Augenbrauentransplantation"],
    website: "https://smilehairclinic.com/de",
    email: "info@smilehairclinic.com",
    whatsapp: "+90 549 149 2400",
    leadDoctor: "Dr. Mehmet Erdogan",
    foundedYear: 2018,
    treatmentsCount: "10.000+",
    certificates: ["Health Tourism Authorization Certificate"],
    startingPrice: "ab 2.390 €",
    paymentMethods: ["Kreditkarte", "Überweisung", "Bar"],
    languages: ["Englisch", "Deutsch", "Türkisch", "Spanisch", "Italienisch"],
    googleRating: 4.9,
    trustpilotRating: 4.9,
    services: ["VIP-Transferservice", "5-Sterne-Hotelunterkunft inkl. Frühstück", "persönliche Betreuung durch Übersetzer", "Haaranalyse und Beratung", "Individuelle Behandlungsplanung", "Nachsorge-Kit", "12 Monate Post-Op Care per WhatsApp", "24/7 Betreuung"],
    imageUrl: "/smile-hair-clinic-haartransplantation-istanbul-empfang.jpg",
    galleryImages: [
      "/smile-hair-clinic-haartransplantation-istanbul-empfang.jpg",
      "/smile-hair-clinic-haartransplantation-istanbul-aufenthaltsraum.jpg",
      "/smile-hair-clinic-haartransplantation-istanbul-waschraum.jpg",
      "/smile-hair-clinic-haartransplantation-istanbul-clinic.jpg"
    ]
  },
  {
    id: "estepera-clinic",
    name: "Estepera Clinic",
    location: "Istanbul, Türkei",
    district: "Şişli",
    googleMapsUrl: "https://maps.app.goo.gl/An7reRDQ72XHf8T99",
    methods: ["DHI", "FUE", "Sapphire FUE"],
    treatments: ["Haartransplantation", "Barttransplantation"],
    website: "https://www.estepera.com/de",
    email: "info@estepera.com",
    whatsapp: "+90 543 486 9466",
    leadDoctor: "Dr. Behruz Uysal",
    foundedYear: 2010,
    treatmentsCount: "60.000+",
    certificates: ["ISO 9001", "Health Tourism Authorization Certificate"],
    startingPrice: "ab 2.100 €",
    paymentMethods: ["Kreditkarte", "Überweisung", "Bar"],
    languages: ["Deutsch", "Englisch", "Französisch", "Spanisch", "Italienisch", "Türkisch", "Portugiesisch"],
    googleRating: 4.9,
    trustpilotRating: 4.9,
    services: ["VIP-Transferservice", "5-Sterne-Hotelunterkunft inkl. Frühstück", "persönliche Betreuung durch Übersetzer", "Haaranalyse und Beratung", "Individuelle Behandlungsplanung", "Nachsorge-Kit", "12 Monate Post-Op Care per WhatsApp", "24/7 Betreuung"],
    imageUrl: "/estepera-clinic-haartransplantation-istanbul-rezeption.jpg",
    galleryImages: [
      "/estepera-clinic-haartransplantation-istanbul-rezeption.jpg",
      "/estepera-clinic-haartransplantation-istanbul-behandlungszimmer.jpg",
      "/estepera-clinic-haartransplantation-istanbul-waschraum.jpg",
      "/estepera-clinic-haartransplantation-istanbul-hotel.jpg"
    ]
  },
  {
    id: "clinicana",
    name: "Clinicana",
    location: "Istanbul, Türkei",
    district: "Beyoğlu",
    googleMapsUrl: "https://maps.app.goo.gl/R6EcqEqjYboMXKmb8",
    methods: ["DHI", "FUE", "Sapphire FUE"],
    treatments: ["Haartransplantation", "Barttransplantation", "Augenbrauentransplantation"],
    website: "https://clinicana.com/de",
    email: "info@clinicana.com",
    whatsapp: "+90 545 300 6714",
    leadDoctor: "Dr. Soner Tatlıdede",
    foundedYear: 2015,
    treatmentsCount: "15.000+",
    certificates: ["ISO 9001", "JCI"],
    startingPrice: "ab 2.850 €",
    paymentMethods: ["Kreditkarte", "Überweisung", "Bar"],
    languages: ["Englisch", "Französisch", "Deutsch", "Spanisch", "Italienisch", "Türkisch"],
    googleRating: 4.9,
    trustpilotRating: 4.8,
    services: ["VIP-Transferservice", "4-Sterne-Hotelunterkunft inkl. Frühstück", "persönliche Betreuung durch Übersetzer", "Haaranalyse und Beratung", "Individuelle Behandlungsplanung", "Nachsorge-Kit", "12 Monate Post-Op Care per WhatsApp", "24/7 Betreuung"],
    imageUrl: "/clinicana-clinic-haartransplantation-istanbul-rezeption.jpg",
    galleryImages: [
      "/clinicana-clinic-haartransplantation-istanbul-rezeption.jpg",
      "/clinicana-clinic-haartransplantation-istanbul-wartebereich.jpg",
      "/clinicana-clinic-haartransplantation-istanbul-behandlungsraum.jpg",
      "/clinicana-clinic-haartransplantation-istanbul-klinik.jpg"
    ]
  },
  {
    id: "dr-cinik-hair-hospital",
    name: "Dr. Cinik Hair Hospital",
    location: "Istanbul, Türkei",
    district: "Beşiktaş",
    googleMapsUrl: "https://maps.app.goo.gl/bdffgAXhTp6FCKzx7",
    methods: ["DHI", "FUE", "Sapphire FUE"],
    treatments: ["Haartransplantation", "Barttransplantation", "Augenbrauentransplantation"],
    website: "https://emrahcinik.com/de/",
    email: "info@emrahcinik.com",
    whatsapp: "+90 549 641 3701",
    leadDoctor: "Dr. Emrah Cinik",
    foundedYear: 2007,
    treatmentsCount: "50.000+",
    certificates: ["ISO 9001", "JCI", "Health Tourism Authorization Certificate"],
    startingPrice: "ab 2.350 €",
    paymentMethods: ["Kreditkarte", "Überweisung", "Bar", "Vorauszahlung für Terminreservierung, Restzahlung am Behandlungstag"],
    languages: ["Türkisch", "Englisch", "Deutsch", "Französisch", "Spanisch", "Italienisch", "Türkisch"],
    googleRating: 4.8,
    trustpilotRating: 4.8,
    services: ["VIP-Transferservice",
      "4-5-Sterne-Hotelunterkunft inkl. Frühstück",
      "persönliche Betreuung durch Übersetzer",
      "Haaranalyse und Beratung",
      "Individuelle Behandlungsplanung",
      "Nachsorge-Kit",
      "PRP-Behandlung",
      "12 Monate Post-Op Care per WhatsApp",
      "Lasertherapie zur Haarregeneration",
      "24/7 Betreuung"],
    imageUrl: "/dr-cinik-clinic-haartransplantation-istanbul-rezeption.jpg",
    galleryImages: [
      "/dr-cinik-clinic-haartransplantation-istanbul-rezeption.jpg",
      "/dr-cinik-clinic-haartransplantation-istanbul-behandlungszimmer.jpg",
      "/dr-cinik-clinic-haartransplantation-istanbul-waschraum.jpg",
      "/dr-cinik-clinic-haartransplantation-istanbul-klinik.jpg"
    ]
  },
  {
    id: "hermest-clinic",
    name: "Hermest Clinic",
    location: "Istanbul, Türkei",
    district: "Kadıköy",
    googleMapsUrl: "https://maps.app.goo.gl/BEKaveozAmKvkQ986",
    methods: ["DHI", "FUE", "Sapphire FUE", "Unique FUE"],
    treatments: ["Haartransplantation", "Barttransplantation"],
    website: "https://www.hermestclinic.com/de",
    email: "info@hermestclinic.com",
    whatsapp: "+49 3075 4376 422",
    leadDoctor: "Dr. Ahmet Murat",
    foundedYear: 2003,
    treatmentsCount: "12.000+",
    certificates: ["ISO 9001", "JCI", "Health Tourism Authorization Certificate"],
    startingPrice: "ab 2.890 €",
    paymentMethods: ["Kreditkarte", "Überweisung", "Bar"],
    languages: ["Deutsch", "Englisch", "Türkisch"],
    googleRating: 4.9,
    trustpilotRating: 4.8,
    services: ["VIP-Transferservice",
      "4-Sterne-Hotelunterkunft inkl. Frühstück",
      "persönliche Betreuung durch Übersetzer",
      "Haaranalyse und Beratung",
      "Individuelle Behandlungsplanung",
      "Nachsorge-Kit",
      "12 Monate Post-Op Care per WhatsApp",
      "Lasertherapie zur Haarregeneration",
      "24/7 Betreuung"],
    imageUrl: "/hermest-clinic-haartransplantation-istanbul-rezeption.jpg",
    galleryImages: [
      "/hermest-clinic-haartransplantation-istanbul-rezeption.jpg",
      "/hermest-clinic-haartransplantation-istanbul-transplantation.jpg",
      "/hermest-clinic-haartransplantation-istanbul-fue.jpg",
      "/hermest-clinic-haartransplantation-istanbul-hotel.jpg"
    ]
  },
  {
    id: "sule-clinic",
    name: "Sule Clinic",
    location: "Istanbul, Türkei",
    district: "Eyüpsultan",
    googleMapsUrl: "https://maps.app.goo.gl/uZsRmeTMQEExctuTA",
    methods: ["DHI", "FUE", "Sapphire FUE"],
    treatments: ["Haartransplantation", "Barttransplantation"],
    website: "https://sule-hairtransplant.com",
    email: "info@sule-hairtransplant.com",
    whatsapp: "+90 545 674 3191",
    leadDoctor: "Prof. Dr. Hakan Hanimoglu",
    foundedYear: 2016,
    treatmentsCount: "13.000+",
    certificates: ["Health Tourism Authorization Certificate"],
    startingPrice: "ab 2.990 €",
    paymentMethods: ["Kreditkarte", "Überweisung", "Bar", "Vorauszahlung für Terminreservierung, Restzahlung am Behandlungstag"],
    languages: ["Türkisch", "Englisch", "Deutsch", "Französisch", "Spanisch", "Italienisch"],
    googleRating: 4.9,
    trustpilotRating: 4.9,
    services: ["VIP-Transferservice",
      "5-Sterne-Hotelunterkunft inkl. Frühstück",
      "persönliche Betreuung durch Übersetzer",
      "Haaranalyse und Beratung",
      "Individuelle Behandlungsplanung",
      "Nachsorge-Kit",
      "12 Monate Post-Op Care per WhatsApp",
      "PRP-Behandlung",
      "24/7 Betreuung"],
    imageUrl: "/sule-clinic-haartransplantation-istanbul-rezeption.jpg",
    galleryImages: [
      "/sule-clinic-haartransplantation-istanbul-rezeption.jpg",
      "/sule-clinic-haartransplantation-istanbul-wartebereich.jpg",
      "/sule-clinic-haartransplantation-istanbul-behandlungszimmer.jpg",
      "/sule-clinic-haartransplantation-istanbul-klinik.jpg"
    ]
  },
  {
    id: "dr-serkan-aygin-clinic",
    name: "Dr. Serkan Aygin Clinic",
    location: "Istanbul, Türkei",
    district: "Şişli",
    googleMapsUrl: "https://maps.app.goo.gl/pFrNRKujNrDRYcMW8",
    methods: ["DHI", "FUE", "Sapphire FUE", "Long DHI"],
    treatments: ["Haartransplantation", "Barttransplantation", "Augenbrauentransplantation"],
    website: "https://www.drserkanaygin.com/de",
    email: "info@drserkanaygin.com",
    whatsapp: "+90 555 100 4040",
    leadDoctor: "Dr. Serkan Aygin",
    foundedYear: 2013,
    treatmentsCount: "25.000+",
    certificates: ["Health Tourism Authorization Certificate"],
    startingPrice: "ab 3.500 €",
    paymentMethods: ["Kreditkarte", "Überweisung", "Bar"],
    languages: ["Deutsch", "Englisch", "Französisch", "Spanisch", "Italienisch", "Türkisch"],
    googleRating: 4.8,
    trustpilotRating: 4.5,
    services: ["VIP-Transferservice",
      "4-Sterne-Hotelunterkunft inkl. Frühstück",
      "persönliche Betreuung durch Übersetzer",
      "Haaranalyse und Beratung",
      "Individuelle Behandlungsplanung",
      "Nachsorge-Kit",
      "Lasertherapie zur Haarregeneration",
      "PRP-Behandlung"],
    imageUrl: "/dr-serkan-aygin-clinic-haartransplantation-istanbul-aufenthaltsraum.jpg",
    galleryImages: [
      "/dr-serkan-aygin-clinic-haartransplantation-istanbul-aufenthaltsraum.jpg",
      "/dr-serkan-aygin-clinic-haartransplantation-istanbul-behandlungszimmer.jpg",
      "/dr-serkan-aygin-clinic-haartransplantation-istanbul-wartebereich.jpg",
      "/dr-serkan-aygin-clinic-haartransplantation-istanbul-klinik.jpg"
    ]
  },
  {
    id: "elithair",
    name: "Elithair",
    location: "Istanbul, Türkei",
    district: "Kağıthane",
    googleMapsUrl: "https://maps.app.goo.gl/wFMe2VdJdgbGoYic8",
    methods: ["DHI", "FUE", "Sapphire FUE", "Neo FUE"],
    treatments: ["Haartransplantation", "Barttransplantation", "Augenbrauentransplantation"],
    website: "https://elithairtransplant.com/german/",
    email: "info@elithairtransplant.com",
    whatsapp: "+90 553 690 9094",
    leadDoctor: "Dr. Balwi",
    foundedYear: 2013,
    treatmentsCount: "100.000+",
    certificates: ["ISO 9001"],
    startingPrice: "ab 3.300 €",
    paymentMethods: ["Kreditkarte", "Überweisung", "Bar", "Ratenzahlung"],
    languages: ["Deutsch", "Englisch", "Türkisch", "Französisch", "Italienisch", "Spanisch", "Türkisch"],
    googleRating: 4.5,
    trustpilotRating: 4.5,
    services: [
      "VIP-Transferservice",
      "Elite-Hotelunterkunft inkl. Frühstück",
      "persönliche Betreuung durch Übersetzer",
      "Haaranalyse und Beratung",
      "Individuelle Behandlungsplanung",
      "Nachsorge-Kit",
      "PRP-Behandlung",
      "12 Monate Post-Op Care per WhatsApp",
      "Elithair App",
      "24/7 Betreuung",
    ],
    imageUrl: "/elithair-clinic-haartransplantation-istanbul-rezeption.jpg",
    galleryImages: [
      "/elithair-clinic-haartransplantation-istanbul-rezeption.jpg",
      "/elithair-clinic-haartransplantation-istanbul-behandlungszimmer.jpg",
      "/elithair-clinic-haartransplantation-istanbul-hotel.jpg",
      "/elithair-clinic-haartransplantation-istanbul-klinik.jpg"
    ]
  },
]

// Alle verfügbaren Methoden extrahieren
export const allMethods = Array.from(new Set(clinicsComparisonData.flatMap((clinic) => clinic.methods))).sort()

// Alle verfügbaren Behandlungen extrahieren
export const allTreatments = Array.from(new Set(clinicsComparisonData.flatMap((clinic) => clinic.treatments))).sort()

// Alle verfügbaren Sprachen extrahieren
export const allLanguages = Array.from(new Set(clinicsComparisonData.flatMap((clinic) => clinic.languages))).sort()

// Alle verfügbaren Services extrahieren
export const allServices = Array.from(new Set(clinicsComparisonData.flatMap((clinic) => clinic.services))).sort()

// Preisbereiche definieren
export const priceRanges = [
  { label: "Unter 1.500 €", min: 0, max: 1500 },
  { label: "1.500 € - 2.500 €", min: 1500, max: 2500 },
  { label: "2.500 € - 3.500 €", min: 2500, max: 3500 },
  { label: "Über 3.500 €", min: 3500, max: Number.POSITIVE_INFINITY },
]

// Hilfsfunktion zum Extrahieren des Preises aus dem String
export function extractPrice(priceString: string): number {
  const match = priceString.match(/\d+(\.\d+)?/)
  return match ? Number.parseFloat(match[0].replace(".", "")) : 0
}
