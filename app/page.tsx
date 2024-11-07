import HeroSection from '@/components/HeroSection';
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection/>
      <AboutSection/>
    </main>
  );
}
