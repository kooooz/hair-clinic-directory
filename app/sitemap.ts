import { MetadataRoute } from "next"
import { clinics } from "@/lib/clinic-data"

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL - only German version is supported
  const baseUrl = "https://beste-haarkliniken.de"

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ueber-mich`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
  ]

  // Dynamic clinic routes
  const clinicRoutes = clinics.map((clinic) => ({
    url: `${baseUrl}/klinik/${clinic.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  return [...staticRoutes, ...clinicRoutes]
} 