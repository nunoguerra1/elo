import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ThreeSides } from "@/components/sections/ThreeSides";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CallToAction } from "@/components/sections/CallToAction";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <ThreeSides />
        <ImpactStats />
        <HowItWorks />
        <CallToAction />
        <Footer />
      </main>
    </>
  );
}