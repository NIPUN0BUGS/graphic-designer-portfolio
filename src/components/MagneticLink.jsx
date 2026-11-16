import { motion, useMotionValue, useSpring } from "motion/react";

export default function MagneticLink({ children, className = "", href = "#contact" }) {
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 16 });
  const sy = useSpring(y, { stiffness: 260, damping: 16 });
  const move = e => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * .18);
    y.set((e.clientY - r.top - r.height / 2) * .22);
  };
  const reset = () => { x.set(0); y.set(0); };
  return <motion.a href={href} className={className} style={{ x: sx, y: sy }} onPointerMove={move} onPointerLeave={reset}>{children}</motion.a>;
}