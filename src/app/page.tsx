import HeroSection from "@/components/HeroSection";
import FeatureHighlights from "@/components/FeatureHighlights";
import ServiceAreas from "@/components/ServiceAreas";
import WindowRange from "@/components/WindowRange";
import Testimonials from "@/components/Testimonials";
import Regulation from "@/components/Regulation";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center bg-white">
      <HeroSection />
      <FeatureHighlights />
      <ServiceAreas />
      <WindowRange />
      <Regulation/>
      <Testimonials />
    </main>
  );
}
