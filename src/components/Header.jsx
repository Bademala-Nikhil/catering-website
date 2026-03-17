import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header({ dark = false }) {
  const [desktopCatering, setDesktopCatering] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCatering, setMobileCatering] = useState(false);

  const textColor = dark ? "text-[#1F2740]" : "text-white";
  const softText = dark ? "text-[#1F2740]/80" : "text-white/80";
  const softText2 = dark ? "text-[#1F2740]/90" : "text-white/90";
  const hoverColor = dark ? "hover:text-[#1F2740]/70" : "hover:text-white/80";

  const itemVariant = {
    hidden: {
      opacity: 0,
      x: -60,
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.25,
        duration: 0.8,
      },
    }),
  };

  const cateringMenus = [
    { title: "Выездной фуршет", path: "/buffet" },
    { title: "Кофе-брейк", path: "/coffee-break" },
    { title: "Гастрономический ужин", path: "/fine-dining" },
  ];

  return (
    <header className="absolute top-4 sm:top-6 lg:top-8 left-0 w-full z-50">
      <div className="w-full max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-0">

        <div className="flex justify-between items-start min-h-[77px]">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-between h-full">
            <motion.p
              custom={0}
              variants={itemVariant}
              initial="hidden"
              animate="visible"
              className={`text-[11px] sm:text-[13px] lg:text-[14px] ${softText}`}
            >
              Лучший кейтеринг в Санкт-Петербурге
            </motion.p>

            <motion.div
              custom={1}
              variants={itemVariant}
              initial="hidden"
              animate="visible"
            >
              <Link to="/">
                <h1 className={`text-[28px] sm:text-[34px] lg:text-[42px] font-light tracking-[0.18em] ${textColor}`}>
                  NORDIC
                </h1>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-between h-full">

            {/* CONTACT */}
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
            <nav className={`hidden lg:flex gap-8 xl:gap-10 text-[17px] xl:text-[18px] mt-3 ${textColor}`}>

              {/* CATERING */}
              <motion.div
                custom={4}
                variants={itemVariant}
                initial="hidden"
                animate="visible"
                className="relative flex items-center gap-1"
              >
                <button
                  onClick={() => setDesktopCatering(!desktopCatering)}
                  className={`flex items-center gap-1 ${hoverColor}`}
                >
                  <span>Вид кейтеринга</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      desktopCatering ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {desktopCatering && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      className="absolute top-10 left-0 bg-white rounded-xl shadow-2xl min-w-[250px] py-3 z-50"
                    >
                      {cateringMenus.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                        >
                          <Link
                            to={item.path}
                            onClick={() => setDesktopCatering(false)}
                            className="block px-5 py-3 text-[#1F2740] hover:bg-gray-100"
                          >
                            {item.title}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* DIRECT LINKS */}
              <motion.div custom={5} variants={itemVariant} initial="hidden" animate="visible">
                <Link to="/events" className={hoverColor}>
                  События
                </Link>
              </motion.div>

              <motion.div custom={6} variants={itemVariant} initial="hidden" animate="visible">
                <Link to="/venues" className={hoverColor}>
                  Площадки
                </Link>
              </motion.div>

              <motion.div custom={7} variants={itemVariant} initial="hidden" animate="visible">
                <Link to="/services" className={hoverColor}>
                  Услуги
                </Link>
              </motion.div>

              <motion.div custom={8} variants={itemVariant} initial="hidden" animate="visible">
                <Link to="/catering" className={hoverColor}>
                  О компании
                </Link>
              </motion.div>
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
              <Link to="/" onClick={() => setMobileOpen(false)}>
                Главная
              </Link>

              {/* MOBILE CATERING */}
              <button
                onClick={() => setMobileCatering(!mobileCatering)}
                className="flex justify-between items-center w-full"
              >
                <span>Вид кейтеринга</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    mobileCatering ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {mobileCatering && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 flex flex-col gap-3 overflow-hidden"
                  >
                    {cateringMenus.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileCatering(false);
                          }}
                        >
                          {item.title}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link to="/events" onClick={() => setMobileOpen(false)}>
                События
              </Link>

              <Link to="/venues" onClick={() => setMobileOpen(false)}>
                Площадки
              </Link>

              <Link to="/services" onClick={() => setMobileOpen(false)}>
                Услуги
              </Link>

              <Link to="/catering" onClick={() => setMobileOpen(false)}>
                О компании
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}