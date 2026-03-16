import { motion } from "framer-motion";

import coffee1 from "../assets/e1.png";
import coffee2 from "../assets/e2.png";
import coffee3 from "../assets/e3.png";

export default function EventHeroSection() {
  return (
    <section className="w-full bg-[#F5F6F8] pt-48 pb-24 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-0 flex flex-col gap-20">

        {/* HERO TOP */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <p className="text-sm text-[#1F2740]/70">
              Меню кейтеринга
            </p>

            <h1 className="text-[52px] md:text-[72px] leading-[1.05] font-semibold text-[#1F2740]">
              Кейтеринг на свадьбу
            </h1>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10 pt-6"
          >
            <p className="text-[22px] leading-[1.8] text-[#1F2740]/75">
              Прекрасная возможность порадовать ваших гостей вкусной и красиво оформленной закуской. Мы предлагаем выездной фуршет на заказ для любого мероприятия - свадьбы, корпоратива, юбилея или другого торжественного мероприятия.
            </p>

            <button className="w-fit px-10 py-5 bg-[#1F2740] text-white text-lg font-medium hover:opacity-90 transition">
              Оставить заявку
            </button>
          </motion.div>
        </div>

        {/* IMAGE FRAME */}
        <div className="grid lg:grid-cols-3 gap-[60px]">

          <motion.img
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src={coffee1}
            alt=""
            className="w-full h-[520px] object-cover"
          />

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src={coffee2}
            alt=""
            className="w-full h-[520px] object-cover"
          />

          <motion.img
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src={coffee3}
            alt=""
            className="w-full h-[520px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}