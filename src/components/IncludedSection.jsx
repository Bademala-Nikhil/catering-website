import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  BookOpen,
  House,
} from "lucide-react";

export default function IncludedSection() {
  const items = [
    {
      icon: UtensilsCrossed,
      title: "Оформление стола",
      text: "Nordic имеет команду опытных профессионалов в сфере общественного питания, которые занимаются поставкой высококачественной еды и исключительного обслуживания.",
    },
    {
      icon: BookOpen,
      title: "Индивидуальное меню",
      text: "Nordic предлагает множество вариантов меню, которые можно настроить в соответствии с вашими конкретными потребностями и предпочтениями.",
    },
    {
      icon: House,
      title: "Поиск и подбор помещения",
      text: "Nordic предлагает множество вариантов меню, которые можно настроить в соответствии с вашими конкретными потребностями и предпочтениями.",
    },
  ];

  return (
    <section className="w-full bg-[#F5F6F8] py-28 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-0 flex flex-col gap-[100px]">

        {/* TOP GROUP */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-[#1F2740]/70 mb-5">
              Что включено
            </p>

            <h2 className="text-[46px] md:text-[72px] leading-[1.05] font-semibold text-[#1F2740]">
              В фуршет включено все необходимое для праздника
            </h2>
          </motion.div>

          {/* RIGHT */}
          <motion.p
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-[22px] leading-[1.8] text-[#1F2740]/75 max-w-[560px]"
          >
            Прекрасная возможность порадовать ваших гостей вкусной и красиво
            оформленной закуской. Мы предлагаем выездной фуршет на заказ для
            любого мероприятия - свадьбы, корпоратива, юбилея или другого
            торжественного мероприятия.
          </motion.p>
        </div>

        {/* COMPONENTS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.9,
                }}
                viewport={{ once: true }}
                className="flex flex-col gap-8"
              >
                {/* ICON */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 3,
                  }}
                  className="w-[112px] h-[112px] rounded-full bg-[#65729B] flex items-center justify-center"
                >
                  <Icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* TITLE */}
                <h3 className="text-[34px] leading-[1.2] font-semibold text-[#1F2740]">
                  {item.title}
                </h3>

                {/* TEXT */}
                <p className="text-[22px] leading-[1.8] text-[#1F2740]/75">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}