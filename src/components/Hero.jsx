import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const heroWorks = [
  { image: "/assets/Firefly_Gemini Flash_Create a modern --Sinhala social media post-- for an --Assignment Helper service-- ta 308827.png", alt: "Assignment guidance promotional design" },
  { image: "/assets/Aurudu.jpg", alt: "Sinhala New Year campaign artwork" },
  { image: "/assets/April c group.jpg", alt: "C Group promotional artwork" },
  { image: "/assets/ardrud post.jpg", alt: "Avurudu event poster design" },
  { image: "/assets/dp.jpg", alt: "DP Education promotional design" },
  { image: "/assets/Turn Ideas into Visual Mind Maps.png", alt: "Visual mind map design" },
  { image: "/assets/Designer (1).png", alt: "Graphic design portfolio artwork" }
];

export default function Hero() {
  const [activeWork, setActiveWork] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setActiveWork(current => (current + 1) % heroWorks.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const frontWork = heroWorks[activeWork];
  const backWork = heroWorks[(activeWork + 1) % heroWorks.length];

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
      <AnimatePresence mode="wait">
        <motion.div key={backWork.image} className="art-frame art-frame-back"
          initial={{ opacity: 0, x: 35, rotate: 10, scale: .96 }}
          animate={{ opacity: .82, x: 0, rotate: 5, scale: 1 }}
          exit={{ opacity: 0, x: -25, rotate: -2, scale: .96 }}
          transition={{ duration: .75, ease: [0.22, 1, 0.36, 1] }}>
          <img src={backWork.image} alt={backWork.alt} />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div key={frontWork.image} className="art-frame art-frame-front"
          initial={{ opacity: 0, x: 45, y: 20, rotate: 5, scale: .94 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: -5, scale: 1 }}
          exit={{ opacity: 0, x: -35, y: -10, rotate: -12, scale: .94 }}
          transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}>
          <img src={frontWork.image} alt={frontWork.alt} />
        </motion.div>
      </AnimatePresence>
      <motion.div className="art-sticker" animate={{ y: [0, -10, 0], rotate: [9, 13, 9] }} transition={{ duration: 5, repeat: Infinity }}><span>DESIGN</span><strong>WITH<br />IMPACT.</strong><i>✳</i></motion.div>
      <div className="art-caption">SELECTED CREATIVE WORKS <span>2025 — 2026</span></div>
    </div>
    <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>{String(activeWork + 1).padStart(2, "0")} / {String(heroWorks.length).padStart(2, "0")}</span></div>
  </section>;
}
