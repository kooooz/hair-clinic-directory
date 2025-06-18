"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import type { Metadata } from "next"

export default function CookieSettings() {
  const [necessaryCookies, setNecessaryCookies] = useState(true)
  const [analyticsCookies, setAnalyticsCookies] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    // Load current settings
    const hasAnalyticsConsent = localStorage.getItem("analyticsConsent") === "true"
    setAnalyticsCookies(hasAnalyticsConsent)
  }, [])

  const handleSave = () => {
    // Save preferences
    localStorage.setItem("cookieConsent", "true")
    localStorage.setItem("analyticsConsent", analyticsCookies.toString())
    
    // If user opts out of necessary cookies, clear all cookies
    if (!necessaryCookies) {
      localStorage.clear()
      // Clear all cookies
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/")
      })
    }
    
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }

  return (
    <div className="container mx-auto max-w-2xl py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Cookie-Einstellungen</h1>
      
      {showAlert && (
        <Alert className="mb-6">
          <AlertDescription>
            Ihre Einstellungen wurden gespeichert.
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Notwendige Cookies</Label>
              <p className="text-sm text-gray-500">
                Diese Cookies sind für den Betrieb der Website erforderlich. Wenn Sie diese deaktivieren, funktioniert die Website möglicherweise nicht wie erwartet.
              </p>
            </div>
            <Switch
              checked={necessaryCookies}
              onCheckedChange={setNecessaryCookies}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Analyse-Cookies (Google Analytics)</Label>
              <p className="text-sm text-gray-500">
                Diese Cookies helfen uns, die Website zu verbessern, indem sie uns zeigen, wie Besucher die Website nutzen.
              </p>
            </div>
            <Switch
              checked={analyticsCookies}
              onCheckedChange={setAnalyticsCookies}
            />
          </div>
        </div>

        <div className="pt-4">
          <Button 
            onClick={handleSave}
            className="w-full sm:w-auto"
          >
            Einstellungen speichern
          </Button>
        </div>

        <div className="text-sm text-gray-500 space-y-2">
          <p>
            Sie können Ihre Cookie-Einstellungen jederzeit ändern. Wenn Sie alle Cookies ablehnen, werden Ihre Einstellungen gelöscht und Sie müssen sie bei Ihrem nächsten Besuch erneut festlegen.
          </p>
          <p>
            Weitere Informationen zu Cookies und wie wir sie verwenden, finden Sie in unserer{" "}
            <a href="/datenschutz" className="text-[#EB5D49] hover:underline">
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Cookie-Einstellungen | Beste Haarkliniken",
  description: "Verwalten Sie Ihre Cookie-Einstellungen für beste-haarkliniken.de. Passen Sie an, welche Cookies Sie zulassen möchten.",
} 