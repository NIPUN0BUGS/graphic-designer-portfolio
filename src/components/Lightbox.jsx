import { AnimatePresence, motion } from "motion/react";

export default function Lightbox({ project, onClose }) {
  if (!project) return null;
  const categories = Array.isArray(project.category) ? project.category : [];
  return <AnimatePresence>
    {project && <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label={project.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.button className="lightbox-close" onClick={onClose} aria-label="Close preview">×</motion.button>
      <motion.div className="case-study-panel" initial={{ opacity: 0, y: 18, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: .24 }} onClick={e => e.stopPropagation()}>
        <div className="case-study-image"><img src={project.image} alt={project.title} /></div>
        <div className="case-study-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> SELECTED PROJECT · {String(project.id).padStart(2, "0")}</div>
          <h2>{project.title}</h2>
          <p className="case-study-type">{project.type}</p>
          <div className="case-study-block"><span>PROJECT OVERVIEW</span><p>A selected piece from my graphic design portfolio, presented as part of my creative work from 2020–2026.</p></div>
          <div className="case-study-tags">{categories.map(category => <span key={category}>{category}</span>)}</div>
          <p className="case-study-note">Want a design in a similar direction? <a href="#contact" onClick={onClose}>Let's discuss your project ↗</a></p>
        </div>
      </motion.div>
    </motion.div>}
  </AnimatePresence>;
}
