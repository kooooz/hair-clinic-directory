'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

export function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    // Check for analytics consent
    const analyticsConsent = localStorage.getItem('analyticsConsent')
    setHasConsent(analyticsConsent === 'true')

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(arguments)
    }
    window.gtag = gtag

    // If consent is given, initialize GA
    if (analyticsConsent === 'true') {
      gtag('js', new Date())
      gtag('config', GA_MEASUREMENT_ID, {
        page_path: window.location.pathname,
      })
    }
  }, [GA_MEASUREMENT_ID])

  if (!hasConsent) {
    return null
  }

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