import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import StatsSection from "@/components/sections/StatsSection";
import BusinessSection from "@/components/sections/BusinessSection";
import QuoteSection from "@/components/sections/QuoteSection";
import VideoSection from "@/components/sections/VideoSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <VideoSection />
      <StatsSection />
      <BusinessSection />
      <QuoteSection />
    </>
  );
}
