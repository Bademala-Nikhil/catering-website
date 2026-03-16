import Header from "../components/Header";
import VenuesPageBody from "../components/VenuesPageBody";

export default function VenuesPage() {
  return (
    <div className="bg-[#F5F6F8] min-h-screen">
      <Header dark={true} />
      <VenuesPageBody />
    </div>
  );
}