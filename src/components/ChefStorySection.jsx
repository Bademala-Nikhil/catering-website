import { motion } from "framer-motion";
import chefImage from "../assets/chef.png";
import { Quote } from "lucide-react";

export default function ChefStorySection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1187px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-[100px] items-center lg:items-start">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -70, scale: 0.92 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="w-full sm:w-[80%] md:w-[70%] lg:w-[480px] h-[420px] sm:h-[520px] lg:h-[620px] overflow-hidden"
        >
          <motion.img
            src={chefImage}
            alt="Chef"
            className="w-full h-full object-cover"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-[607px] min-h-[420px] lg:min-h-[620px] flex flex-col justify-between">

          {/* TOP SECTION */}
          <div>

            {/* QUOTE ICON */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -6, 0],
              }}
              className="w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] rounded-full border border-[#1F2740] flex items-center justify-center mb-8 sm:mb-10 lg:mb-14"
            >
              <Quote className="text-[#1F2740] w-6 h-6 sm:w-7 sm:h-7" />
            </motion.div>

            {/* MAIN TEXT */}
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1 }}
              viewport={{ once: true }}
              className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] leading-[1.4] font-semibold text-[#1F2740]"
            >
              Мы почувствовали, что должны снова бросить себе вызов:
              ресторан Nordic завоевал признание многих гостей, а значит
              настало время удивлять их чаще, выезжая с кейтерингом на
              разные мероприятия, наша кухня - это настоящая феерия вкусов,
              праздник для всех любителей гастрономических приключений
            </motion.p>
          </div>

          {/* BOTTOM GROUP */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2 mt-8 sm:mt-10 lg:mt-0"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-[#1F2740]/70"
            >
              Шеф-повар ресторана
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              viewport={{ once: true }}
              className="text-[28px] sm:text-[34px] lg:text-[38px] font-semibold text-[#1F2740] leading-none"
            >
              Игорь Васильев
            </motion.h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}