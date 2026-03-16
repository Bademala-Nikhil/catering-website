import Header from "../components/Header";
import ServicesMiddleSection from "../components/ServicesMiddleSection";
import ContactBookingSection from "../components/ContactBookingSection";

export default function ServicesPage() {
  return (
    <div className="bg-[#F5F6F8] min-h-screen">
      <Header dark={true} />
      <ServicesMiddleSection />
      <ContactBookingSection />
    </div>
  );
}