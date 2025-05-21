"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import Script from "next/script"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const baseUrl = "https://beste-haarkliniken.de"
  
  // Add home as first item
  const allItems = [
    { label: "Home", href: "/" },
    ...items
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@id": `${baseUrl}${item.href}`,
        name: item.label
      }
    }))
  }

  return (
    <>
      <Script id="json-ld-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>

      <nav className="flex items-center space-x-1 text-sm text-gray-500 mb-8">
        {allItems.map((item, index) => (
          <div key={item.href} className="flex items-center">
            {index === 0 ? (
              <Link href={item.href} className="hover:text-gray-700">
                <Home className="h-4 w-4" />
              </Link>
            ) : (
              <>
                <ChevronRight className="h-4 w-4 mx-1" />
                {index === allItems.length - 1 ? (
                  <span className="text-gray-900">{item.label}</span>
                ) : (
                  <Link href={item.href} className="hover:text-gray-700">
                    {item.label}
                  </Link>
                )}
              </>
            )}
          </div>
        ))}
      </nav>
    </>
  )
} 