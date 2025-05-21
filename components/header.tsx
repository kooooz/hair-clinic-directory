"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import LanguageSwitcher from './language-switcher'
import { useLanguage } from '@/contexts/language-context'

export function Header() {
  const { t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled || isMenuOpen ? 'bg-white shadow-sm' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative w-48 h-12 flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="Beste Haarkliniken Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-grow justify-center items-center space-x-6 text-black font-body text-sm">
            <Link href="/kliniken-vergleichen" className="hover:underline">
              {t('nav.compare')}
            </Link>
            <Link href="/faq" className="hover:underline">
              {t('nav.faq')}
            </Link>
            <Link href="/empfehlungen" className="hover:underline">
              {t('nav.recommendations')}
            </Link>
            <Link href="/ueber-mich" className="hover:underline">
              {t('nav.about')}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Desktop Contact Button */}
            <Link
              href="/kontakt"
              className="hidden md:flex flex-shrink-0 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 font-mono text-xs"
            >
              {t('nav.contact')}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-black hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-black" />
              ) : (
                <Menu size={24} className="text-black" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-t shadow-lg">
            <nav className="flex flex-col py-4 px-4 space-y-4 text-black font-body text-sm">
              <Link 
                href="/kliniken-vergleichen" 
                className="hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.compare')}
              </Link>
              <Link 
                href="/faq" 
                className="hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.faq')}
              </Link>
              <Link 
                href="/empfehlungen" 
                className="hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.recommendations')}
              </Link>
              <Link 
                href="/ueber-mich" 
                className="hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link 
                href="/kontakt" 
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 font-mono text-xs inline-block w-fit mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
