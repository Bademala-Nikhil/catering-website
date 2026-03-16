import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header({ dark = false }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const textColor = dark ? "text-[#1F2740]" : "text-white";
  const softText = dark ? "text-[#1F2740]/80" : "text-white/80";
  const softText2 = dark ? "text-[#1F2740]/90" : "text-white/90";
  const hoverColor = dark ? "hover:text-[#1F2740]/70" : "hover:text-white/80";

  // ONE BY ONE LEFT ANIMATION
  const itemVariant = {
    hidden: {
      opacity: 0,
      x: -60,
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.35,
        duration: 0.9,
        ease: "easeOut",
      },
    }),
  };

  return (
    <header className="absolute top-4 sm:top-6 lg:top-8 left-0 w-full z-50">
      <div className="w-full max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-0">

        {/* TOP ROW */}
        <div className="flex justify-between items-start min-h-[77px]">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-between h-full">

            {/* SMALL TEXT FIRST */}
            <motion.p
              custom={0}
              variants={itemVariant}
              initial="hidden"
              animate="visible"
              className={`text-[11px] sm:text-[13px] lg:text-[14px] leading-[14px] ${softText}`}
            >
              Лучший кейтеринг в Санкт-Петербурге
            </motion.p>

            {/* LOGO SECOND */}
            <motion.div
              custom={1}
              variants={itemVariant}
              initial="hidden"
              animate="visible"
            >
              <Link to="/">
                <h1
                  className={`text-[28px] sm:text-[34px] lg:text-[42px] leading-none font-light tracking-[0.18em] cursor-pointer ${textColor}`}
                >
                  NORDIC
                </h1>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-between h-full">

            {/* CONTACTS */}
            <div className={`hidden md:flex justify-end gap-4 lg:gap-8 text-[13px] lg:text-[14px] ${softText2}`}>

              <motion.span
                custom={2}
                variants={itemVariant}
                initial="hidden"
                animate="visible"
              >
                +7 921 123 45 67
              </motion.span>

              <motion.span
                custom={3}
                variants={itemVariant}
                initial="hidden"
                animate="visible"
              >
                contact@nordic-c.ru
              </motion.span>
            </div>

            {/* DESKTOP MENU */}
            <nav className={`hidden lg:flex gap-8 xl:gap-10 text-[17px] xl:text-[18px] relative mt-3 ${textColor}`}>

              {/* MENU 1 */}
              <motion.div
                custom={4}
                variants={itemVariant}
                initial="hidden"
                animate="visible"
                className="relative flex items-center gap-1"
              >
                <Link to="/" className={`transition ${hoverColor}`}>
                  Вид кейтеринга
                </Link>

                <button onClick={() => setOpenMenu(!openMenu)}>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      openMenu ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* SUBMENU */}
                <AnimatePresence>
                  {openMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      className="absolute top-10 left-0 bg-white rounded-xl shadow-2xl min-w-[250px] py-3"
                    >
                      {[
                        "Выездной фуршет",
                        "Кофе-брейк",
                        "Гастрономический ужин",
                        "Фуршет",
                      ].map((menu, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.12 }}
                        >
                          <Link
                            to="/buffet"
                            className="block px-5 py-3 text-[#1F2740] hover:bg-gray-100"
                          >
                            {menu}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* OTHER MENUS */}
              {[
                "События",
                "Площадки",
                "Услуги",
                "О компании",
              ].map((menu, index) => (
                <motion.div
                  key={index}
                  custom={index + 5}
                  variants={itemVariant}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    to="/"
                    className={`flex items-center gap-1 transition ${hoverColor}`}
                  >
                    <span>{menu}</span>
                    {menu !== "Услуги" && <ChevronDown size={16} />}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* MOBILE BUTTON */}
            <motion.button
              custom={9}
              variants={itemVariant}
              initial="hidden"
              animate="visible"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden mt-3 self-end ${textColor}`}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className={`lg:hidden mt-5 rounded-2xl p-6 flex flex-col gap-5 ${
                dark
                  ? "bg-white shadow-xl text-[#1F2740]"
                  : "bg-black/90 backdrop-blur-lg text-white"
              }`}
            >
              {[
                "Главная",
                "Выездной фуршет",
                "Кофе-брейк",
                "Гастрономический ужин",
                "События",
                "Площадки",
                "Услуги",
                "О компании",
              ].map((menu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.7,
                  }}
                >
                  <Link to="/">{menu}</Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}