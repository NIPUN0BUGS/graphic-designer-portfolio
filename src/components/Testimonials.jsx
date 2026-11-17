import AnimatedSection from "./AnimatedSection.jsx";

export default function Testimonials() {
  return <AnimatedSection className="testimonials-section section-wrap" id="testimonials">
    <div className="section-heading">
      <div><div className="eyebrow"><span className="eyebrow-line" /> CLIENT EXPERIENCES</div><h2>Kind words <span className="gradient-text">matter.</span></h2></div>
      <p>Honest feedback from people I've worked with will be featured here.</p>
    </div>
    <div className="testimonial-empty">
      <span className="testimonial-quote">“</span>
      <div><strong>Real client feedback belongs here.</strong><p>Testimonials are kept genuine. This section is ready for approved client comments and names when you provide them.</p></div>
      <span className="testimonial-mark">CLIENT NOTES · 2020—2026</span>
    </div>
  </AnimatedSection>;
}
