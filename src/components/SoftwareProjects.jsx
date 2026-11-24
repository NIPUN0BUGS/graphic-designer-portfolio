import { motion } from "motion/react";
import AnimatedSection from "./AnimatedSection.jsx";

const projects = [
  { number:"01", name:"RepRoute Health", type:"Healthcare web application", description:"A healthcare-focused demo experience showcasing patient-facing workflows and a conversational interface.", tags:["Healthcare","Web app","Interactive demo"], url:"https://reproroute-health-demo.vercel.app/?utm_source=chatgpt.com#chat", action:"Explore live demo", accent:"health", mark:"✚", preview:"health" },
  { number:"02", name:"GuruPaper", type:"Education technology · SaaS", description:"A paper-creation platform designed for teachers, with a dedicated workspace for creating educational papers.", tags:["EdTech","Teacher tools","SaaS"], url:"https://gurupaper.vercel.app/", action:"Open application", accent:"paper", mark:"✎", preview:"paper" },
  { number:"03", name:"GuruPaper Admin", type:"Administration dashboard", description:"The companion admin interface for managing the GuruPaper platform.", tags:["Admin dashboard","Platform management"], url:"https://gurupaper.vercel.app/admin/", action:"Open admin panel", accent:"admin", mark:"▦", preview:"admin" },
  { number:"04", name:"Bus Fare Calculator", type:"Transport utility · Web app", description:"A practical fare-calculation experience built around everyday public-transport needs.", tags:["Transport","Fare calculator","Utility"], url:"https://bus-fare-pi.vercel.app/", action:"Try live calculator", accent:"transit", mark:"↗", preview:"transit" }
];

function ProductPreview({ type, name }) {
  if (type === "health") return <div className="mock-ui mock-health">
    <aside><b>✚ RepRoute</b><small>OVERVIEW</small><i>Dashboard</i><i>Appointments</i><i>Messages</i><i>Health records</i></aside>
    <main><header><span>Good morning</span><b>Patient portal　 ●</b></header><h4>Your health, in one place.</h4><div className="mock-stats"><span><small>UPCOMING VISIT</small><b>Today, 10:30 AM</b></span><span><small>CARE TEAM</small><b>Available</b></span></div><div className="mock-chat"><b>Care assistant</b><p>How can I help you with your health journey today?</p><em>Type your message…　 ↗</em></div></main>
  </div>;
  if (type === "paper") return <div className="mock-ui mock-paper">
    <aside><b>GURU PAPER</b><small>WORKSPACE</small><i>▣　Dashboard</i><i>＋　Create paper</i><i>▤　My papers</i><i>⚙　Settings</i></aside>
    <main><header><span>Paper Studio / New paper</span><b>Save draft　 <strong>Preview ↗</strong></b></header><h4>Create a new question paper</h4><div className="mock-paper-form"><label>SUBJECT <b>Information & Communication Technology</b></label><div><label>GRADE <b>Grade 11　⌄</b></label><label>LANGUAGE <b>English　⌄</b></label></div><label>PAPER TITLE <b>Term Test – 2026</b></label><div className="mock-question"><b>＋　Add your first question</b><small>Choose a question type to get started</small></div></div></main>
  </div>;
  if (type === "admin") return <div className="mock-ui mock-admin">
    <aside><b>GP　ADMIN</b><small>MANAGEMENT</small><i>▦　Overview</i><i>♙　Teachers</i><i>▤　Papers</i><i>▥　Transactions</i><i>⚙　Settings</i></aside>
    <main><header><span>Platform overview</span><b>Admin　 ●</b></header><h4>Dashboard overview</h4><div className="mock-admin-stats"><span><small>TOTAL USERS</small><b>1,248</b><em>↗ Active platform</em></span><span><small>PAPERS CREATED</small><b>3,560</b><em>↗ This month</em></span><span><small>REVENUE</small><b>Rs. 86K</b><em>↗ Overview</em></span></div><div className="mock-chart"><b>Platform activity</b><div>{[32,52,43,70,55,82,62,91,68,78,57,96].map((h,i)=><i key={i} style={{height:h+"%"}}/>)}</div></div></main>
  </div>;
  return <div className="mock-ui mock-transit"><main><div className="mock-transit-brand">BUS FARE <b>CALCULATOR</b></div><h4>Find your bus fare</h4><p>Calculate your journey fare in a few steps.</p><label>FROM <b>Select starting point　⌄</b></label><label>TO <b>Select destination　⌄</b></label><label>BUS TYPE <b>Normal service　⌄</b></label><strong className="mock-calc">Calculate fare　→</strong></main></div>;
}

export default function SoftwareProjects() {
  return <AnimatedSection className="software-section section-wrap" id="software">
    <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> SOFTWARE ENGINEERING & PRODUCT BUILDS</div><h2>Beyond design. <span className="gradient-text">I build.</span></h2></div><p>Selected web applications and product experiences — from healthcare and education to practical everyday tools.</p></div>
    <div className="software-intro"><span className="software-live-dot" /> SELECTED PROJECTS <span className="software-intro-line" /> <span>DESIGN · DEVELOPMENT · DEPLOYMENT</span></div>
    <div className="software-grid">{projects.map((project,index)=><motion.article className={`software-card software-${project.accent}`} key={project.number} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.45,delay:index*.06}} whileHover={{y:-5}}>
      <div className="software-card-top"><span className="software-number">{project.number} / 04</span><span className="software-mark">{project.mark}</span></div>
      <div className="software-preview"><div className="software-preview-toolbar"><span><i/> PRODUCT UI CONCEPT</span><a href={project.url} target="_blank" rel="noreferrer">OPEN LIVE ↗</a></div><div className="software-mock-stage"><ProductPreview type={project.preview} name={project.name}/></div></div>
      <div className="software-card-copy"><span className="software-type">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p><div className="software-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><a className="software-link" href={project.url} target="_blank" rel="noreferrer">{project.action} <span>↗</span></a></div>
    </motion.article>)}</div>
    <div className="software-footnote"><span>✳</span><p>Interested in both sides of the process? I bring a combination of visual design thinking and hands-on software development.</p><a href="#contact">Let's discuss a project ↗</a></div>
  </AnimatedSection>;
}
