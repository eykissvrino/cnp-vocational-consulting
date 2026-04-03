import HeroSection from "@/components/home/HeroSection";
import StatsCounter from "@/components/home/StatsCounter";
import WhyUsSection from "@/components/home/WhyUsSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import ClientsStrip from "@/components/home/ClientsStrip";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsCounter />
      <WhyUsSection />
      <ServicesOverview />
      <ClientsStrip />
      <FeaturedProjectsSection />
      <CTABanner />
    </>
  );
}
