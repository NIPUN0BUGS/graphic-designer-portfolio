import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import MagneticLink from "./MagneticLink.jsx";
const heroWorks=[
{image:"/assets/Firefly_Gemini Flash_Create a modern --Sinhala social media post-- for an --Assignment Helper service-- ta 308827.png",alt:"Assignment guidance promotional design"},
{image:"/assets/Aurudu.jpg",alt:"Sinhala New Year campaign artwork"},
{image:"/assets/April c group.jpg",alt:"C Group promotional artwork"},
{image:"/assets/ardrud post.jpg",alt:"Avurudu event poster design"},
{image:"/assets/dp.jpg",alt:"DP Education promotional design"},
{image:"/assets/Turn Ideas into Visual Mind Maps.png",alt:"Visual mind map design"},
{image:"/assets/Designer (1).png",alt:"Graphic design portfolio artwork"}];
function KineticLine({text,className="",delay=0}){return <span className={"kinetic-line "+className} aria-label={text}>{text.split("").map((char,i)=><motion.span aria-hidden="true" key={i} initial={{opacity:0,y:75,rotateX:-70}} animate={{opacity:1,y:0,rotateX:0}} transition={{duration:.65,delay:delay+i*.035,ease:[.22,1,.36,1]}}>{char===" "?"\u00a0":char}</motion.span>)}</span>}
export default function Hero(){
const [activeWork,setActiveWork]=useState(0);const reduceMotion=useReducedMotion();
useEffect(()=>{if(reduceMotion)return;const timer=window.setInterval(()=>setActiveWork(v=>(v+1)%heroWorks.length),4500);return()=>window.clearInterval(timer)},[reduceMotion]);
const front=heroWorks[activeWork],back=heroWorks[(activeWork+1)%heroWorks.length];
return <section className="hero section-wrap" id="home"><div className="hero-copy">
<motion.div className="eyebrow" initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{delay:.2}}><span className="eyebrow-line"/> GRAPHIC DESIGNER · SRI LANKA</motion.div>
<h1><KineticLine text="Ideas made" delay={.25}/><KineticLine text="visual." className="gradient-text" delay={.55}/></h1>
<motion.div className="hero-about" initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:.88,duration:.55}}><span className="hero-about-label">ABOUT ME</span><p>I’m <strong>Nipun Samarakoon</strong> — a freelance graphic designer with a Software Engineering background. I turn ideas into clear, engaging visuals for brands and businesses.</p></motion.div>
<motion.p className="hero-lead" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.05}}>I create eye-catching graphic designs that help brands, businesses and ideas stand out.</motion.p>
<motion.div className="hero-actions" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:1.2}}><MagneticLink className="button button-primary" href="#work">Explore my work <span>↘</span></MagneticLink><MagneticLink className="text-link" href="#contact">Get in touch ↗</MagneticLink><MagneticLink className="text-link" href="https://github.com/NIPUN0BUGS" target="_blank" rel="noreferrer">GitHub ↗</MagneticLink></motion.div>
<div className="hero-meta"><span className="status-dot"/> Available for opportunities & freelance projects</div></div>
<div className="hero-art"><motion.div className="art-orbit" animate={reduceMotion ? undefined : {rotate:360}} transition={{duration:60,repeat:Infinity,ease:"linear"}}/>
<AnimatePresence mode="wait"><motion.div key={back.image} className="art-frame art-frame-back" initial={{opacity:0,x:35,rotate:10,scale:.96}} animate={{opacity:.82,x:0,rotate:5,scale:1}} exit={{opacity:0,x:-25,rotate:-2,scale:.96}} transition={{duration:.75,ease:[.22,1,.36,1]}}><img src={back.image} alt={back.alt} loading="lazy" decoding="async"/></motion.div></AnimatePresence>
<AnimatePresence mode="wait"><motion.div key={front.image} className="art-frame art-frame-front" initial={{opacity:0,x:45,y:20,rotate:5,scale:.94}} animate={{opacity:1,x:0,y:0,rotate:-5,scale:1}} exit={{opacity:0,x:-35,y:-10,rotate:-12,scale:.94}} transition={{duration:.8,ease:[.22,1,.36,1]}}><img src={front.image} alt={front.alt} fetchPriority="high" decoding="async"/></motion.div></AnimatePresence>
<motion.div className="art-sticker" animate={reduceMotion ? undefined : {y:[0,-6,0],rotate:[9,11,9]}} transition={{duration:7,repeat:Infinity,ease:"easeInOut"}}><span>DESIGN</span><strong>WITH<br/>IMPACT.</strong><i>✳</i></motion.div><div className="art-caption">SELECTED CREATIVE WORKS <span>2020 — 2026</span></div></div>
<div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line"/><span>{String(activeWork+1).padStart(2,"0")} / {String(heroWorks.length).padStart(2,"0")}</span></div></section>}
