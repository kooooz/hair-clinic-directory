import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { SocialMetaTags } from "@/components/social-meta-tags"
import { CookieConsent } from "@/components/cookie-consent"
import { WebsiteJsonLd } from "@/components/website-json-ld"
import { FaqJsonLd } from "@/components/faq-json-ld"
import { HowToJsonLd } from "@/components/howto-json-ld"
import { LanguageProvider } from '@/contexts/language-context'
import { metadata as baseMetadata } from './metadata'
import { GoogleAnalytics } from "@/components/google-analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  ...baseMetadata.de,
  alternates: {
    languages: {
      'de': '/',
      'en': '/en',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Base URL for the website - in production, this would come from environment variables
  const baseUrl = "https://beste-haarkliniken.de"
  const ogImageUrl = `${baseUrl}/og-image.jpg`

  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/neue-haas-grotesk.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/geist-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Social Media Meta Tags */}
        <SocialMetaTags 
          title={metadata.title as string} 
          description={metadata.description as string} 
          url={baseUrl} 
          imageUrl={ogImageUrl} 
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <Header />
            <main>{children}</main>
            <Footer />
            <CookieConsent />
            <WebsiteJsonLd />
            <FaqJsonLd />
            <HowToJsonLd />
            {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
              <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string} />
            )}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
