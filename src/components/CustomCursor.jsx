import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 38 });
  const sy = useSpring(y, { stiffness: 500, damping: 38 });
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;
    const move = e => { x.set(e.clientX); y.set(e.clientY); };
    const over = e => setHovering(Boolean(e.target.closest("a,button,[data-cursor]")));
    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", over);
    return () => { window.removeEventListener("pointermove", move); document.removeEventListener("pointerover", over); };
  }, [x,y]);
  if (!enabled) return null;
  return <motion.div className={hovering ? "custom-cursor is-hovering" : "custom-cursor"} style={{ x: sx, y: sy }}><span>{hovering ? "VIEW" : ""}</span></motion.div>;
}