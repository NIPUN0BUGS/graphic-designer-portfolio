import { motion } from "motion/react";
import AnimatedSection from "./AnimatedSection.jsx";

const tools = ["Canva", "CorelDRAW", "Figma", "Adobe Photoshop", "Adobe Illustrator"];
const designWork = ["Logos & brand visuals", "Social media creatives", "Posters & leaflets", "Visiting & wedding cards", "Certificates & promotional materials"];

export default function About() {
  return <AnimatedSection className="about-section" id="about">
    <div className="section-wrap about-layout">
      <div>
        <div className="eyebrow"><span className="eyebrow-line" /> GET TO KNOW ME</div>
        <div className="about-big">A creative<br />mind with a<br /><span className="gradient-text">technical edge.</span></div>
        <div className="about-signature">NIPUN SAMARAKOON <span>· GRAPHIC DESIGNER</span></div>
      </div>
      <div className="about-content">
        <p className="about-intro">Hello, I'm <strong>Nipun Samarakoon</strong> — a freelance graphic designer with a background in Software Engineering.</p>
        <p>I enjoy turning ideas into clear, engaging visuals that help people and businesses communicate. Through my creative work with C Creations, I've worked on a range of design materials, including logos, social media posts, visiting cards, posters, leaflets, wedding cards and certificates.</p>
        <p>My software engineering background brings a problem-solving mindset to my design process. I pay attention to layout, colour, typography and the small details that make a design both attractive and easy to understand.</p>
        <div className="about-detail-block">
          <h3>WHAT I WORK ON</h3>
          <div className="about-work-list">{designWork.map((item, i) => <motion.span key={item} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .07 }}><span>↗</span>{item}</motion.span>)}</div>
        </div>
        <div className="about-detail-block">
          <h3>TOOLS I USE</h3>
          <div className="skill-tags">{tools.map((tool, i) => <motion.span key={tool} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}>{tool}</motion.span>)}</div>
        </div>
        <div className="about-availability"><span className="status-dot" /> Based in Sri Lanka · Open to freelance projects and creative opportunities</div>
      </div>
    </div>
  </AnimatedSection>;
}
