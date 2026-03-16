import { motion } from "framer-motion";
import {
  Users,
  ClipboardList,
  CheckCheck,
  PenTool,
} from "lucide-react";

export default function WhyUsSection() {
  const items = [
    {
      icon: <Users size={30} />,
      text: "Nordic имеет команду опытных профессионалов в сфере общественного питания, которые занимаются поставкой высококачественной еды и исключительного обслуживания.",
    },
    {
      icon: <ClipboardList size={30} />,
      text: "Nordic предлагает множество вариантов меню, которые можно настроить в соответствии с вашими конкретными потребностями и предпочтениями.",
    },
    {
      icon: <CheckCheck size={30} />,
      text: "Nordic помогает снять стресс при планировании мероприятий, предлагая комплексное решение для всех ваших потребностей в сфере кейтеринга, включая планирование мероприятий и выбор места проведения.",
    },
    {
      icon: <PenTool size={30} />,
      text: "Nordic использует только самые свежие ингредиенты и готовит всю еду на месте, чтобы обеспечить максимальный вкус и качество.",
    },
  ];

  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-0 flex flex-col gap-24">

        {/* SMALL LABEL */}
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 0.8, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-sm text-[#1F2740]/80"
        >
          Почему мы
        </motion.p>

        {/* HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, scaleX: 0.7 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-[880px] ml-auto text-[42px] md:text-[64px] leading-[1.15] font-semibold text-[#1F2740]"
        >
          Мы считаем, что каждое событие особенное и заслуживает стильного празднования.
        </motion.h2>

        {/* GRID */}
        <div className="max-w-[880px] ml-auto grid md:grid-cols-2 gap-y-20 gap-x-24">

          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: index * 0.2,
                duration: 0.9,
              }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              {/* ICON */}
              <div className="w-[80px] h-[80px] rounded-full bg-[#65729B]/12 flex items-center justify-center text-[#65729B]">
                {item.icon}
              </div>

              {/* TEXT */}
              <p className="text-lg leading-[2] text-[#1F2740] max-w-[380px]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}