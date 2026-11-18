import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Portfolio from "./components/Portfolio.jsx";
import SoftwareProjects from "./components/SoftwareProjects.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Lightbox from "./components/Lightbox.jsx";
import IntroLoader from "./components/IntroLoader.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import VideoShowcase from "./components/VideoShowcase.jsx";
import Testimonials from "./components/Testimonials.jsx";

export default function App() {
  const [selected, setSelected] = useState(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: .001 });
  useEffect(() => {
    const onKey = e => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return <>
    <IntroLoader />
    <CustomCursor />
    <motion.div className="scroll-progress" style={{ scaleX }} />
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <Navbar />
    <main><Hero /><About /><Portfolio onOpen={setSelected} /><SoftwareProjects /><VideoShowcase /><Testimonials /><Services /><Contact /></main>
    <Footer />
    <Lightbox project={selected} onClose={() => setSelected(null)} />
  </>;
}