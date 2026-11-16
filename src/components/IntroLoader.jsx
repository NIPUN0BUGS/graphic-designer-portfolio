import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const id = window.setTimeout(() => setShow(false), 1450);
    return () => window.clearTimeout(id);
  }, []);
  return <AnimatePresence>
    {show && <motion.div className="intro-loader" initial={{ opacity: 1 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: .55 }}>
      <motion.div className="intro-mark" initial={{ scale: .65, rotate: -18, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 180, damping: 14 }}>
        N<span>.</span>
      </motion.div>
      <motion.div className="intro-line" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: .35, duration: .6 }} />
      <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .45 }}>NIPUN SAMARAKOON · CREATIVE PORTFOLIO</motion.p>
    </motion.div>}
  </AnimatePresence>;
}