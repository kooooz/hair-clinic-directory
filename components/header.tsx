"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Zur Startseite">
          <Image src="/logo.svg" alt="beste-haarkliniken.de" width={180} height={30} priority />
        </Link>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menü öffnen"
          aria-expanded={isMenuOpen}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-body text-sm">
          <Link href="/kliniken-vergleichen" className="hover:text-gray-600 transition-colors">
            Kliniken vergleichen
          </Link>
          <Link href="/faq" className="hover:text-gray-600 transition-colors">
            Häufige Fragen
          </Link>
          <Link href="/empfehlungen" className="hover:text-gray-600 transition-colors">
            Unsere Empfehlungen
          </Link>
          <Link href="/ueber-mich" className="hover:text-gray-600 transition-colors">
            Über mich
          </Link>
        </nav>

        <Link href="/kontakt">
          <Button className="hidden md:flex rounded-full font-mono text-xs">Kontakt aufnehmen</Button>
        </Link>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b md:hidden">
            <nav className="flex flex-col p-4 space-y-4 font-body text-sm">
              <Link
                href="/kliniken-vergleichen"
                className="hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kliniken vergleichen
              </Link>
              <Link href="/faq" className="hover:text-gray-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Häufige Fragen
              </Link>
              <Link
                href="/empfehlungen"
                className="hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Unsere Empfehlungen
              </Link>
              <Link
                href="/ueber-mich"
                className="hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Über mich
              </Link>
              <Link href="/kontakt" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full rounded-full font-mono text-xs">Kontakt aufnehmen</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
