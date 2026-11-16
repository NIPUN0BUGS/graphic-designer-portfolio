import { motion } from "motion/react";
import AnimatedSection from "./AnimatedSection.jsx";

export default function About() {
  return <AnimatedSection className="about-section" id="about"><div className="section-wrap about-layout">
    <div><div className="eyebrow"><span className="eyebrow-line" /> A LITTLE ABOUT ME</div><div className="about-big">Design is<br />how ideas<br /><span className="gradient-text">connect.</span></div></div>
    <div className="about-content"><p className="about-intro">I'm <strong>Nipun Samarakoon</strong>, a creative designer focused on making clear, engaging and memorable visual content.</p><p>I enjoy turning ideas into designs that communicate a message — from promotional posters and social media campaigns to education-focused graphics and brand visuals. I value strong composition, purposeful colour and typography that makes every design easy to understand.</p>
      <div className="stats-row">{[["12+", "Featured visuals"], ["05+", "Creative categories"], ["01", "Goal: make it memorable"]].map(([n, label], i) => <motion.div key={label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .15 }}><strong>{n}</strong><small>{label}</small></motion.div>)}</div>
    </div>
  </div></AnimatedSection>;
}