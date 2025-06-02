import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/en/"],
    },
    sitemap: "https://beste-haarkliniken.de/sitemap.xml",
  }
} 