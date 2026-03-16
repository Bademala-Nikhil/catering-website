import { motion } from "framer-motion";
import heroBg from "../assets/hero.jpg";
import Header from "./Header";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* BACKGROUND IMAGE ZOOM */}
      <motion.img
        src={heroBg}
        alt="Nordic Catering"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 8,
          ease: "easeOut",
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* HEADER */}
      <Header />

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-[130px] pt-[240px] pb-20">

        <div className="flex flex-col lg:flex-row justify-between items-start">

          {/* LEFT CONTENT */}
          <div className="max-w-[870px]">

            {/* SMALL TEXT */}
            <motion.p
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 1,
                duration: 1,
              }}
              className="text-white/80 text-lg mb-5"
            >
              Добро пожаловать
            </motion.p>

            {/* MAIN TITLE INNER TO WIDE */}
            <motion.h2
              initial={{
                opacity: 0,
                letterSpacing: "-0.08em",
                scaleX: 0.88,
              }}
              animate={{
                opacity: 1,
                letterSpacing: "0em",
                scaleX: 1,
              }}
              transition={{
                delay: 1.3,
                duration: 1.4,
                ease: "easeOut",
              }}
              className="text-4xl md:text-6xl lg:text-[78px] leading-tight font-medium text-white origin-left"
            >
              Безупречный кейтеринг <br />
              на Вашем мероприятии
            </motion.h2>

            {/* PARAGRAPH */}
            <motion.p
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.8,
                duration: 1,
              }}
              className="text-white/80 text-lg md:text-xl mt-8 max-w-[620px] leading-relaxed"
            >
              От грандиозных свадеб до камерных Дней Рождений - мы обеспечим
              первоклассное обслуживание и неповторимую кухню от ресторана Nordic.
            </motion.p>
          </div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 70,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 2,
              duration: 1,
            }}
            className="mt-16 lg:mt-36 flex flex-col items-start lg:items-center gap-10"
          >

            {/* BADGE */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 2.2,
                duration: 0.9,
              }}
              className="text-center text-white"
            >
              <p className="text-pink-500 font-semibold text-2xl">
                TOP 50
              </p>

              <p className="text-4xl font-bold">
                where <span className="text-pink-500">TO</span>EAT
              </p>
            </motion.div>

            {/* BUTTON */}
            <motion.button
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 2.5,
                duration: 0.9,
              }}
              whileHover={{
                scale: 1.06,
              }}
              className="bg-white text-black px-12 py-5 text-lg font-medium transition-all duration-300"
            >
              Оставить заявку
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}