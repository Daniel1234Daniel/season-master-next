import HeroSection from "@/components/HeroSection";
import FeatureHighlights from "@/components/FeatureHighlights";
import ServiceAreas from "@/components/ServiceAreas";
import WindowRange from "@/components/WindowRange";
import Testimonials from "@/components/Testimonials";
import Regulation from "@/components/Regulation";
import { 
  getHeroSection, 
 
} from "@/actions/functions/api";
import ShoppingAs from "@/components/ShoppingAs";
import WhyChoose from "@/components/WhyChoose";

async function fetchWithFallback(fetchFunction: () => Promise<any>, fallback: any = null) {
  try {
    return await fetchFunction();
  } catch (error) {
    console.error("Fetch error:", error);
    return fallback;
  }
}

export default async function HomePage() {
  // Fetch data with individual error handling
  const [
    heroData,
 
  ] = await Promise.all([
    fetchWithFallback(getHeroSection, { error: "Hero section unavailable" }),
 
  ]);

  return (
    <main className="flex flex-col items-center bg-white">
      <HeroSection data={heroData} />
      <FeatureHighlights  />
      <ServiceAreas />
      <WindowRange  />
      <Regulation  />
      <ShoppingAs/>
      <WhyChoose/>
      <Testimonials/>
    </main>
  );
}