import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
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
            <Link 
              href="/cookie-einstellungen" 
              className="hover:text-gray-600 transition-colors"
            >
              Cookie-Einstellungen
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
