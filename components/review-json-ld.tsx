import Script from 'next/script'

interface ReviewJsonLdProps {
  reviews: {
    author: {
      name: string
      type: 'Person' | 'Organization'
    }
    reviewRating: {
      ratingValue: number
      bestRating: number
      worstRating: number
    }
    reviewBody: string
    datePublished: string
    itemReviewed: {
      name: string
      type: string
      url: string
    }
  }[]
}

export function ReviewJsonLd({ reviews }: ReviewJsonLdProps) {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "ratingValue": reviews.reduce((acc, review) => acc + review.reviewRating.ratingValue, 0) / reviews.length,
    "reviewCount": reviews.length,
    "bestRating": reviews[0].reviewRating.bestRating,
    "worstRating": reviews[0].reviewRating.worstRating,
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": review.author.type,
        "name": review.author.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.reviewRating.ratingValue,
        "bestRating": review.reviewRating.bestRating,
        "worstRating": review.reviewRating.worstRating
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished,
      "itemReviewed": {
        "@type": review.itemReviewed.type,
        "name": review.itemReviewed.name,
        "url": review.itemReviewed.url
      }
    }))
  }

  return (
    <Script id="review-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(reviewSchema)}
    </Script>
  )
} 