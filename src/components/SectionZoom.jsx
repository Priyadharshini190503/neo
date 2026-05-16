import { motion } from "framer-motion";

const SectionZoom = ({ children }) => {
  return (
    <>
      {/* ✅ DESKTOP — snap + animation */}
      <section className="hidden md:flex h-screen w-full snap-start overflow-hidden items-center">
        <motion.div
          className="w-full h-full"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.6 }}
        >
          {children}
        </motion.div>
      </section>

      {/* ✅ MOBILE — normal scroll, no animation */}
      <section className="block md:hidden w-full">
        {children}
      </section>
    </>
  );
};

export default SectionZoom;
