import { motion } from "framer-motion";
import {
  Calendar,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function ContactBookingSection() {
  return (
    <>
      {/* MAIN FORM SECTION */}
      <section className="w-full bg-[#F3F4F7] py-24 overflow-hidden">
        <div className="max-w-[1180px] mx-auto px-6 lg:px-0 flex flex-col lg:flex-row gap-16">

          {/* LEFT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-[780px] flex flex-col gap-11"
          >

            {/* STEP */}
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-[#1F2740] text-white flex items-center justify-center text-lg font-medium">
                1
              </div>
              <span className="text-[34px] font-semibold text-[#1F2740]">
                Мероприятие
              </span>

              <div className="w-12 h-12 rounded-full bg-[#E2E4EA] text-[#8C8C8C] flex items-center justify-center text-lg font-medium ml-8">
                2
              </div>
              <span className="text-[34px] text-[#8C8C8C]">
                Контакты
              </span>
            </div>

            {/* TITLE */}
            <h2 className="text-[52px] md:text-[72px] leading-[1.1] font-semibold text-[#1F2740]">
              Расскажите о мероприятии
            </h2>

            {/* FORMAT */}
            <div>
              <p className="text-xl text-[#1F2740]/70 mb-5">
                Выберите формат мероприятия:
              </p>

              <div className="flex flex-wrap gap-4">
                {["Фуршет", "Гастрономический ужин", "Банкет"].map(
                  (item, i) => (
                    <button
                      key={i}
                      className={`px-8 py-4 rounded-full text-xl transition ${
                        i === 0
                          ? "bg-[#1F2740] text-white"
                          : "bg-[#E3E5EA] text-[#1F2740]"
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* FORM FIELDS */}
            <div className="flex flex-col gap-6">

              <div className="bg-white rounded-2xl px-8 py-8 flex justify-between items-center">
                <span className="text-xl text-[#1F2740]/80">
                  Количество гостей:
                </span>
                <span className="text-xl font-semibold text-[#1F2740]">
                  50 человек
                </span>
              </div>

              <div className="bg-white rounded-2xl px-8 py-8 flex justify-between items-center">
                <span className="text-xl text-[#1F2740]/80">
                  Дата мероприятия:
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-xl font-semibold text-[#1F2740]">
                    20 апреля 2023
                  </span>
                  <Calendar size={22} />
                </div>
              </div>

              <div className="bg-white rounded-2xl px-8 py-8 flex justify-between items-center">
                <span className="text-xl text-[#1F2740]/80">
                  Дополнительные услуги:
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-xl font-semibold text-[#1F2740]">
                    Тематические станции, Декор, +2
                  </span>
                  <ChevronDown size={22} />
                </div>
              </div>

              <div className="bg-white rounded-2xl px-8 py-8 text-xl text-[#1F2740]/50">
                Напишите пожелания по меню
              </div>
            </div>

            {/* BUTTON */}
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center pt-4">
              <button className="bg-[#1F2740] text-white px-16 py-5 text-xl font-medium hover:opacity-90 transition">
                Продолжить
              </button>

              <p className="text-[#8C8C8C] leading-8 max-w-[420px] text-lg">
                Нажимая кнопку вы соглашаетесь с условиями обработки персональных данных и политикой конфиденциальности
              </p>
            </div>
          </motion.div>

          {/* RIGHT SUMMARY */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-[280px] pt-36 flex flex-col gap-8"
          >
            <p className="text-lg text-[#8C8C8C]">
              Примерная стоимость:
            </p>

            <h3 className="text-[64px] font-semibold text-[#1F2740]">
              150 000 ₽
            </h3>

            <p className="text-xl text-[#1F2740]/70">
              5 000 ₽/чел
            </p>

            <div className="border-t border-[#D6D8DD] pt-8 flex flex-col gap-6 text-lg">
              <div className="flex justify-between">
                <span className="text-[#8C8C8C]">Формат:</span>
                <span>Фуршет</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#8C8C8C]">Количество гостей:</span>
                <span>30</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#8C8C8C]">Дата:</span>
                <span>20.04.23</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-black border-t border-[#1C1C1C] py-11">
        <div className="max-w-[1440px] mx-auto px-[130px] flex flex-col lg:flex-row justify-between items-center gap-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-10 text-[#D7D7D7] text-lg"
          >
            <span>© 2023 Нордик кейтеринг</span>
            <span>+7 911 926 44 07</span>
            <span>restaurant@nordic-spb.ru</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="flex gap-8 text-[#D7D7D7]"
          >
            <Facebook size={24} />
            <Instagram size={24} />
            <Twitter size={24} />
          </motion.div>
        </div>
      </footer>
    </>
  );
}