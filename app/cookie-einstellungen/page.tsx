"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function CookieSettings() {
  const [necessaryCookies, setNecessaryCookies] = useState(true)
  const [analyticsCookies, setAnalyticsCookies] = useState(false)

  useEffect(() => {
    // Load current settings
    const analyticsConsent = localStorage.getItem("analyticsConsent")
    setAnalyticsCookies(analyticsConsent === "true")
  }, [])

  const handleSave = () => {
    // Save settings
    localStorage.setItem("cookieConsent", "true")
    localStorage.setItem("analyticsConsent", analyticsCookies ? "true" : "false")
    
    // Reload page to apply changes
    window.location.href = "/"
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="text-2xl font-mono mb-8">Cookie-Einstellungen</h1>
      
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label className="font-mono">Notwendige Cookies</Label>
            <p className="text-sm text-gray-600">
              Erforderlich für die Grundfunktionen der Website. Können nicht deaktiviert werden.
            </p>
          </div>
          <Switch checked={necessaryCookies} disabled />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label className="font-mono">Analyse-Cookies</Label>
            <p className="text-sm text-gray-600">
              Helfen uns, die Website zu verbessern. Alle Daten werden anonymisiert.
            </p>
          </div>
          <Switch 
            checked={analyticsCookies} 
            onCheckedChange={setAnalyticsCookies}
          />
        </div>

        <div className="pt-8">
          <Button 
            onClick={handleSave}
            className="w-full md:w-auto"
          >
            Einstellungen speichern
          </Button>
        </div>
      </div>
    </div>
  )
} 