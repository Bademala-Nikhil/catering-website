import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bgImage from "../assets/service-bg.jpg";
import drinkImage from "../assets/drink.png";

export default function CateringServicesSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">

      {/* TOP BACKGROUND */}
      <div className="relative h-[676px] w-full">
        <img
          src={bgImage}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#07122B]/45"></div>

        {/* TOP TEXT */}
        <div className="relative max-w-[1180px] mx-auto px-6 lg:px-0 pt-20">

          {/* SMALL LABEL */}
          <motion.p
            initial={{ opacity: 0, scaleX: 0.7 }}
            whileInView={{ opacity: 0.8, scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-sm text-white/80"
          >
            Виды кейтеринга
          </motion.p>

          {/* HEADLINE */}
          <motion.h2
            initial={{ opacity: 0, scaleX: 0.8 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-[870px] ml-auto text-[42px] md:text-[64px] leading-[1.1] font-semibold text-white mt-3"
          >
            Широкий спектр услуг выездного кейтеринга на разные виды мероприятий
          </motion.h2>

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0, scaleX: 0.8 }}
            whileInView={{ opacity: 0.9, scaleX: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="max-w-[880px] ml-auto text-lg leading-[2] text-white/80 mt-5"
          >
            Мы выезжаем на площадки в разных форматах. Это может быть фуршет в
            нордическом стиле или банкет в стиле Марии Антуанетты, мы сервируем
            разработанный под вас гастрономический сет с 10 переменами блюд,
            или готовим на природе блюда на гриле. Кроме того, мы делаем
            тематические станции - коктейльный бар, Candy bar, Smorrebrod station и т.д.
          </motion.p>
        </div>
      </div>

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative max-w-[1180px] h-[496px] mx-auto -mt-44 bg-white flex z-20 shadow-2xl"
      >

        {/* LEFT CONTENT */}
        <div className="w-[480px] px-16 py-14 flex flex-col">

          {/* TITLE */}
          <motion.h3
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[52px] font-semibold leading-none text-black"
          >
            Напитки
          </motion.h3>

          {/* PRICE */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 0.7, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[30px] text-gray-400 mt-4"
          >
            от 4000 руб/чел
          </motion.p>

          {/* PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 0.85, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg leading-[2] text-gray-600 mt-14 max-w-[344px]"
          >
            Организация выездного фуршета. Мы поможем вам организовать
            выездной фуршет в любом удобном для вас месте. Оцените по
            достоинству мастерство наших поваров. Продемонстрируйте гостям
            свой хороший вкус и утонченные манеры.
          </motion.p>

          {/* ARROWS INSIDE BLOCK */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex gap-2 mt-10"
          >
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
              <ChevronLeft size={22} />
            </button>

            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
              <ChevronRight size={22} />
            </button>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-[700px] h-full"
        >
          <img
            src={drinkImage}
            alt="drink"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* BOTTOM SPACE */}
      <div className="h-28 bg-white"></div>
    </section>
  );
}