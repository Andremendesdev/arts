function readEnv(name: string) {
  const value = process.env[name]
  return typeof value === "string" ? value.trim() : ""
}

export const DEFAULT_SITE_NAME = "Gustavo Art's"
export const DEFAULT_LOCATION_LABEL = "Piraju, SP — Brasil"

export const siteName = readEnv("NEXT_PUBLIC_SITE_NAME") || DEFAULT_SITE_NAME
export const locationLabel =
  readEnv("NEXT_PUBLIC_LOCATION_LABEL") || DEFAULT_LOCATION_LABEL

export const whatsappNumber = readEnv("NEXT_PUBLIC_WHATSAPP_NUMBER")
export const instagramUrl = readEnv("NEXT_PUBLIC_INSTAGRAM_URL")
export const googleReviewUrl = readEnv("NEXT_PUBLIC_GOOGLE_REVIEW_URL")
export const mapLat = readEnv("NEXT_PUBLIC_MAP_LAT")
export const mapLng = readEnv("NEXT_PUBLIC_MAP_LNG")

export const isWhatsAppConfigured = whatsappNumber.length > 0
export const isInstagramConfigured = instagramUrl.length > 0
export const isGoogleReviewConfigured = googleReviewUrl.length > 0
export const isMapConfigured = mapLat.length > 0 && mapLng.length > 0

export function getWhatsAppUrl(message: string) {
  if (!isWhatsAppConfigured) return null
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function getMapEmbedUrl() {
  if (!isMapConfigured) return null
  return `https://www.google.com/maps?q=${mapLat},${mapLng}&output=embed`
}
