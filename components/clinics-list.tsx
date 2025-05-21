import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, Calendar, Activity, BadgeIcon as Certificate, Stethoscope, ExternalLink } from "lucide-react"
import Link from "next/link"
import { clinics } from "@/lib/clinic-data"
import { clinicsComparisonData } from "@/lib/clinic-comparison-data"
import Image from "next/image"

// Helper function to format rating with dot for display
const formatRating = (rating: number): string => {
  return rating.toFixed(1)
}

export function ClinicsList() {
  return (
    <section className="py-16" id="kliniken">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-xl mb-12">Top 10 Haarkliniken in der Türkei im Überblick</h2>

          <div className="space-y-8">
            {clinics.map((clinic, index) => {
              const clinicDetail = clinicsComparisonData.find((c) => c.id === clinic.id)
              return (
                <Card key={clinic.id} className="overflow-hidden border">
                  <div className="flex flex-col md:flex-row">
                    {/* Left part - Image with number */}
                    <div className="relative h-72 md:h-auto md:w-2/5">
                      <div className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-black flex items-center justify-center">
                        <span className="font-mono text-xs text-white">{(index + 1).toString().padStart(2, "0")}</span>
                      </div>
                      <div className="w-full h-full">
                        <Image
                          src={clinic.imageUrl || "/placeholder.svg"}
                          alt={`${clinic.name} - Haarklinik in der Türkei`}
                          className="object-cover"
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Right part - Content */}
                    <CardContent className="p-6 md:w-3/5 flex flex-col relative">
                      {/* Ratings - top right */}
                      <div className="absolute top-4 right-4 flex items-center space-x-4">
                        <div className="flex items-center">
                          <span className="font-mono text-xs mr-1">Google:</span>
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                          <span className="font-mono text-xs">{formatRating(clinicDetail?.googleRating || 0)}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-mono text-xs mr-1">Trustpilot:</span>
                          <Star className="h-4 w-4 text-green-500 fill-green-500 mr-1" />
                          <span className="font-mono text-xs">{formatRating(clinicDetail?.trustpilotRating || 0)}</span>
                        </div>
                      </div>

                      {/* Clinic name and location */}
                      <div className="mb-4 pr-16">
                        <h3 className="font-heading text-lg mb-1">
                          <a
                            href={clinic.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-600 transition-colors flex items-center"
                          >
                            {clinic.name}
                            <ExternalLink className="h-3 w-3 ml-1 inline-block" />
                          </a>
                        </h3>
                        <a
                          href={clinic.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-xs text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          <MapPin className="h-3 w-3 mr-1" />
                          <span className="font-mono">
                            {clinic.district}, {clinic.location}
                          </span>
                        </a>
                      </div>

                      {/* Description */}
                      <p className="font-body text-sm mb-5">{clinic.description}</p>

                      {/* Clinic details with icons - 2x2 grid */}
                      <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-xs mb-5">
                        <div className="flex items-start">
                          <Stethoscope className="h-4 w-4 mr-2 text-gray-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-mono text-gray-500 block">Methoden:</span>
                            <div className="font-mono">{clinic.methods.join(", ")}</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Calendar className="h-4 w-4 mr-2 text-gray-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-mono text-gray-500 block">Gegründet:</span>
                            <div className="font-mono">{clinic.foundedYear}</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Activity className="h-4 w-4 mr-2 text-gray-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-mono text-gray-500 block">Behandlungen:</span>
                            <div className="font-mono">{clinic.treatmentsCount}</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Certificate className="h-4 w-4 mr-2 text-gray-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-mono text-gray-500 block">Zertifikate:</span>
                            <div className="font-mono">{clinic.certificates.join(", ")}</div>
                          </div>
                        </div>
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between mt-auto pt-2">
                        <span className="font-mono text-sm font-semibold">{clinic.startingPrice}</span>
                        <Link href={`/klinik/${clinic.id}#top`} aria-label={`Details zu ${clinic.name} anzeigen`}>
                          <Button className="rounded-full font-mono text-xs">
                            Alle Details zu {clinic.name} ansehen
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
