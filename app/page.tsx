import Navbar from "@/components/barbearia/Navbar";
import Hero from "@/components/barbearia/Hero";
import Services from "@/components/barbearia/Services";
import Gallery from "@/components/barbearia/Gallery";
import GalleryPic from "@/components/barbearia/GalleryPic";
import MapSection from "@/components/barbearia/MapSection";
import Footer from "@/components/barbearia/Footer";
import FloatingWhatsApp from "@/components/barbearia/FloatingWhatsApp";
import Preview from "@/components/barbearia/Preview";
import { getSanityClient } from "@/sanity/lib/client";
import { isSanityConfigured } from "@/sanity/env";

export const revalidate = 60; // Revalida a cada 60 segundos

export default async function Page() {
  let siteSettings: { statusOverride?: string } | null = null;
  let services: Awaited<ReturnType<ReturnType<typeof getSanityClient>["fetch"]>>[] =
    [];
  let galleryPhotos: typeof services = [];
  let canalhaPhotos: typeof services = [];

  if (isSanityConfigured) {
    const client = getSanityClient();
    siteSettings = await client.fetch(`*[_type == "siteSettings"][0]`);
    services = await client.fetch(`*[_type == "service"] | order(order asc)`);
    galleryPhotos = await client.fetch(
      `*[_type == "galleryPhoto"] | order(order asc)`
    );
    canalhaPhotos = await client.fetch(
      `*[_type == "canalhaPhoto"] | order(order asc)`
    );
  }

  const statusOverride = siteSettings?.statusOverride || "auto";

  return (
    <main className="min-h-screen" style={{ background: "#0a0a0a" }}>
      <Navbar statusOverride={statusOverride} />
      <Hero />
      <Services services={services} />
      <Gallery photos={galleryPhotos} />
      <GalleryPic photos={canalhaPhotos} />
      <Preview />
      <MapSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

