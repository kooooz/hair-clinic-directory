import Script from 'next/script'

interface ArticleJsonLdProps {
  title: string
  description: string
  url: string
  imageUrl: string
  datePublished: string
  dateModified: string
  authorName: string
  baseUrl: string
}

export function ArticleJsonLd({
  title,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
  authorName,
  baseUrl,
}: ArticleJsonLdProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Person",
      "name": authorName,
      "url": `${baseUrl}/ueber-mich`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Beste Haarkliniken",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.svg`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  }

  return (
    <Script id="article-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(articleSchema)}
    </Script>
  )
} 