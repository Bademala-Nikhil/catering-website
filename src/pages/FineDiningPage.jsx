import Header from "../components/Header";
import FineDiningHeroSection from "../components/FineDiningHeroSection";
import ClientsSection from "../components/ClientsSection";
import ContactBookingSection from "../components/ContactBookingSection";
import IncludedSection from "../components/IncludedSection";
import FineDinningWideImage from "../components/FineDinningWideImage";
import FineDiningGallerySection from "../components/FineDiningGallerySection";
export default function FineDiningPage() {
  return (
    <div className="bg-[#F5F6F8] min-h-screen">
      <Header dark={true} />
      <FineDiningHeroSection />
      <IncludedSection />
      <FineDinningWideImage />
      <FineDiningGallerySection />
      <ClientsSection />
      <ContactBookingSection />
      
    </div>
  );
}