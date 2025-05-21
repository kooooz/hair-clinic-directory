"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ClinicGalleryProps {
  images: string[]
  clinicName: string
}

export function ClinicGallery({ images, clinicName }: ClinicGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="relative w-full">
      <div className="relative w-full max-w-[600px] aspect-square mx-auto mb-4 overflow-hidden rounded-lg">
        <Image
          src={images[currentImageIndex] || "/placeholder.svg"}
          alt={`${clinicName} - Bild ${currentImageIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 600px) 100vw, 600px"
          priority={currentImageIndex === 0}
        />

        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={goToPrevious}
          aria-label="Vorheriges Bild"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={goToNext}
          aria-label="Nächstes Bild"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${index === currentImageIndex ? "bg-black" : "bg-gray-300"}`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Bild ${index + 1} anzeigen`}
          />
        ))}
      </div>
    </div>
  )
}
