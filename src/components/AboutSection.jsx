import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function AboutSection() {
  const stats = [
    {
      number: "200 +",
      text: "довольных заказчиков\nв год",
    },
    {
      number: "5 +",
      text: "лет в ресторанной\nиндустрии",
    },
    {
      number: "100 +",
      text: "разных стилей меню под\nтематику вашего мероприятия",
    },
    {
      number: "1000 +",
      text: "вариантов необычной\nпосуды и подачи блюд",
    },
  ];

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.9,
      },
    }),
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.9,
      },
    }),
  };

  return (
    <section className="w-full bg-white text-[#1F2740] py-20 sm:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col gap-14 sm:gap-16 lg:gap-20">

        {/* SMALL LABEL */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeLeft}
        >
          <p className="text-sm text-[#1F2740]/80 flex items-center gap-2">
            <Sparkles size={16} />
            О нас
          </p>
        </motion.div>

        {/* HEADLINE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-full lg:max-w-[870px] lg:ml-auto"
        >
          <h2 className="text-[28px] sm:text-[42px] md:text-[56px] lg:text-[64px] leading-[1.15] font-semibold">
            Мы поможем сделать ваше мероприятие особенным, чтобы ваши гости
            запомнили праздник надолго.
          </h2>
        </motion.div>

        {/* SUBTEXT ROW */}
        <div className="max-w-full lg:max-w-[880px] lg:ml-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20">

          <motion.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-base sm:text-lg leading-[1.9] text-[#1F2740]/90"
          >
            Nordic за 5 лет стал брендом, который заключает в себе высокое
            качество предоставляемых услуг и неповторимую кухню. С недавнего
            времени мы сотрудничаем со скандинавскими шеф-поварами, которые
            вдохновляют этот проект новыми идеями.
          </motion.p>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-base sm:text-lg leading-[1.9] text-[#1F2740]/90"
          >
            Наша команда опытных профессионалов во главе с идеологом проекта
            Надеждой Третьяковой и шеф-поваром Игорем Васильевым создадут для
            вас уникальное меню, оригинальные коктейли, стильное накрытие,
            предложат и разработают нестандартный фуршет.
          </motion.p>
        </div>

        {/* BUTTON */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex justify-center lg:justify-start lg:ml-[300px]"
        >
          <button className="w-full sm:w-[280px] h-[56px] sm:h-[60px] bg-[#1F2740] text-white text-base sm:text-lg font-medium hover:scale-105 transition-all duration-500">
            Подробнее о компании
          </button>
        </motion.div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 pt-10 sm:pt-14">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col gap-4"
            >
              {/* ICON */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
              >
                <Sparkles size={20} />
              </motion.div>

              {/* NUMBER */}
              <h3 className="text-[42px] sm:text-[54px] md:text-[64px] lg:text-[72px] font-semibold leading-none">
                {item.number}
              </h3>

              {/* TEXT */}
              <p className="text-base sm:text-lg leading-relaxed whitespace-pre-line text-[#1F2740]/90">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}