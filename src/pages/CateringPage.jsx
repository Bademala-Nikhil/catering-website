import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import CateringServicesSection from "../components/CateringServicesSection";
import ChefStorySection from "../components/ChefStorySection";
import VideoHeroSection from "../components/VideoHeroSection";
import WhyUsSection from "../components/WhyUsSection";
import ClientsSection from "../components/ClientsSection";
import MediaQuoteSection from "../components/MediaQuoteSection";
import ContactBookingSection from "../components/ContactBookingSection";

export default function CateringPage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <CateringServicesSection />
      <ChefStorySection />
      <VideoHeroSection />
      <WhyUsSection />
      <ClientsSection />
      <MediaQuoteSection />
      <ContactBookingSection />
    </>
  );
}