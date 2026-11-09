
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Domains from "@/components/sections/Domains";
import Journey from "@/components/sections/Journey";
import Events from "@/components/sections/Events";
import Collaborations from "@/components/sections/Collaborations";
import Team from "@/components/sections/Team";
import Sponsors from "@/components/sections/Sponsors";
import Gallery from "@/components/sections/Gallery";
import ContactFooter from "@/components/sections/ContactFooter";
import ScrollAtmosphere from "@/components/ui/ScrollAtmosphere";

export default function Home() {
  return (
    <main className="site-shell">
      <ScrollAtmosphere />
      <Navbar />
      <Hero />
      <About />
      <Domains />
      <Journey />
      <Events />
      <Collaborations />
      <Team />
      <Sponsors />
      <Gallery />
      <ContactFooter />
    </main>
  );
}
