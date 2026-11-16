import { useState } from "react";
import { motion } from "motion/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["Work", "#work"], ["About", "#about"], ["Services", "#services"], ["Contact", "#contact"]];
  return <motion.header className="site-header" initial={{ y: -70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .7 }}>
    <a className="brand" href="#home"><span className="brand-mark">N<span>.</span></span><span className="brand-name">NIPUN<span> SAMARAKOON</span></span></a>
    <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
    <div className="header-contact"><a href="tel:+94761011631">+94 76 1011 631</a><a href="mailto:nipunsanjulasamarakoon@gmail.com">Email</a><a href="https://www.linkedin.com/in/nipun-samarakoon-bb812b203/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>\n    <nav className={open ? "nav-links open" : "nav-links"}>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>
  </motion.header>;
}