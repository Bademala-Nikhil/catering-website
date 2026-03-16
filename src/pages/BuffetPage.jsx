import Header from "../components/Header";
import BuffetHeroSection from "../components/BuffetHeroSection";
import IncludedSection from "../components/IncludedSection";
import FullWidthImageSection from "../components/FullWidthImageSection";
import BuffetMenuGallerySection from "../components/BuffetMenuGallerySection";
import ClientsSection from "../components/ClientsSection";
import ContactBookingSection from "../components/ContactBookingSection";

export default function BuffetPage() {
  return (
    <div className="bg-[#F5F6F8] min-h-screen">
      <Header dark={true} />
      <BuffetHeroSection />
      <IncludedSection />
      <FullWidthImageSection />
      <BuffetMenuGallerySection />
      <ClientsSection />
      <ContactBookingSection />

    </div>
  );
}