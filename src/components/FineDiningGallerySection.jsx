import { motion } from "framer-motion";
import { Download } from "lucide-react";

import img1 from "../assets/d1.png";
import img2 from "../assets/d2.png";
import img3 from "../assets/d3.png";

export default function BuffetMenuGallerySection() {
  const menus = [
    {
      id: "1",
      title: "Фуршет Базовый",
      price: "от 3000 руб/чел",
    },
    {
      id: "2",
      title: "Фуршет Премьер",
      price: "от 3000 руб/чел",
    },
    {
      id: "3",
      title: "Фуршет Элит",
      price: "от 3000 руб/чел",
    },
  ];

  return (
    <section className="w-full bg-[#F5F6F8] py-28 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-0 flex flex-col gap-[160px]">

        {/* TOP CONTENT */}
        <div className="flex flex-col gap-[80px]">

          {/* HEADLINE */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[44px] md:text-[72px] leading-[1.05] font-semibold text-[#1F2740] max-w-[760px]">
              Мы можем подготовить меню под любые Ваши пожелания на любое количество человек
            </h2>
          </motion.div>

          {/* MENU LIST */}
          <div className="flex flex-col border-t border-[#D7D9E0]">

            {menus.map((menu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.8,
                }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-[100px_1fr_1.2fr] gap-8 py-10 border-b border-[#D7D9E0] items-start"
              >
                {/* NUMBER */}
                <div className="w-[64px] h-[64px] rounded-full border border-[#1F2740] flex items-center justify-center text-xl font-semibold text-[#1F2740]">
                  {menu.id}
                </div>

                {/* TITLE */}
                <div>
                  <h3 className="text-[34px] font-semibold text-[#1F2740]">
                    {menu.title}
                  </h3>
                  <p className="text-lg text-[#1F2740]/70 mt-2">
                    {menu.price}
                  </p>
                </div>

                {/* DESCRIPTION */}
                <div className="flex flex-col gap-5">
                  <p className="text-lg leading-[1.8] text-[#1F2740]/70">
                    Определите, какой формат мероприятия вы планируете
                    (например фуршет, банкет, кофе-брейк или другое),
                    какой размер и состав гостей, какой меню вы предпочитаете.
                  </p>

                  <button className="flex items-center gap-3 text-[#1F2740] font-medium hover:opacity-70 transition">
                    <Download size={20} />
                    Скачать меню
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* IMAGE GRID */}
        <div className="flex flex-col gap-[160px]">

          {/* TOP IMAGES */}
          <div className="grid lg:grid-cols-2 gap-[60px]">

            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-[60px]">

              <motion.img
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                src={img1}
                alt=""
                className="w-full h-[700px] object-cover"
              />

              <motion.img
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                src={img3}
                alt=""
                className="w-full h-[700px] object-cover"
              />
            </div>

            {/* RIGHT COLUMN */}
            <motion.img
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              src={img2}
              alt=""
              className="w-full h-[818px] object-cover mt-24"
            />
          </div>
        </div>
      </div>
    </section>
  );
}