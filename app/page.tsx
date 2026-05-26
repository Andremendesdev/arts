import Navbar from "@/components/barbearia/Navbar";
import Hero from "@/components/barbearia/Hero";
import Services from "@/components/barbearia/Services";
import Gallery from "@/components/barbearia/Gallery";
import MapSection from "@/components/barbearia/MapSection";
import Footer from "@/components/barbearia/Footer";
import FloatingWhatsApp from "@/components/barbearia/FloatingWhatsApp";
import Preview from "@/components/barbearia/Preview";

export default function Page() {
  return (
    <main className="min-h-screen" style={{ background: "#0a0a0a" }}>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Preview />
      <MapSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
