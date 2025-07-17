import { useState } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import PortfolioGallery from "@/components/portfolio-gallery";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Interests from "@/components/interests";
import Footer from "@/components/footer";
import Lightbox from "@/components/lightbox";

export default function Portfolio() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="bg-rich-black text-white font-inter">
      <Navigation />
      <Hero />
      <About />
      <PortfolioGallery onImageClick={setLightboxImage} />
      <Experience />
      <Education />
      <Interests />
      <Footer />
      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </div>
  );
}
