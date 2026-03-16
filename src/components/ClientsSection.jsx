import { motion } from "framer-motion";

import img2 from "../assets/client1.png";
import img3 from "../assets/client2.png";

export default function ClientsSection() {
  const cards = [
    {
      date: "Июль 2021 г.",
      title: "Юбилей в стиле маленькой Италии",
      subtitle: "Банкет на 40 человек",
      size: "large",
    },
    {
      image: img2,
      date: "Февраль 2022 г.",
      title: "Юбилей Салона Ирины Андерсона",
      subtitle: "Фуршет на 30 человек",
      size: "tall",
    },
    {
      image: img3,
      date: "Январь 2022 г.",
      title: "Юбилей в ресторане",
      subtitle: "Гастрономический ужин",
      size: "large",
    },
  ];

  return (
    <section className="w-full bg-[#F3F4F7] py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">

        {/* TOP CONTENT */}
        <div className="max-w-[1180px] mx-auto px-6 lg:px-0 flex flex-col gap-14">

          {/* LABEL */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 0.8, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-sm text-[#1F2740]/70"
          >
            Клиенты
          </motion.p>

          {/* HEADLINE */}
          <motion.h2
            initial={{ opacity: 0, scaleX: 0.85 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-[870px] ml-auto text-[42px] md:text-[64px] leading-[1.15] font-semibold text-[#1F2740]"
          >
            Наши клиенты - это большие и маленькие компании, частные мероприятия дома и крупные для селебрити.
          </motion.h2>

          {/* LOGO ROW */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-[827px] ml-auto flex flex-wrap items-center justify-between gap-8 text-[#A7A7A7]"
          >
            {/* Mercedes */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#A7A7A7] flex items-center justify-center text-xs font-semibold">
                ✦
              </div>
              <span className="text-2xl font-serif tracking-tight">
                Mercedes-Benz
              </span>
            </div>

            {/* Range Rover */}
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 border border-[#A7A7A7] rounded-full text-xs font-bold tracking-wide">
                LAND ROVER
              </div>
              <span className="text-2xl font-bold tracking-wide">
                RANGE ROVER
              </span>
            </div>

            {/* Полисан */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#A7A7A7] flex items-center justify-center text-white font-bold">
                +
              </div>
              <span className="text-2xl font-semibold">
                Полисан
              </span>
            </div>

            {/* Газпром */}
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold">
                G
              </span>
              <span className="text-2xl font-bold tracking-wide">
                ГАЗПРОМ
              </span>
            </div>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-[880px] ml-auto text-lg leading-[2] text-[#1F2740]/70"
          >
            В этом разделе мы представляем наши лучшие работы и успешные мероприятия,
            которые мы организовали для наших клиентов. Здесь вы можете увидеть
            фотографии и видео отчеты о наших последних мероприятиях, таких как
            свадьбы, корпоративные вечеринки, детские дни рождения и т.д.
          </motion.p>
        </div>

        {/* CARDS ROW */}
        <div className="mt-24 flex gap-12 overflow-hidden pl-[130px]">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
                rotate: index === 1 ? 0 : -2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: 0,
              }}
              transition={{
                delay: index * 0.25,
                duration: 1,
              }}
              viewport={{ once: true }}
              className={`flex-shrink-0 ${
                card.size === "tall"
                  ? "w-[480px]"
                  : "w-[580px]"
              }`}
            >
              {/* IMAGE */}
              <div
                className={`overflow-hidden ${
                  card.size === "tall"
                    ? "h-[580px]"
                    : "h-[420px]"
                }`}
              >
                <img
                  src={card.image}
                  alt=""
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>

              {/* TEXT */}
              <div className="mt-8 flex flex-col gap-4">
                <span className="inline-block bg-[#65729B] text-white text-sm px-4 py-2 rounded-full w-fit">
                  {card.date}
                </span>

                <h3 className="text-[34px] font-semibold text-[#1F2740]">
                  {card.title}
                </h3>

                <p className="text-lg text-[#1F2740]/70">
                  {card.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}