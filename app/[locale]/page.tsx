import Navbar from "@/src/components/Navbar";
import WhatsappButton from "@/src/components/WhatsappButton";
import Hero from "@/src/sections/Hero";
import Projects from "@/src/sections/Projects";
import Services from "@/src/sections/Services";
import Stats from "@/src/sections/Stats";
import Servicesс from "@/src/components/Services";
import Projectsс from "@/src/components/Projects";
import Reviews from "@/src/components/Reviews";
import FloatingButtons from "@/src/components/FloatingButtons";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0E1A2B] text-white overflow-hidden">
      <Navbar />
      <WhatsappButton />

      <Hero />
      <Services />
      <Servicesс />
      <Stats />
      <Projects />
      <Projectsс />
      <Reviews />
      <FloatingButtons />
      <Contact />
      <Footer />
    </main>
  );
}