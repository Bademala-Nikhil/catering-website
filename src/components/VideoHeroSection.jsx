import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import chefImage from "../assets/chef-vedio.png";

export default function VideoHeroSection() {
  const [muted, setMuted] = useState(true);

  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] lg:h-screen overflow-hidden bg-black">

      {/* BACKGROUND IMAGE CINEMATIC MOTION */}
      <motion.img
        src={chefImage}
        alt="Chef cinematic"
        initial={{
          scale: 1.12,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        animate={{
          y: [0, -12, 0],
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* MOVING OVERLAY */}
      <motion.div
        animate={{
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-black"
      />

      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>

      {/* VOLUME BUTTON */}
      <motion.button
        onClick={() => setMuted(!muted)}
        initial={{
          opacity: 0,
          scale: 0.8,
          x: -30,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.4,
        }}
        animate={{
          y: [0, -6, 0],
        }}
        whileHover={{
          scale: 1.08,
        }}
        className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 lg:bottom-[60px] lg:left-[60px] w-[68px] h-[68px] sm:w-[82px] sm:h-[82px] lg:w-[100px] lg:h-[100px] rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 z-20"
      >
        {muted ? (
          <VolumeX className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9 text-white" />
        ) : (
          <Volume2 className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9 text-white" />
        )}
      </motion.button>
    </section>
  );
}