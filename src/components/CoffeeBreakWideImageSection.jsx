import { motion } from "framer-motion";
import pieImage from "../assets/coffee-wide.png";

export default function CoffeeBreakWideImageSection() {
  return (
    <section className="w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-full h-[320px] md:h-[480px] lg:h-[620px]"
      >
        <img
          src={pieImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}