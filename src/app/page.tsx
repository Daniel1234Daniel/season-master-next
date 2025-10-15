import HeroSection from "@/components/HeroSection";
import FeatureHighlights from "@/components/FeatureHighlights";
import ServiceAreas from "@/components/ServiceAreas";
import WindowRange from "@/components/WindowRange";
import Testimonials from "@/components/Testimonials";
import Regulation from "@/components/Regulation";
import ErrorFallback from "@/components/ErrorFallback";
import { 
  getAreaWeService,
  getFeatureHighlights,
  getHeroSection,
  getShopping,
  getTrusted,
  getWhyWeChoose,
  getWindowRange, 
 
} from "@/actions/functions/api";
import ShoppingAs from "@/components/ShoppingAs";
import WhyChoose from "@/components/WhyChoose";

async function fetchWithFallback(fetchFunction: () => Promise<any>, fallbackMessage: string) {
  try {
    const data = await fetchFunction();
    return { data, error: null };
  } catch (error) {
  
    return { data: null, error: fallbackMessage };
  }
}


export default async function HomePage() {
  const [
    heroResult,
    featureHighlightsResult,
    windowRangeResult,
    areaWeService,
    whyChoose,
    getTrustedData,
    getShoppingData,

  ] = await Promise.all([
    fetchWithFallback(getHeroSection, "Hero section unavailable"),
    fetchWithFallback(getFeatureHighlights, "Feature highlights unavailable"),
    fetchWithFallback(getWindowRange, "Window range content unavailable"),
    fetchWithFallback(getAreaWeService, "Service area content unavailable"),
    fetchWithFallback(getWhyWeChoose, "The content is unavailable"),
    fetchWithFallback(getTrusted, "The content is unavailable"),
    fetchWithFallback(getShopping, "The content is unavailable"),




  ]);

  return (
    <main className="flex flex-col items-center bg-white">
      {heroResult.error ? (
        <ErrorFallback message={heroResult.error} />
      ) : (
        <HeroSection data={heroResult.data} />
      )}

      {featureHighlightsResult.error ? (
        <ErrorFallback message={featureHighlightsResult.error} />
      ) : (
        <FeatureHighlights data={featureHighlightsResult.data} />
      )}


   {windowRangeResult.error ? (
        <ErrorFallback message={windowRangeResult.error} />
      ) : (
        <ServiceAreas data={areaWeService.data} />
      )}

    

      {windowRangeResult.error ? (
        <ErrorFallback message={windowRangeResult.error} />
      ) : (
        <WindowRange data={windowRangeResult.data} />
      )}

{windowRangeResult.error ? (
        <ErrorFallback message={windowRangeResult.error} />
      ) : (
        <Regulation data={getTrustedData.data} />
      )}

      {windowRangeResult.error ? (
        <ErrorFallback message={windowRangeResult.error} />
      ) : (
        <ShoppingAs data={getShoppingData.data} />
      )}
      
      
  
   
      {windowRangeResult.error ? (
        <ErrorFallback message={windowRangeResult.error} />
      ) : (
        <WhyChoose data={whyChoose.data} />
      )}
      <Testimonials />
    </main>
  );
}
