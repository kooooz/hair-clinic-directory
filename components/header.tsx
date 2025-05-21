"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"
import LanguageSwitcher from './language-switcher'
import { useLanguage } from '@/contexts/language-context'

export function Header() {
  const { t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-20">
          <Link href="/" className="relative w-48 h-12 flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="Beste Haarkliniken Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
          
          <nav className="flex-grow flex justify-center items-center space-x-6 text-black font-body text-sm">
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

          <Link
            href="/kontakt"
            className="flex-shrink-0 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 font-mono text-xs"
          >
            {t('nav.contact')}
          </Link>
        </div>
      </div>
    </header>
  )
}
