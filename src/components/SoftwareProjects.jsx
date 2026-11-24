import { motion } from "motion/react";
import AnimatedSection from "./AnimatedSection.jsx";

const projects = [
  { number: "01", name: "RepRoute Health", type: "Healthcare web application", description: "A healthcare-focused demo experience showcasing patient-facing workflows and a conversational interface.", tags: ["Healthcare", "Web app", "Interactive demo"], url: "https://reproroute-health-demo.vercel.app/?utm_source=chatgpt.com#chat", action: "Explore live demo", accent: "health", mark: "✚" },
  { number: "02", name: "GuruPaper", type: "Education technology · SaaS", description: "A paper-creation platform designed for teachers, with a dedicated workspace for creating educational papers.", tags: ["EdTech", "Teacher tools", "SaaS"], url: "https://gurupaper.vercel.app/", action: "Open application", accent: "paper", mark: "✎" },
  { number: "03", name: "GuruPaper Admin", type: "Administration dashboard", description: "The companion admin interface for managing the GuruPaper platform.", tags: ["Admin dashboard", "Platform management"], url: "https://gurupaper.vercel.app/admin/", action: "Open admin panel", accent: "admin", mark: "▦" },
  { number: "04", name: "Bus Fare Calculator", type: "Transport utility · Web app", description: "A practical fare-calculation experience built around everyday public-transport needs.", tags: ["Transport", "Fare calculator", "Utility"], url: "https://bus-fare-pi.vercel.app/", action: "Try live calculator", accent: "transit", mark: "↗" }
];

export default function SoftwareProjects() {
  return <AnimatedSection className="software-section section-wrap" id="software">
    <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> SOFTWARE ENGINEERING & PRODUCT BUILDS</div><h2>Beyond design. <span className="gradient-text">I build.</span></h2></div><p>Selected live web applications and product experiences — from healthcare and education to practical everyday tools.</p></div>
    <div className="software-intro"><span className="software-live-dot" /> LIVE PROJECTS <span className="software-intro-line" /> <span>DESIGN · DEVELOPMENT · DEPLOYMENT</span></div>
    <div className="software-grid">{projects.map((project, index) => <motion.article className={`software-card software-${project.accent}`} key={project.number} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .55, delay: index * .08 }} whileHover={{ y: -7 }}>
      <div className="software-card-top"><span className="software-number">{project.number} / 04</span><span className="software-mark">{project.mark}</span></div>
      <div className="software-preview"><div className="software-preview-toolbar"><span><i/> LIVE UI PREVIEW</span><a href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} in a new tab`}>OPEN ↗</a></div><div className="software-iframe-wrap"><iframe src={project.url} title={`${project.name} live interface preview`} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads" /></div><div className="software-preview-overlay"><span>LIVE WEBSITE PREVIEW</span><a href={project.url} target="_blank" rel="noreferrer">Open full application ↗</a></div></div>
      <div className="software-card-copy"><span className="software-type">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p><div className="software-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="software-link" href={project.url} target="_blank" rel="noreferrer">{project.action} <span>↗</span></a></div>
    </motion.article>)}</div>
    <div className="software-footnote"><span>✳</span><p>Interested in both sides of the process? I bring a combination of visual design thinking and hands-on software development.</p><a href="#contact">Let's discuss a project ↗</a></div>
  </AnimatedSection>;
}
