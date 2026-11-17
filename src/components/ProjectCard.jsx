import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";

export default function ProjectCard({ project, index, onOpen }) {
  const reduceMotion = useReducedMotion();
  const rx = useMotionValue(0), ry = useMotionValue(0);
  const rotateX = useSpring(useTransform(ry, [-.5,.5], [7,-7]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(rx, [-.5,.5], [-8,8]), { stiffness: 220, damping: 22 });
  const move = e => { if (reduceMotion || e.pointerType !== "mouse") return; const r=e.currentTarget.getBoundingClientRect(); rx.set((e.clientX-r.left)/r.width-.5); ry.set((e.clientY-r.top)/r.height-.5); };
  const reset = () => { rx.set(0); ry.set(0); };
  return <motion.article className={project.featured ? "project-card project-large" : "project-card"} layout initial={{ opacity: 0, y: 36, rotateY: -5 }} whileInView={{ opacity: 1, y: 0, rotateY: 0 }} viewport={{ once: true, amount: .08 }} transition={{ duration: reduceMotion ? 0 : .45, delay: reduceMotion ? 0 : (index % 4) * .04 }}>
    <motion.button className="project-image" onClick={() => onOpen(project)} onPointerMove={move} onPointerLeave={reset} style={reduceMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }} aria-label={"Preview " + project.title} data-cursor>
      <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
      <span className="view-icon">↗</span><span className="image-overlay">{project.title}</span><span className="card-depth">OPEN PROJECT ↗</span>
    </motion.button>
    <div className="project-info"><div><h3>{project.title}</h3><p>{project.type}</p></div><span className="project-number">{String(project.id).padStart(2, "0")}</span></div>
  </motion.article>;
}