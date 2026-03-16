import { Routes, Route } from "react-router-dom";

import CateringPage from "./pages/CateringPage";
import BuffetPage from "./pages/BuffetPage";
import CoffeeBreakPage from "./pages/CoffeBreakPage";
import FineDiningPage from "./pages/FineDiningPage";
import ServicesPage from "./pages/ServicesPage";
import EventPage from "./pages/EventPage";
import VenuesPage from "./pages/VenuesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CateringPage />} />
      <Route path="/catering" element={<CateringPage />} />

      <Route path="/buffet" element={<BuffetPage />} />
      <Route path="/coffee-break" element={<CoffeeBreakPage />} />
      <Route path="/fine-dining" element={<FineDiningPage />} />

      <Route path="/services" element={<ServicesPage />} />
      <Route path="/events" element={<EventPage />} />
      <Route path="/venues" element={<VenuesPage />} />
    </Routes>
  );
}

export default App;