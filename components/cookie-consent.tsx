"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true")
    localStorage.setItem("analyticsConsent", "true")
    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    gtag("js", new Date())
    gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string, {
      page_path: window.location.pathname,
    })
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4">
          <div className="flex-1">
            <p className="font-mono text-sm text-gray-600">
              Wir verwenden Cookies, um Ihnen das beste Nutzererlebnis zu ermöglichen. Durch die weitere Nutzung der Website stimmen Sie der Verwendung von Cookies zu. Weitere Informationen zu Cookies erhalten Sie in unserer{" "}
              <a href="/datenschutz" className="text-[#ff4d00] hover:underline">
                Datenschutzerklärung
              </a>
              .
            </p>
          </div>
          <Button onClick={handleAccept} className="rounded-full font-mono text-xs whitespace-nowrap">
            Akzeptieren
          </Button>
        </div>
      </div>
    </div>
  )
} 