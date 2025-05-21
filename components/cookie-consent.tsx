"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent")
    console.log('Initial cookie consent state:', hasConsented)
    if (!hasConsented) {
      setIsVisible(true)
    }
  }, [])

  const handleAcceptAll = () => {
    console.log('Setting cookie and analytics consent')
    // Set both cookie and analytics consent
    localStorage.setItem("cookieConsent", "true")
    localStorage.setItem("analyticsConsent", "true")
    
    // Reload the page to initialize Google Analytics
    window.location.reload()
    
    setIsVisible(false)
  }

  const handleAcceptNecessary = () => {
    console.log('Setting only necessary cookie consent')
    // Set only necessary cookie consent
    localStorage.setItem("cookieConsent", "true")
    localStorage.setItem("analyticsConsent", "false")
    
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4">
          <div className="flex-1">
            <p className="font-mono text-sm text-gray-600">
              Wir verwenden Cookies und Google Analytics, um Ihnen das beste Nutzererlebnis zu ermöglichen und unsere Website zu verbessern. Sie können zwischen der Akzeptanz aller Cookies oder nur der notwendigen Cookies wählen. Weitere Informationen zu Cookies und Google Analytics erhalten Sie in unserer{" "}
              <a href="/datenschutz" className="text-[#ff4d00] hover:underline">
                Datenschutzerklärung
              </a>
              .
            </p>
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={handleAcceptNecessary} 
              variant="outline"
              className="rounded-full font-mono text-xs whitespace-nowrap"
            >
              Nur erforderliche
            </Button>
            <Button 
              onClick={handleAcceptAll} 
              className="rounded-full font-mono text-xs whitespace-nowrap"
            >
              Alle akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 