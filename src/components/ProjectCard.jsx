import { motion } from "motion/react";

export default function ProjectCard({ project, index, onOpen }) {
  return <motion.article className={project.featured ? "project-card project-large" : "project-card"} layout initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .08 }} transition={{ duration: .55, delay: (index % 4) * .07 }}>
    <button className="project-image" onClick={() => onOpen(project)} aria-label={"Preview " + project.title}>
      <img src={project.image} alt={project.title} loading="lazy" />
      <span className="view-icon">↗</span><span className="image-overlay">{project.title}</span>
    </button>
    <div className="project-info"><div><h3>{project.title}</h3><p>{project.type}</p></div><span className="project-number">{String(project.id).padStart(2, "0")}</span></div>
  </motion.article>;
}