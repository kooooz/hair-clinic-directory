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

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Beste Haarkliniken in der Türkei | Haartransplantation in Istanbul",
  description:
    "Finde die beste Haarklinik in der Türkei für deine Haartransplantation. Vergleiche Top-Kliniken in Istanbul und treffe eine fundierte Entscheidung.",
  generator: 'v0.dev'
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
        <SocialMetaTags title={metadata.title} description={metadata.description} url={baseUrl} imageUrl={ogImageUrl} />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
          <WebsiteJsonLd />
          <FaqJsonLd />
          <HowToJsonLd />
        </ThemeProvider>
      </body>
    </html>
  )
}
