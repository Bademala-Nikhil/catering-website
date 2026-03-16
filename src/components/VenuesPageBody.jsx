import { motion } from "framer-motion";
import { Users } from "lucide-react";

import venue1 from "../assets/venu1.png";
import venue2 from "../assets/venu2.png";
import venue3 from "../assets/veenu3.png";
import venue4 from "../assets/venu (4).png";
import venue5 from "../assets/venu (5).png";
import venue6 from "../assets/venu (6).png";

export default function VenuesPageBody() {
  const venues = [
    {
      image: venue1,
      title: "Ресторан Nordic — Scandi House",
      location: "Санкт-Петербург, Пулковское шоссе, 107",
      guests: "до 70 чел.",
      price: "от 100 000 руб",
    },
    {
      image: venue2,
      title: "Царскосельские Палаты",
      location: "Пушкин, ул. Конюшенная 1/18",
      guests: "до 300 чел.",
      price: "от 200 000 руб",
    },
    {
      image: venue3,
      title: "Гатчинский дворец",
      location: "Санкт-Петербург, Пулковское шоссе, 107",
      guests: "до 70 чел.",
      price: "от 100 000 руб",
    },
    {
      image: venue4,
      title: "Загородный павильон",
      location: "Санкт-Петербург, Пулковское шоссе, 107",
      guests: "до 70 чел.",
      price: "от 100 000 руб",
    },
    {
      image: venue5,
      title: "Софийский павильон",
      location: "Санкт-Петербург, Пулковское шоссе, 107",
      guests: "до 70 чел.",
      price: "от 100 000 руб",
    },
    {
      image: venue6,
      title: "Коттеджный комплекс",
      location: "Санкт-Петербург, Пулковское шоссе, 107",
      guests: "до 70 чел.",
      price: "от 100 000 руб",
    },
  ];

  const categories = [
    "Все",
    "Банкетные залы",
    "Усадьбы",
    "Шатры",
    "Загородные площадки",
  ];

  return (
    <section className="w-full bg-[#F5F6F8] pt-48 pb-24 overflow-hidden">

      <div className="max-w-[1180px] mx-auto px-6 lg:px-0 flex flex-col gap-24">

        {/* TOP */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <p className="text-sm text-[#1F2740]/60">Площадки</p>

            <h1 className="text-[48px] md:text-[72px] leading-[1.05] font-semibold text-[#1F2740] max-w-[700px]">
              Подберем лучшую площадку для Вашего мероприятия
            </h1>

            <p className="text-lg leading-[1.8] text-[#1F2740]/70 max-w-[580px]">
              Мы профессионально подберем место для вашего события.
            </p>
          </motion.div>

          {/* FILTER */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {categories.map((cat, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-[#1F2740]"
              >
                <span>{cat}</span>

                <span className="px-3 py-1 rounded-full border text-sm border-[#1F2740]/20">
                  150
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-20">

          {venues.map((venue, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.05,
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className="flex flex-col gap-5"
            >
              <img
                src={venue.image}
                alt=""
                className="w-full h-[280px] object-cover"
              />

              <p className="text-sm text-[#1F2740]/60">
                {venue.location}
              </p>

              <h3 className="text-[32px] font-semibold text-[#1F2740]">
                {venue.title}
              </h3>

              <div className="flex justify-between items-center text-[#1F2740]/70">
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>{venue.guests}</span>
                </div>

                <span>{venue.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex gap-4">
          {[1, 2, 3, 4].map((num, i) => (
            <button
              key={i}
              className={`w-14 h-14 rounded-full border ${
                i === 0
                  ? "bg-[#1F2740] text-white"
                  : "border-[#1F2740]/20 text-[#1F2740]"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-24 border-t border-[#D7D9E0] pt-10">
        <div className="max-w-[1180px] mx-auto px-6 lg:px-0 flex flex-col md:flex-row justify-between items-center gap-8 text-[#1F2740]/70 text-sm">
          <span>© 2023 Нордик кейтеринг</span>
          <span>+7 911 926 44 07</span>
          <span>restaurant@nordic-spb.ru</span>
        </div>
      </footer>
    </section>
  );
}