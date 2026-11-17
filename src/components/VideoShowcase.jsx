import { motion } from "motion/react";
import AnimatedSection from "./AnimatedSection.jsx";

// Add real, published CapCut share URLs and optional thumbnail paths here.
const videos = [];

export default function VideoShowcase() {
  return <AnimatedSection className="video-section section-wrap" id="video">
    <div className="section-heading">
      <div><div className="eyebrow"><span className="eyebrow-line" /> MOTION & STORYTELLING</div><h2>Video <span className="gradient-text">edits.</span></h2></div>
      <p>Short-form edits, social videos and visual storytelling. A dedicated space for selected video work.</p>
    </div>
    {videos.length ? <div className="video-grid">{videos.map((video, i) => <motion.a key={video.url} href={video.url} target="_blank" rel="noreferrer" className="video-card" whileHover={{ y: -5 }}><div className="video-thumb">{video.thumbnail && <img src={video.thumbnail} alt="" loading="lazy" decoding="async" />}<span className="video-play">▶</span></div><h3>{video.title || "Video edit " + String(i+1).padStart(2,"0")}</h3><p>Watch video ↗</p></motion.a>)}</div> :
      <div className="video-empty"><div className="video-empty-icon">▶</div><div><strong>Video portfolio space is ready.</strong><p>Published CapCut share links and optional thumbnail images are needed to display your actual edits here.</p><a href="mailto:nipunsanjulasamarakoon@gmail.com?subject=Video%20portfolio%20links">Send video links to add ↗</a></div><span className="video-coming">CAPCUT · VIDEO PORTFOLIO</span></div>}
  </AnimatedSection>;
}
