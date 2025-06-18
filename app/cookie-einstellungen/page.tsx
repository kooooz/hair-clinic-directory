import type { Metadata } from "next"
import { CookieSettingsClient } from "@/components/cookie-settings-client"

export const metadata: Metadata = {
  title: "Cookie-Einstellungen | Beste Haarkliniken",
  description: "Verwalten Sie Ihre Cookie-Einstellungen für beste-haarkliniken.de. Passen Sie an, welche Cookies Sie zulassen möchten.",
}

export default function CookieSettings() {
  return <CookieSettingsClient />
} 