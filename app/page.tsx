import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import WhatsAppFloat from "@/app/components/WhatsAppFloat/WhatsAppFloat";
import SectionHero from "@/app/components/sections/SectionHero/SectionHero";
import SectionHistoria from "@/app/components/sections/SectionHistoria/SectionHistoria";
import SectionBeneficios from "@/app/components/sections/SectionBeneficios/SectionBeneficios";
import SectionShowcase from "@/app/components/sections/SectionShowcase/SectionShowcase";
import SectionMarcas from "@/app/components/sections/SectionMarcas/SectionMarcas";
import SectionContato from "@/app/components/sections/SectionContato/SectionContato";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <SectionHero />
        <SectionHistoria />
        <SectionBeneficios />
        <SectionShowcase />
        <SectionMarcas />
        <SectionContato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
