import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

const filters = [["all", "All work"], ["advertising", "Advertising"], ["events", "Events & culture"], ["education", "Education"], ["branding", "Branding"]];

export default function Portfolio({ onOpen }) {
  const [active, setActive] = useState("all");
  const visible = useMemo(() => projects.filter(p => active === "all" || p.category.includes(active)), [active]);
  return <section className="work-section section-wrap" id="work">
    <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> THE PORTFOLIO</div><h2>Selected <span className="gradient-text">work.</span></h2></div><p>A selection of promotional graphics, event artwork and digital creatives. Explore the collection.</p></div>
    <div className="filters" role="group" aria-label="Filter projects">{filters.map(([key, label]) => <button key={key} className={active === key ? "filter active" : "filter"} onClick={() => setActive(key)}>{label}{key === "all" && <span>{projects.length}</span>}</button>)}</div>
    <motion.div className="project-grid" layout><AnimatePresence mode="popLayout">{visible.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpen={onOpen} />)}</AnimatePresence></motion.div>
    <div className="add-more-note"><span className="add-icon">＋</span><div><strong>The next project could be yours.</strong><p>This portfolio is designed to grow — new work will be added as the collection expands.</p></div></div>
  </section>;
}