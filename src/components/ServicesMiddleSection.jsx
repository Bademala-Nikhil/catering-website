import { motion } from "framer-motion";

import img1 from "../assets/service1.png";
import img2 from "../assets/service2.png";

export default function ServicesMiddleSection() {
  const services = [
    {
      id: "1",
      title: "Программа",
      text: "Мы предложим и подберем для Вас ведущих, диджеев, фотографов, видеографов, артистов.",
      image: img1,
    },
    {
      id: "2",
      title: "Аренда музыкального и светового оборудования",
      text: "Подберем необходимое оборудование для вашего мероприятия.",
    },
    {
      id: "3",
      title: "Сомелье и гастрономический ужин",
      text: "Организация винного сопровождения и гастрономического ужина.",
    },
    {
      id: "4",
      title: "Иммерсивное-шоу",
      text: "Мастерски организуем шоу-программы.",
    },
    {
      id: "5",
      title: "Трансфер",
      text: "Комфортный транспорт для гостей.",
    },
    {
      id: "6",
      title: "Декор и флористика",
      text: "Подберем оформление пространства.",
      image: img2,
    },
    {
      id: "7",
      title: "Аренда шатров",
      text: "Тенты и шатры для мероприятий.",
    },
    {
      id: "8",
      title: "Полиграфия",
      text: "Приглашения, карточки, меню.",
    },
    {
      id: "9",
      title: "Мебель",
      text: "Столы, стулья, мебель.",
    },
    {
      id: "10",
      title: "Фейерверк",
      text: "Яркие эффекты для праздника.",
    },
  ];

  return (
    <section className="w-full bg-[#F5F6F8] py-24 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-0 flex flex-col gap-[60px]">

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5"
        >
          <p className="text-sm text-[#1F2740]/70">Услуги</p>

          <h1 className="text-[48px] md:text-[72px] leading-[1.05] font-semibold text-[#1F2740] max-w-[700px]">
            Мы помогаем в организации Вашего мероприятия
          </h1>
        </motion.div>

        {/* LIST */}
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.05,
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-[100px_280px_1fr] gap-10 py-10 border-b border-[#D7D9E0]"
          >
            {/* NUMBER */}
            <div className="w-[64px] h-[64px] rounded-full border border-[#1F2740]/20 flex items-center justify-center text-[#1F2740] font-medium">
              {item.id}
            </div>

            {/* TITLE */}
            <h3 className="text-[28px] font-semibold text-[#1F2740]">
              {item.title}
            </h3>

            {/* RIGHT */}
            <div className="flex flex-col gap-6">
              <p className="text-lg leading-[1.8] text-[#1F2740]/75 max-w-[560px]">
                {item.text}
              </p>

              {item.image && (
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  src={item.image}
                  alt=""
                  className="w-full max-w-[520px] h-[280px] object-cover"
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}