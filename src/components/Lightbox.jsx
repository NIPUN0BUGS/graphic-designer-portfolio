import { AnimatePresence, motion } from "motion/react";

export default function Lightbox({ project, onClose }) {
  return <AnimatePresence>{project && <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label={project.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
    <motion.button className="lightbox-close" onClick={onClose} aria-label="Close preview">×</motion.button>
    <motion.img src={project.image} alt={project.title} initial={{ scale: .88, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .9 }} transition={{ duration: .3 }} onClick={e => e.stopPropagation()} />
    <p>{project.title}</p>
  </motion.div>}</AnimatePresence>;
}