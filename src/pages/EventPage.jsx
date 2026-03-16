import Header from "../components/Header";
import EventHeroSection from "../components/EventHeroSection";
import EventGallerySection from "../components/EventGallerySection"
import ContactBookingSection from "../components/ContactBookingSection";

export default function EventPage() {
  return (
    <div className="bg-[#F5F6F8] min-h-screen">
      <Header dark={true} />
      <EventHeroSection />
       <EventGallerySection />
      <ContactBookingSection />
    </div>
  );
}