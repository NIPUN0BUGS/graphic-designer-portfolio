import { motion } from "motion/react";

export default function Hero() {
  return <section className="hero section-wrap" id="home">
    <div className="hero-copy">
      <motion.div className="eyebrow" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .2 }}> <span className="eyebrow-line" /> GRAPHIC DESIGNER · SRI LANKA</motion.div>
      <h1><motion.span className="headline-line" initial={{ y: 90, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .8, delay: .25 }}>Ideas made</motion.span><motion.span className="gradient-text headline-line" initial={{ y: 90, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .85, delay: .4 }}>visual.</motion.span></h1>
      <motion.p className="hero-lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }}>I create eye-catching graphic designs that help brands, businesses and ideas stand out.</motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}><a className="button button-primary" href="#work">Explore my work <span>↘</span></a><a className="text-link" href="#contact">Get in touch ↗</a></motion.div>
      <div className="hero-meta"><span className="status-dot" /> Available for opportunities & freelance projects</div>
    </div>
    <div className="hero-art">
      <motion.div className="art-orbit" animate={{ rotate: 360 }} transition={{ duration: 38, repeat: Infinity, ease: "linear" }} />
      <motion.div className="art-frame art-frame-back" animate={{ y: [0, -13, 0], rotate: [5, 7, 5] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}><img src="/assets/Aurudu.jpg" alt="Sinhala New Year campaign artwork" /></motion.div>
      <motion.div className="art-frame art-frame-front" initial={{ opacity: 0, rotate: -13, scale: .9 }} animate={{ opacity: 1, rotate: -5, scale: 1 }} transition={{ duration: 1, delay: .45 }}><img src="/assets/Firefly_Gemini Flash_Create a modern --Sinhala social media post-- for an --Assignment Helper service-- ta 308827.png" alt="Assignment helper promotional artwork" /></motion.div>
      <motion.div className="art-sticker" animate={{ y: [0, -10, 0], rotate: [9, 13, 9] }} transition={{ duration: 5, repeat: Infinity }}><span>DESIGN</span><strong>WITH<br />IMPACT.</strong><i>✳</i></motion.div>
      <div className="art-caption">SELECTED CREATIVE WORKS <span>2025 — 2026</span></div>
    </div>
    <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>01 / 04</span></div>
  </section>;
}