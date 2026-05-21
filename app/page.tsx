import Navbar from "@/src/components/Navbar";
import WhatsappButton from "@/src/components/WhatsappButton";
import Hero from "@/src/sections/Hero";
import Projects from "@/src/sections/Projects";
import Services from "@/src/sections/Services";
import Stats from "@/src/sections/Stats";

export default function Home() {
  return (
    <main className="bg-[#0B0D12] text-white overflow-hidden">
      <Navbar />
      <WhatsappButton />

      <Hero />
      <Services />
      <Stats />
      <Projects />
    </main>
  );
}