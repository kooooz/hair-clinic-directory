export type Clinic = {
  id: string
  name: string
  location: string
  district: string // Hinzugefügt: Stadtteil für die Anzeige
  googleMapsUrl: string // Geändert: Direkter Google Maps Link
  rating: number
  description: string
  methods: string[]
  foundedYear: number
  treatmentsCount: string
  certificates: string[]
  startingPrice: string
  imageUrl: string
  website: string
}

export const clinics: Clinic[] = [
  {
    id: "vera-clinic",
    name: "Vera Clinic",
    location: "Istanbul, Türkei",
    district: "Kartal",
    googleMapsUrl: "https://maps.app.goo.gl/P9ECYJjuvDJekmu5A",
    rating: 5.0,
    description:
      "Die Vera Clinic in Istanbul zählt zu den führenden Adressen für Haartransplantationen in der Türkei. Mit innovativen Verfahren wie der FUE-Technik und modernster Ausstattung bietet sie maßgeschneiderte Lösungen für Patienten weltweit. Die Klinik legt großen Wert auf Patientenzufriedenheit und erzielt durch den Einsatz neuester Technologien beeindruckende Ergebnisse. Ein erfahrenes medizinisches Team begleitet dich von der ersten Beratung bis zur Nachsorge, um ein natürliches und dauerhaftes Ergebnis zu gewährleisten.",
    methods: ["DHI", "FUE", "Sapphire FUE", "Hyper FUE"],
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
    imageUrl: "/vera-clinic-haartransplantation-istanbul-rezeption.jpg",
    website: "https://www.veraclinic.net/de",
  },
  {
    id: "cosmedica-clinic",
    name: "Cosmedica Clinic",
    location: "Istanbul, Türkei",
    district: "Şişli",
    googleMapsUrl: "https://maps.app.goo.gl/ffetmBzMBGeH9Jv7A",
    rating: 4.9,
    description:
      "Die Cosmedica Clinic in Istanbul, unter der Leitung von Dr. Levent Acar, ist bekannt für ihre Spezialisierung auf die Micro Sapphire DHI-Technologie. Diese minimalinvasive Methode ermöglicht eine präzise Implantation der Haarfollikel und führt zu natürlichen Ergebnissen mit hoher Graft-Überlebensrate. Mit über 16 Jahren Erfahrung und modernster Ausstattung bietet die Klinik individuelle Behandlungspläne für Patienten aus aller Welt.",
    methods: ["DHI", "FUE", "Sapphire FUE"],
    foundedYear: 2007,
    treatmentsCount: "20.000+",
    certificates: ["ISO 9001", "JCI", "Health Tourism Authorization Certificate"],
    startingPrice: "ab 2.450 €",
    imageUrl: "/cosmedica-clinic-haartransplantation-istanbul-aufenthaltsraum.jpg",
    website: "https://www.cosmedica.com/de",
  },
  {
    id: "smile-hair-clinic",
    name: "Smile Hair Clinic",
    location: "Istanbul, Türkei",
    district: "Ümraniye",
    googleMapsUrl: "https://maps.app.goo.gl/D1fGJG98UNJmfaLE8",
    rating: 4.9,
    description:
      "Die Smile Hair Clinic in Istanbul ist spezialisiert auf die FUE- und DHI-Haartransplantationstechniken. Mit einem erfahrenen medizinischen Team bietet die Klinik individuell zugeschnittene Behandlungspläne, die auf die spezifischen Bedürfnisse jedes Patienten abgestimmt sind. Dies führt zu natürlichen Ergebnissen und minimaler Ausfallzeit. Die Klinik legt großen Wert auf Patientenkomfort und -zufriedenheit.",
    methods: ["DHI", "FUE", "Sapphire FUE"],
    foundedYear: 2018,
    treatmentsCount: "10.000+",
    certificates: ["Health Tourism Authorization Certificate"],
    startingPrice: "ab 2.390 €",
    imageUrl: "/smile-hair-clinic-haartransplantation-istanbul-empfang.jpg",
    website: "https://smilehairclinic.com/de",
  },
  {
    id: "estepera-clinic",
    name: "Estepera Clinic",
    location: "Istanbul, Türkei",
    district: "Şişli",
    googleMapsUrl: "https://maps.app.goo.gl/An7reRDQ72XHf8T99",
    rating: 4.9,
    description:
      "Die Estepera Clinic in Istanbul hat sich ausschließlich auf Haarwiederherstellungsverfahren spezialisiert. Mit einem engagierten Team und modernster Technologie bietet die Klinik hochwertige Behandlungen für Patienten aus aller Welt. Die Spezialisierung ermöglicht es, individuelle Lösungen für verschiedene Arten von Haarausfall anzubieten und dabei höchste Qualitätsstandards einzuhalten.",
    methods: ["DHI", "FUE", "Sapphire FUE"],
    foundedYear: 2010,
    treatmentsCount: "60.000+",
    certificates: ["ISO 9001", "Health Tourism Authorization Certificate"],
    startingPrice: "ab 2.100 €",
    imageUrl: "/estepera-clinic-haartransplantation-istanbul-rezeption.jpg",
    website: "https://www.estepera.com/de",
  },
  {
    id: "clinicana",
    name: "Clinicana",
    location: "Istanbul, Türkei",
    district: "Beyoğlu",
    googleMapsUrl: "https://maps.app.goo.gl/R6EcqEqjYboMXKmb8",
    rating: 4.9,
    description:
      "Clinicana ist eine renommierte Haartransplantationsklinik in Istanbul, die sich auf die FUE-Methode spezialisiert hat. Mit über 14 Jahren Erfahrung bietet die Klinik hochwertige Behandlungen in einer modernen Umgebung. Das erfahrene medizinische Team legt großen Wert auf Patientenzufriedenheit und erzielt natürliche Ergebnisse durch den Einsatz fortschrittlicher Technologien.",
    methods: ["DHI", "FUE", "Sapphire FUE"],
    foundedYear: 2015,
    treatmentsCount: "15.000+",
    certificates: ["ISO 9001", "JCI"],
    startingPrice: "ab 2.850 €",
    imageUrl: "/clinicana-clinic-haartransplantation-istanbul-rezeption.jpg",
    website: "https://clinicana.com/de",
  },
  {
    id: "dr-cinik-hair-hospital",
    name: "Dr. Cinik Hair Hospital",
    location: "Istanbul, Türkei",
    district: "Beşiktaş",
    googleMapsUrl: "https://maps.app.goo.gl/bdffgAXhTp6FCKzx7",
    rating: 4.8,
    description:
      "Das Dr. Cinik Hair Hospital in Istanbul, gegründet von Dr. Emrah Cinik, ist bekannt für seine hohen Erfolgsraten in der Haartransplantation. Mit einer Graft-Überlebensrate von über 95 % und einer Patientenzufriedenheit von mehr als 98 % bietet die Klinik fortschrittliche Techniken wie FUE und DHI an. Ein erfahrenes Team und eine umfassende Nachsorge gewährleisten optimale Ergebnisse für Patienten aus aller Welt.",
    methods: ["DHI", "FUE", "Sapphire FUE"],
    foundedYear: 2007,
    treatmentsCount: "50.000+",
    certificates: ["ISO 9001", "JCI", "Health Tourism Authorization Certificate"],
    startingPrice: "ab 2.350 €",
    imageUrl: "/dr-cinik-clinic-haartransplantation-istanbul-rezeption.jpg",
    website: "https://emrahcinik.com",
  },
  {
    id: "hermest-clinic",
    name: "Hermest Clinic",
    location: "Istanbul, Türkei",
    district: "Kadıköy",
    googleMapsUrl: "https://maps.app.goo.gl/BEKaveozAmKvkQ986",
    rating: 4.8,
    description:
      "Die Hermest Clinic in Istanbul ist eine führende Adresse für Haartransplantationen in der Türkei. Mit über 50.000 erfolgreichen Eingriffen bietet die Klinik bewährte Techniken wie FUE und DHI an. Ein erfahrenes Team von Chirurgen und modernste Ausstattung gewährleisten hochwertige Behandlungen. Die Klinik legt großen Wert auf individuelle Betreuung und langfristige Patientenzufriedenheit.",
    methods: ["DHI", "FUE", "Sapphire FUE", "Unique FUE"],
    foundedYear: 2003,
    treatmentsCount: "12.000+",
    certificates: ["ISO 9001", "JCI", "Health Tourism Authorization Certificate"],
    startingPrice: "ab 2.890 €",
    imageUrl: "/hermest-clinic-haartransplantation-istanbul-rezeption.jpg",
    website: "https://www.hermestclinic.com/de",
  },
  {
    id: "sule-clinic",
    name: "Sule Clinic",
    location: "Istanbul, Türkei",
    district: "Şişli",
    googleMapsUrl: "https://maps.app.goo.gl/uZsRmeTMQEExctuTA",
    rating: 4.8,
    description:
      "Die Sule Clinic in Istanbul bietet hochwertige Haartransplantationen zu erschwinglichen Preisen an. Mit einem erfahrenen medizinischen Team und modernen Techniken wie FUE und DHI bietet die Klinik individuelle Behandlungspläne für Patienten aus aller Welt. Transparente Preisgestaltung und umfassende Betreuung machen die Sule Clinic zu einer beliebten Wahl für Haartransplantationen in der Türkei.",
    methods: ["DHI", "FUE", "Sapphire FUE"],
    foundedYear: 2016,
    treatmentsCount: "13.000+",
    certificates: ["Health Tourism Authorization Certificate"],
    startingPrice: "ab 2.300 €",
    imageUrl: "/sule-clinic-haartransplantation-istanbul-rezeption.jpg",
    website: "https://www.suleclinic.com/de",
  },
  {
    id: "dr-serkan-aygin-clinic",
    name: "Dr. Serkan Aygin Clinic",
    location: "Istanbul, Türkei",
    district: "Şişli",
    googleMapsUrl: "https://maps.app.goo.gl/pFrNRKujNrDRYcMW8",
    rating: 4.7,
    description:
      "Die Dr. Serkan Aygin Clinic in Istanbul, geleitet von dem renommierten Spezialisten Dr. Serkan Aygin, bietet seit über 25 Jahren hochwertige Haartransplantationen an. Mit einem erfahrenen Team von über 20 Ärzten und modernsten Techniken wie DHI erzielt die Klinik natürliche und dauerhafte Ergebnisse. Internationale Auszeichnungen und eine hohe Patientenzufriedenheit unterstreichen die Qualität der Behandlungen.",
    methods: ["DHI", "FUE", "Sapphire FUE", "Long DHI"],
    foundedYear: 2013,
    treatmentsCount: "25.000+",
    certificates: ["Health Tourism Authorization Certificate"],
    startingPrice: "ab 3.500 €",
    imageUrl: "/dr-serkan-aygin-clinic-haartransplantation-istanbul-aufenthaltsraum.jpg",
    website: "https://www.drserkanaygin.com/de",
  },
  {
    id: "elithair",
    name: "Elithair",
    location: "Istanbul, Türkei",
    district: "Kağıthane",
    googleMapsUrl: "https://maps.app.goo.gl/wFMe2VdJdgbGoYic8",
    rating: 4.6,
    description:
      "Elithair in Istanbul ist die größte Haartransplantationsklinik der Welt mit einer Fläche von über 18.000 m². Unter der Leitung von Dr. Balwi bietet die Klinik modernste FUE-Techniken und maßgeschneiderte Behandlungspläne für Patienten aus aller Welt. Mit über 100.000 erfolgreichen Behandlungen und einem internationalen Expertenteam setzt Elithair neue Maßstäbe in der Haartransplantation.",
    methods: ["DHI", "FUE", "Sapphire FUE", "Neo FUE"],
    foundedYear: 2013,
    treatmentsCount: "100.000+",
    certificates: ["ISO 9001"],
    startingPrice: "ab 3.300 €",
    imageUrl: "/elithair-clinic-haartransplantation-istanbul-rezeption.jpg",
    website: "https://elithairtransplant.com/german/",
  },
]
