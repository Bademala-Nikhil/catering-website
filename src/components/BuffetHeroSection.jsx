import { motion } from "framer-motion";
import img1 from "../assets/f1.png";
import img2 from "../assets/f2.png";
import img3 from "../assets/f3.png";

export default function BuffetHeroSection() {
  return (
    <section className="w-full bg-[#F5F6F8] pt-36 pb-24 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-0 flex flex-col gap-20">

        {/* TOP BLOCK */}
        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-[580px]"
          >
            <p className="text-sm text-[#1F2740]/70 mb-6">
              Меню кейтеринга
            </p>

            <h1 className="text-[52px] md:text-[82px] leading-[1.05] font-semibold text-[#1F2740]">
              Выездной фуршет
            </h1>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-[580px] pt-[54px]"
          >
            <p className="text-lg leading-8 text-[#1F2740]/70 mb-10">
              Прекрасная возможность порадовать ваших гостей вкусной и красиво оформленной закуской. Мы предлагаем выездной фуршет на заказ для любого мероприятия - свадьбы, корпоратива, юбилея или другого торжественного мероприятия.
            </p>

            <button className="bg-[#1F2740] text-white px-14 py-5 text-xl font-medium hover:scale-105 transition duration-500">
              Оставить заявку
            </button>
          </motion.div>
        </div>

        {/* IMAGES */}
        <div className="grid md:grid-cols-3 gap-[60px]">

          <motion.img
            src={img1}
            alt=""
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full h-[520px] object-cover"
          />

          <motion.img
            src={img2}
            alt=""
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full h-[520px] object-cover"
          />

          <motion.img
            src={img3}
            alt=""
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full h-[520px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}