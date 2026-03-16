import Header from "../components/Header";
import CoffeeBreakHeroSection from "../components/CoffeeBreakHeroSection";
import CoffeeBreakWideImageSection from "../components/CoffeeBreakWideImageSection";
import ClientsSection from "../components/ClientsSection";
import ContactBookingSection from "../components/ContactBookingSection";

export default function CoffeeBreakPage() {
  return (
    <div className="bg-[#F5F6F8] min-h-screen">
      <Header dark={true} />
      <CoffeeBreakHeroSection />
      <CoffeeBreakWideImageSection />
      <ClientsSection />
      <ContactBookingSection />
    </div>
  );
}