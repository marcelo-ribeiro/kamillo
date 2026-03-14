import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Results } from "@/components/Results";
import { Cases } from "@/components/Cases";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Results />
      <Cases />
      <Testimonials />
      <About />
      <LeadForm />
      <Footer />
    </main>
  );
}
