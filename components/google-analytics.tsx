'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

declare global {
  interface Window {
    dataLayer: any[]
  }
}

export function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    const analyticsConsent = localStorage.getItem('analyticsConsent')
    setHasConsent(analyticsConsent === 'true')
  }, [])

  if (!hasConsent) return null

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
} 