import Navbar from "@/components/barbearia/Navbar";
import Hero from "@/components/barbearia/Hero";
import Services from "@/components/barbearia/Services";
import Gallery from "@/components/barbearia/Gallery";
import GalleryPic from "@/components/barbearia/GalleryPic";
import MapSection from "@/components/barbearia/MapSection";
import Footer from "@/components/barbearia/Footer";
import FloatingWhatsApp from "@/components/barbearia/FloatingWhatsApp";
import Preview from "@/components/barbearia/Preview";
import { client } from "@/sanity/lib/client";

export const revalidate = 60; // Revalida a cada 60 segundos

export default async function Page() {
  // Buscar as configurações e dados do Sanity
  const siteSettings = await client.fetch(`*[_type == "siteSettings"][0]`);
  const services = await client.fetch(`*[_type == "service"] | order(order asc)`);
  const galleryPhotos = await client.fetch(`*[_type == "galleryPhoto"] | order(order asc)`);
  const canalhaPhotos = await client.fetch(`*[_type == "canalhaPhoto"] | order(order asc)`);

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

