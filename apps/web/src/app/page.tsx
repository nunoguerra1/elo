import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CausesMarquee } from "@/components/sections/CausesMarquee";
import { ThreeSides } from "@/components/sections/ThreeSides";
import { FeaturedCauses } from "@/components/sections/FeaturedCauses";
import { WaveBand } from "@/components/art/WaveBand";
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
        <CausesMarquee />
        <ThreeSides />
        <FeaturedCauses />
        <WaveBand backColor="#8e93d9" frontColor="#e6663f" className="h-20 w-full sm:h-28" />
        <ImpactStats />
        <HowItWorks />
        <WaveBand backColor="#e3a9c2" frontColor="#e7c948" className="h-20 w-full sm:h-28" />
        <CallToAction />
        <Footer />
      </main>
    </>
  );
}