import { Hero } from "@/components/sections/Hero";
import { ThreeSides } from "@/components/sections/ThreeSides";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <ThreeSides />
    </main>
  );
}