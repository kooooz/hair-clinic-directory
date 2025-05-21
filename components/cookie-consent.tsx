"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import Link from "next/link"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

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
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col gap-4">
            <div className="flex-1">
              <p className="font-mono text-sm text-gray-600">
                Wir verwenden Cookies und Google Analytics, um Ihnen das beste Nutzererlebnis zu ermöglichen und unsere Website zu verbessern. Sie können zwischen der Akzeptanz aller Cookies oder nur der notwendigen Cookies wählen. Ihre Einstellungen können Sie jederzeit über die{" "}
                <Link href="/cookie-einstellungen" className="text-[#ff4d00] hover:underline">
                  Cookie-Einstellungen
                </Link>
                {" "}anpassen. Weitere Informationen zu Cookies und Google Analytics erhalten Sie in unserer{" "}
                <a href="/datenschutz" className="text-[#ff4d00] hover:underline">
                  Datenschutzerklärung
                </a>
                .
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button 
                onClick={() => setShowDetails(true)}
                variant="outline"
                className="rounded-full font-mono text-xs whitespace-nowrap w-full sm:w-auto"
              >
                Cookie-Details
              </Button>
              <Button 
                onClick={handleAcceptNecessary} 
                variant="outline"
                className="rounded-full font-mono text-xs whitespace-nowrap w-full sm:w-auto"
              >
                Nur erforderliche
              </Button>
              <Button 
                onClick={handleAcceptAll} 
                className="rounded-full font-mono text-xs whitespace-nowrap w-full sm:w-auto"
              >
                Alle akzeptieren
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Cookie-Details</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Notwendige Cookies</h3>
              <p className="text-sm text-gray-600">
                Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden. Sie werden in der Regel nur als Reaktion auf von Ihnen durchgeführte Aktionen gesetzt, die einer Anforderung von Diensten entsprechen, wie z.B. das Festlegen Ihrer Datenschutzeinstellungen, das Anmelden oder das Ausfüllen von Formularen.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Analyse-Cookies</h3>
              <p className="text-sm text-gray-600">
                Diese Cookies ermöglichen es uns, Besuche und Verkehrsquellen zu zählen, damit wir die Leistung unserer Website messen und verbessern können. Sie helfen uns zu verstehen, welche Seiten am beliebtesten und am wenigsten beliebt sind, und zu sehen, wie Besucher sich auf der Website bewegen. Alle Informationen, die diese Cookies sammeln, werden aggregiert und daher anonym.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Wir verwenden Google Analytics, um diese Daten zu sammeln. Die Daten werden in den USA gespeichert, wobei wir die IP-Anonymisierung aktiviert haben. Sie können die Erfassung durch Google Analytics verhindern, indem Sie das{" "}
                <a 
                  href="https://tools.google.com/dlpage/gaoptout?hl=de" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#ff4d00] hover:underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                {" "}installieren.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
} 