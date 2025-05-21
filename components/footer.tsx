import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  const handleCookieSettings = () => {
    // Remove existing consent to show the banner again
    localStorage.removeItem("cookieConsent")
    localStorage.removeItem("analyticsConsent")
    // Reload the page to show the cookie banner
    window.location.reload()
  }

  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex space-x-8 font-body text-sm">
            <Link href="/impressum" className="hover:text-gray-600 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-gray-600 transition-colors">
              Datenschutz
            </Link>
            <Link href="/kontakt" className="hover:text-gray-600 transition-colors">
              Kontakt
            </Link>
            <Button 
              variant="link" 
              className="hover:text-gray-600 transition-colors p-0 h-auto font-body text-sm"
              onClick={handleCookieSettings}
            >
              Cookie-Einstellungen
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
