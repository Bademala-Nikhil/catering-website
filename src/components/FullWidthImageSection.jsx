import { motion } from "framer-motion";
import buffetWideImage from "../assets/buffet-wide.png";

export default function FullWidthImageSection() {
  return (
    <section className="w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4 }}
        viewport={{ once: true }}
        className="w-full h-[620px]"
      >
        <img
          src={buffetWideImage}
          alt="Buffet setup"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}