import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import mediaBg from "../assets/media-bg.png";

export default function MediaQuoteSection() {
  return (
    <section className="relative w-full h-[741px] overflow-hidden">

      {/* BACKGROUND */}
      <motion.img
        src={mediaBg}
        alt="Media background"
        initial={{ scale: 1.08, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4 }}
        viewport={{ once: true }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative max-w-[1440px] mx-auto h-full px-6 lg:px-[130px] flex flex-col justify-center">

        {/* LEFT SMALL LABEL */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 0.85, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute top-[140px] left-[130px] text-sm text-white/80"
        >
          СМИ о нас
        </motion.p>

        {/* TEXT GROUP */}
        <div className="max-w-[872px] ml-auto mr-[138px]">

          {/* QUOTE ICON */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white text-[72px] leading-none"
          >
            “
          </motion.div>

          {/* MAIN TEXT */}
          <motion.h2
            initial={{ opacity: 0, scaleX: 0.8 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-[42px] md:text-[64px] leading-[1.15] font-semibold text-white -mt-4"
          >
            Ресторан Nordic подготовил дегустационный сет, в котором вкус новой северной кухни обогащен нюансами гастрономических традиций Азии, Африки и Америки....
          </motion.h2>

          {/* FORBES */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-[64px] font-serif font-bold text-white"
          >
            Forbes
          </motion.div>
        </div>

        {/* ARROWS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-[160px] right-[130px] flex gap-2"
        >
          <button className="w-[68px] h-[68px] rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition">
            <ChevronLeft size={28} />
          </button>

          <button className="w-[68px] h-[68px] rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition">
            <ChevronRight size={28} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}