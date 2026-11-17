import { useState } from "react";
import { motion } from "motion/react";
import AnimatedSection from "./AnimatedSection.jsx";
import MagneticLink from "./MagneticLink.jsx";

export default function Contact(){
  const [form,setForm] = useState({name:"",email:"",service:"Social media design",budget:"",details:""});
  const change = e => setForm(current => ({...current,[e.target.name]:e.target.value}));
  const submit = e => {
    e.preventDefault();
    const subject = encodeURIComponent("New portfolio inquiry — " + form.service);
    const body = encodeURIComponent("Name: "+form.name+"\nEmail: "+form.email+"\nService: "+form.service+"\nBudget: "+(form.budget || "Not specified")+"\n\nProject details:\n"+form.details);
    window.location.href = "mailto:nipunsanjulasamarakoon@gmail.com?subject="+subject+"&body="+body;
  };
  return <AnimatedSection className="contact-section section-wrap" id="contact">
    <motion.div className="contact-panel" whileInView={{borderColor:"rgba(75,216,242,.55)"}} viewport={{once:true}}>
      <div className="eyebrow"><span className="eyebrow-line"/> HAVE A PROJECT IN MIND?</div>
      <h2>Let's make<br/><span className="gradient-text">something great.</span></h2>
      <p>Tell me a little about your project. I'll be happy to discuss the details.</p>
      <form className="inquiry-form" onSubmit={submit}>
        <label>Your name<input name="name" value={form.name} onChange={change} placeholder="Name" required /></label>
        <label>Email address<input name="email" type="email" value={form.email} onChange={change} placeholder="you@example.com" required /></label>
        <label>What do you need?<select name="service" value={form.service} onChange={change}><option>Social media design</option><option>Branding and logo</option><option>Event artwork</option><option>Video editing</option><option>Other creative work</option></select></label>
        <label>Estimated budget <span className="optional-label">(optional)</span><input name="budget" value={form.budget} onChange={change} placeholder="e.g. LKR 25,000" /></label>
        <label className="inquiry-wide">Project details<textarea name="details" value={form.details} onChange={change} placeholder="Share your idea, deadline and any references..." rows="4" required /></label>
        <button className="button button-primary inquiry-submit" type="submit">Prepare email inquiry ↗</button>
      </form>
      <p className="inquiry-note">This opens your email app with the inquiry details ready to send.</p>
      <div className="contact-actions"><MagneticLink className="button button-secondary" href="tel:+94761011631">Call +94 76 1011 631</MagneticLink><MagneticLink className="button button-secondary" href="https://www.linkedin.com/in/nipun-samarakoon-bb812b203/" target="_blank" rel="noreferrer">LinkedIn ↗</MagneticLink><MagneticLink className="button button-secondary" href="https://github.com/NIPUN0BUGS">GitHub ↗</MagneticLink></div>
      <div className="contact-details"><a href="mailto:nipunsanjulasamarakoon@gmail.com">nipunsanjulasamarakoon@gmail.com</a><a href="tel:+94761011631">+94 76 1011 631</a></div>
      <div className="contact-foot"><span>BASED IN SRI LANKA</span><span>CREATIVE · PURPOSEFUL · DETAIL-DRIVEN</span></div>
    </motion.div>
  </AnimatedSection>;
}
