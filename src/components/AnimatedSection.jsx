import { motion } from "motion/react";

export default function AnimatedSection({ children, className = "", delay = 0, id }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}