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
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.beste-haarkliniken.de'),
  ...baseMetadata.de,
  alternates: {
    canonical: '/',
    languages: {
      'de': '/',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Base URL for the website - in production, this would come from environment variables
  const baseUrl = "https://www.beste-haarkliniken.de"
  const ogImageUrl = `${baseUrl}/og-image.jpg`

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Beste Haarkliniken",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/suche?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }

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

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/flavicon.svg" />
        <link rel="icon" type="image/svg+xml" sizes="16x16" href="/flavicon.svg" />
        <link rel="icon" type="image/svg+xml" sizes="32x32" href="/flavicon.svg" />
        <link rel="shortcut icon" href="/flavicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/flavicon.svg" />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T9JGQPJC');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* Ahrefs Verification */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="Il4ZgvyWhIsL3JJ371FN5w"
          strategy="afterInteractive"
        />

        <Script id="website-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(websiteSchema)}
        </Script>

        {/* Hreflang self-referencing and x-default */}
        <link rel="alternate" href="https://www.beste-haarkliniken.de" hrefLang="de" />
        <link rel="alternate" href="https://www.beste-haarkliniken.de" hrefLang="x-default" />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-T9JGQPJC"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <Header />
            <main>{children}</main>
            <Footer />
            <CookieConsent />
            <WebsiteJsonLd />
            <HowToJsonLd />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
