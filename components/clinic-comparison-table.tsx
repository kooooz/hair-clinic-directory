"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from 'next/navigation'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, MapPin, Phone, Mail, ExternalLink } from "lucide-react"
import {
  clinicsComparisonData,
  allMethods,
  allTreatments,
  allLanguages,
  allServices,
  priceRanges,
  extractPrice,
  type ClinicComparisonData,
} from "@/lib/clinic-comparison-data"

export function ClinicComparisonTable() {
  const searchParams = useSearchParams()
  const [filteredClinics, setFilteredClinics] = useState<ClinicComparisonData[]>(clinicsComparisonData)
  const [selectedClinics, setSelectedClinics] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilters, setActiveFilters] = useState({
    methods: [] as string[],
    treatments: [] as string[],
    languages: [] as string[],
    services: [] as string[],
    priceRange: null as { min: number; max: number } | null,
  })

  // Handle URL search parameters
  useEffect(() => {
    const search = searchParams.get('search') || searchParams.get('q') || ''
    setSearchTerm(search)
  }, [searchParams])

  // Filter clinics based on search term and active filters
  useEffect(() => {
    let result = [...clinicsComparisonData]

    // Apply search term filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      result = result.filter(clinic => 
        clinic.name.toLowerCase().includes(searchLower) ||
        clinic.methods.some(method => method.toLowerCase().includes(searchLower)) ||
        clinic.treatments.some(treatment => treatment.toLowerCase().includes(searchLower)) ||
        clinic.services.some(service => service.toLowerCase().includes(searchLower))
      )
    }

    // Nach Methoden filtern
    if (activeFilters.methods.length > 0) {
      result = result.filter((clinic) => activeFilters.methods.every((method) => clinic.methods.includes(method)))
    }

    // Nach Behandlungen filtern
    if (activeFilters.treatments.length > 0) {
      result = result.filter((clinic) =>
        activeFilters.treatments.every((treatment) => clinic.treatments.includes(treatment)),
      )
    }

    // Nach Sprachen filtern
    if (activeFilters.languages.length > 0) {
      result = result.filter((clinic) =>
        activeFilters.languages.every((language) => clinic.languages.includes(language)),
      )
    }

    // Nach Services filtern
    if (activeFilters.services.length > 0) {
      result = result.filter((clinic) => activeFilters.services.every((service) => clinic.services.includes(service)))
    }

    // Nach Preisbereich filtern
    if (activeFilters.priceRange) {
      result = result.filter((clinic) => {
        const price = extractPrice(clinic.startingPrice)
        return price >= activeFilters.priceRange!.min && price <= activeFilters.priceRange!.max
      })
    }

    setFilteredClinics(result)
  }, [activeFilters, searchTerm])

  // Toggle Filter für Methoden
  const toggleMethodFilter = (method: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      methods: prev.methods.includes(method) ? prev.methods.filter((m) => m !== method) : [...prev.methods, method],
    }))
  }

  // Toggle Filter für Behandlungen
  const toggleTreatmentFilter = (treatment: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      treatments: prev.treatments.includes(treatment)
        ? prev.treatments.filter((t) => t !== treatment)
        : [...prev.treatments, treatment],
    }))
  }

  // Toggle Filter für Sprachen
  const toggleLanguageFilter = (language: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter((l) => l !== language)
        : [...prev.languages, language],
    }))
  }

  // Toggle Filter für Services
  const toggleServiceFilter = (service: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  // Setzen des Preisbereichs
  const setPriceRange = (range: { min: number; max: number } | null) => {
    setActiveFilters((prev) => ({
      ...prev,
      priceRange: range,
    }))
  }

  // Toggle Klinik für Vergleich
  const toggleClinicSelection = (clinicId: string) => {
    setSelectedClinics((prev) => {
      if (prev.includes(clinicId)) {
        return prev.filter((id) => id !== clinicId)
      } else {
        // Maximal 3 Kliniken auswählen
        if (prev.length < 3) {
          return [...prev, clinicId]
        }
        return prev
      }
    })
  }

  // Zurücksetzen aller Filter
  const resetFilters = () => {
    setActiveFilters({
      methods: [],
      treatments: [],
      languages: [],
      services: [],
      priceRange: null,
    })
  }

  // Formatieren der Bewertung mit Punkt
  const formatRating = (rating: number): string => {
    return rating.toFixed(1)
  }

  return (
    <div>
      <Tabs defaultValue="list" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="list">Alle Kliniken</TabsTrigger>
          <TabsTrigger value="compare" disabled={selectedClinics.length < 2}>
            Kliniken vergleichen ({selectedClinics.length}/3)
          </TabsTrigger>
        </TabsList>

        <TabsContent value="list">
          {/* Filter-Bereich */}
          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <h2 className="font-body text-xl mb-4">Filter</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Methoden Filter */}
              <div>
                <h3 className="font-body text-sm mb-2">Methoden</h3>
                <div className="space-y-2">
                  {allMethods.map((method) => (
                    <div key={method} className="flex items-center">
                      <Checkbox
                        id={`method-${method}`}
                        checked={activeFilters.methods.includes(method)}
                        onCheckedChange={() => toggleMethodFilter(method)}
                      />
                      <label htmlFor={`method-${method}`} className="ml-2 text-sm font-mono">
                        {method}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Behandlungen Filter */}
              <div>
                <h3 className="font-body text-sm mb-2">Behandlungen</h3>
                <div className="space-y-2">
                  {allTreatments.map((treatment) => (
                    <div key={treatment} className="flex items-center">
                      <Checkbox
                        id={`treatment-${treatment}`}
                        checked={activeFilters.treatments.includes(treatment)}
                        onCheckedChange={() => toggleTreatmentFilter(treatment)}
                      />
                      <label htmlFor={`treatment-${treatment}`} className="ml-2 text-sm font-mono">
                        {treatment}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sprachen Filter */}
              <div>
                <h3 className="font-body text-sm mb-2">Sprachen</h3>
                <div className="space-y-2">
                  {allLanguages.map((language) => (
                    <div key={language} className="flex items-center">
                      <Checkbox
                        id={`language-${language}`}
                        checked={activeFilters.languages.includes(language)}
                        onCheckedChange={() => toggleLanguageFilter(language)}
                      />
                      <label htmlFor={`language-${language}`} className="ml-2 text-sm font-mono">
                        {language}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preisbereich Filter */}
              <div>
                <h3 className="font-body text-sm mb-2">Preisbereich</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <div key={range.label} className="flex items-center">
                      <Checkbox
                        id={`price-${range.label}`}
                        checked={
                          activeFilters.priceRange?.min === range.min && activeFilters.priceRange?.max === range.max
                        }
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setPriceRange({ min: range.min, max: range.max })
                          } else if (
                            activeFilters.priceRange?.min === range.min &&
                            activeFilters.priceRange?.max === range.max
                          ) {
                            setPriceRange(null)
                          }
                        }}
                      />
                      <label htmlFor={`price-${range.label}`} className="ml-2 text-sm font-mono">
                        {range.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Filter (ausklappbar) */}
            <div className="mt-6">
              <h3 className="font-body text-sm mb-2">Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {allServices.map((service) => (
                  <div key={service} className="flex items-center">
                    <Checkbox
                      id={`service-${service}`}
                      checked={activeFilters.services.includes(service)}
                      onCheckedChange={() => toggleServiceFilter(service)}
                    />
                    <label htmlFor={`service-${service}`} className="ml-2 text-sm font-mono">
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Filter zurücksetzen Button */}
            <div className="mt-6 flex justify-end">
              <Button variant="outline" onClick={resetFilters} className="font-mono text-xs">
                Filter zurücksetzen
              </Button>
            </div>
          </div>

          {/* Ergebnisse */}
          <div className="space-y-6">
            <p className="font-mono text-sm">
              {filteredClinics.length} {filteredClinics.length === 1 ? "Klinik" : "Kliniken"} gefunden
            </p>

            {filteredClinics.map((clinic) => (
              <Card key={clinic.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Bild und Checkbox */}
                  <div className="relative h-48 md:h-auto md:w-1/4">
                    <div className="absolute top-4 left-4 z-10">
                      <Checkbox
                        id={`compare-${clinic.id}`}
                        checked={selectedClinics.includes(clinic.id)}
                        onCheckedChange={() => toggleClinicSelection(clinic.id)}
                        className="h-5 w-5 bg-white"
                      />
                      <label htmlFor={`compare-${clinic.id}`} className="sr-only">
                        Zum Vergleich hinzufügen
                      </label>
                    </div>
                    <div className="w-full h-full">
                      <Image
                        src={clinic.imageUrl || "/placeholder.svg"}
                        alt={`${clinic.name} - Haarklinik in Istanbul`}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                  </div>

                  {/* Klinik-Informationen */}
                  <div className="p-6 md:w-3/4">
                    <div className="flex flex-col md:flex-row md:justify-between mb-4">
                      <div className="flex flex-col md:flex-row md:items-center">
                        <h2 className="font-heading text-xl mb-1 md:mb-0 md:mr-2">{clinic.name}</h2>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="font-mono text-xs">
                            {clinic.district}, {clinic.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center mt-2 md:mt-0 space-x-4">
                        <div className="flex items-center">
                          <span className="font-mono text-xs mr-1">Google:</span>
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                          <span className="font-mono text-xs">{formatRating(clinic.googleRating)}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-mono text-xs mr-1">Trustpilot:</span>
                          <Star className="h-4 w-4 text-green-500 fill-green-500 mr-1" />
                          <span className="font-mono text-xs">{formatRating(clinic.trustpilotRating)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h3 className="font-body text-sm mb-1">Methoden</h3>
                        <p className="font-mono text-xs">{clinic.methods.join(", ")}</p>
                      </div>
                      <div>
                        <h3 className="font-body text-sm mb-1">Leitender Arzt</h3>
                        <p className="font-mono text-xs">{clinic.leadDoctor}</p>
                      </div>
                      <div>
                        <h3 className="font-body text-sm mb-1">Gegründet</h3>
                        <p className="font-mono text-xs">{clinic.foundedYear}</p>
                      </div>
                      <div>
                        <h3 className="font-body text-sm mb-1">Durchgeführte Behandlungen</h3>
                        <p className="font-mono text-xs">{clinic.treatmentsCount}</p>
                      </div>
                      <div>
                        <h3 className="font-body text-sm mb-1">Preis</h3>
                        <p className="font-mono text-xs">{clinic.startingPrice}</p>
                      </div>
                      <div>
                        <h3 className="font-body text-sm mb-1">Sprachen</h3>
                        <p className="font-mono text-xs">{clinic.languages.join(", ")}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {clinic.services.slice(0, 4).map((service, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono bg-gray-100"
                        >
                          {service}
                        </span>
                      ))}
                      {clinic.services.length > 4 && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono bg-gray-100">
                          +{clinic.services.length - 4} weitere
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3 mt-4">
                      <a href={clinic.website} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="font-mono text-xs flex items-center">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Website
                        </Button>
                      </a>
                      <a href={`mailto:${clinic.email}`}>
                        <Button variant="outline" size="sm" className="font-mono text-xs flex items-center">
                          <Mail className="h-3 w-3 mr-1" />
                          E-Mail
                        </Button>
                      </a>
                      <a
                        href={`https://wa.me/${clinic.whatsapp.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="font-mono text-xs flex items-center">
                          <Phone className="h-3 w-3 mr-1" />
                          WhatsApp
                        </Button>
                      </a>
                      <a href={`/klinik/${clinic.id}`}>
                        <Button size="sm" className="font-mono text-xs">
                          Alle Details zu {clinic.name} ansehen
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {filteredClinics.length === 0 && (
              <div className="text-center py-12">
                <p className="font-mono text-sm">Keine Kliniken gefunden, die deinen Filterkriterien entsprechen.</p>
                <Button variant="outline" onClick={resetFilters} className="mt-4 font-mono text-xs">
                  Filter zurücksetzen
                </Button>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="compare">
          {selectedClinics.length >= 2 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left font-body text-sm border-b"></th>
                    {selectedClinics.map((clinicId) => {
                      const clinic = clinicsComparisonData.find((c) => c.id === clinicId)!
                      return (
                        <th key={clinicId} className="p-4 text-left font-body text-sm border-b">
                          <div className="flex flex-col items-center">
                            <div className="relative w-32 h-32 mb-4">
                              <Image
                                src={clinic.imageUrl || "/placeholder.svg"}
                                alt={clinic.name}
                                fill
                                className="object-cover rounded-lg"
                                sizes="128px"
                              />
                            </div>
                            <h3 className="font-heading text-lg mb-1">{clinic.name}</h3>
                            <div className="flex items-center text-sm text-gray-600">
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                              <span className="font-mono text-xs">{formatRating(clinic.googleRating)}</span>
                            </div>
                          </div>
                        </th>
                      )
                    })}
                  </tr>
                </thead>
                <tbody>
                  {/* Standort */}
                  <tr>
                    <td className="p-4 font-body text-sm border-b bg-gray-50">Standort</td>
                    {selectedClinics.map((clinicId) => {
                      const clinic = clinicsComparisonData.find((c) => c.id === clinicId)!
                      return (
                        <td key={clinicId} className="p-4 font-mono text-xs border-b">
                          {clinic.district}, {clinic.location}
                        </td>
                      )
                    })}
                  </tr>

                  {/* Methoden */}
                  <tr>
                    <td className="p-4 font-body text-sm border-b bg-gray-50">Methoden</td>
                    {selectedClinics.map((clinicId) => {
                      const clinic = clinicsComparisonData.find((c) => c.id === clinicId)!
                      return (
                        <td key={clinicId} className="p-4 font-mono text-xs border-b">
                          {clinic.methods.join(", ")}
                        </td>
                      )
                    })}
                  </tr>

                  {/* Leitender Arzt */}
                  <tr>
                    <td className="p-4 font-body text-sm border-b bg-gray-50">Leitender Arzt</td>
                    {selectedClinics.map((clinicId) => {
                      const clinic = clinicsComparisonData.find((c) => c.id === clinicId)!
                      return (
                        <td key={clinicId} className="p-4 font-mono text-xs border-b">
                          {clinic.leadDoctor}
                        </td>
                      )
                    })}
                  </tr>

                  {/* Gegründet */}
                  <tr>
                    <td className="p-4 font-body text-sm border-b bg-gray-50">Gegründet</td>
                    {selectedClinics.map((clinicId) => {
                      const clinic = clinicsComparisonData.find((c) => c.id === clinicId)!
                      return (
                        <td key={clinicId} className="p-4 font-mono text-xs border-b">
                          {clinic.foundedYear}
                        </td>
                      )
                    })}
                  </tr>

                  {/* Behandlungen */}
                  <tr>
                    <td className="p-4 font-body text-sm border-b bg-gray-50">Durchgeführte Behandlungen</td>
                    {selectedClinics.map((clinicId) => {
                      const clinic = clinicsComparisonData.find((c) => c.id === clinicId)!
                      return (
                        <td key={clinicId} className="p-4 font-mono text-xs border-b">
                          {clinic.treatmentsCount}
                        </td>
                      )
                    })}
                  </tr>

                  {/* Preis */}
                  <tr>
                    <td className="p-4 font-body text-sm border-b bg-gray-50">Preis</td>
                    {selectedClinics.map((clinicId) => {
                      const clinic = clinicsComparisonData.find((c) => c.id === clinicId)!
                      return (
                        <td key={clinicId} className="p-4 font-mono text-xs border-b">
                          {clinic.startingPrice}
                        </td>
                      )
                    })}
                  </tr>

                  {/* Zahlungsarten */}
                  <tr>
                    <td className="p-4 font-body text-sm border-b bg-gray-50">Zahlungsarten</td>
                    {selectedClinics.map((clinicId) => {
                      const clinic = clinicsComparisonData.find((c) => c.id === clinicId)!
                      return (
                        <td key={clinicId} className="p-4 font-mono text-xs border-b">
                          {clinic.paymentMethods.join(", ")}
                        </td>
                      )
                    })}
                  </tr>

                  {/* Sprachen */}
                  <tr>
                    <td className="p-4 font-body text-sm border-b bg-gray-50">Sprachen</td>
                    {selectedClinics.map((clinicId) => {
                      const clinic = clinicsComparisonData.find((c) => c.id === clinicId)!
                      return (
                        <td key={clinicId} className="p-4 font-mono text-xs border-b">
                          {clinic.languages.join(", ")}
                        </td>
                      )
                    })}
                  </tr>

                  {/* Google Bewertung */}
                  <tr>
                    <td className="p-4 font-body text-sm border-b bg-gray-50">Google Bewertung</td>
                    {selectedClinics.map((clinicId) => {
                      const clinic = clinicsComparisonData.find((c) => c.id === clinicId)!
                      return (
                        <td key={clinicId} className="p-4 font-mono text-xs border-b">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                            <span>{formatRating(clinic.googleRating)}</span>
                          </div>
                        </td>
                      )
                    })}
                  </tr>

                  {/* Trustpilot Bewertung */}
                  <tr>
                    <td className="p-4 font-body text-sm border-b bg-gray-50">Trustpilot Bewertung</td>
                    {selectedClinics.map((clinicId) => {
                      const clinic = clinicsComparisonData.find((c) => c.id === clinicId)!
                      return (
                        <td key={clinicId} className="p-4 font-mono text-xs border-b">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-green-500 fill-green-500 mr-1" />
                            <span>{formatRating(clinic.trustpilotRating)}</span>
                          </div>
                        </td>
                      )
                    })}
                  </tr>

                  {/* Services */}
                  <tr>
                    <td className="p-4 font-body text-sm border-b bg-gray-50">Services</td>
                    {selectedClinics.map((clinicId) => {
                      const clinic = clinicsComparisonData.find((c) => c.id === clinicId)!
                      return (
                        <td key={clinicId} className="p-4 font-mono text-xs border-b">
                          <ul className="list-disc pl-5 space-y-1">
                            {clinic.services.map((service, index) => (
                              <li key={index}>{service}</li>
                            ))}
                          </ul>
                        </td>
                      )
                    })}
                  </tr>

                  {/* Kontakt */}
                  <tr>
                    <td className="p-4 font-body text-sm border-b bg-gray-50">Kontakt</td>
                    {selectedClinics.map((clinicId) => {
                      const clinic = clinicsComparisonData.find((c) => c.id === clinicId)!
                      return (
                        <td key={clinicId} className="p-4 font-mono text-xs border-b">
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <Mail className="h-3 w-3 mr-1" />
                              <a href={`mailto:${clinic.email}`} className="hover:underline">
                                {clinic.email}
                              </a>
                            </div>
                            <div className="flex items-center">
                              <Phone className="h-3 w-3 mr-1" />
                              <a
                                href={`https://wa.me/${clinic.whatsapp.replace(/[^0-9]/g, "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                              >
                                {clinic.whatsapp}
                              </a>
                            </div>
                          </div>
                        </td>
                      )
                    })}
                  </tr>

                  {/* Website */}
                  <tr>
                    <td className="p-4 font-body text-sm border-b bg-gray-50">Website</td>
                    {selectedClinics.map((clinicId) => {
                      const clinic = clinicsComparisonData.find((c) => c.id === clinicId)!
                      return (
                        <td key={clinicId} className="p-4 font-mono text-xs border-b">
                          <a
                            href={clinic.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center hover:underline"
                          >
                            Website besuchen
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </td>
                      )
                    })}
                  </tr>

                  {/* Aktionen */}
                  <tr>
                    <td className="p-4 font-body text-sm bg-gray-50"></td>
                    {selectedClinics.map((clinicId) => {
                      const clinic = clinicsComparisonData.find((c) => c.id === clinicId)!
                      return (
                        <td key={clinicId} className="p-4">
                          <div className="flex flex-col space-y-2">
                            <a href={`/klinik/${clinic.id}`}>
                              <Button size="sm" className="w-full font-mono text-xs">
                                Alle Details zu {clinic.name} ansehen
                              </Button>
                            </a>
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full font-mono text-xs"
                              onClick={() => toggleClinicSelection(clinic.id)}
                            >
                              Aus Vergleich entfernen
                            </Button>
                          </div>
                        </td>
                      )
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="font-mono text-sm">
                Bitte wähle mindestens 2 Kliniken aus, um sie miteinander zu vergleichen.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
