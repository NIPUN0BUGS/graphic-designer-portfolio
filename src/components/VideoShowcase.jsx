import { motion } from "motion/react";
import AnimatedSection from "./AnimatedSection.jsx";

// Add published CapCut share URLs here when supplied by the portfolio owner.
const videos = [];

export default function VideoShowcase() {
  return <AnimatedSection className="video-section section-wrap" id="video">
    <div className="section-heading">
      <div><div className="eyebrow"><span className="eyebrow-line" /> MOTION & STORYTELLING</div><h2>Video <span className="gradient-text">edits.</span></h2></div>
      <p>Short-form edits, social videos and visual storytelling. CapCut samples will be showcased here.</p>
    </div>
    {videos.length ? <div className="video-grid">{videos.map((video, i) => <motion.a key={video.url} href={video.url} target="_blank" rel="noreferrer" className="video-card" whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}><div className="video-thumb">{video.thumbnail && <img src={video.thumbnail} alt="" />}<span className="video-play">▶</span></div><h3>{video.title || "Video edit " + String(i+1).padStart(2,"0")}</h3><p>Watch on CapCut ↗</p></motion.a>)}</div> :
      <div className="video-empty"><div className="video-empty-icon">▶</div><div><strong>Video showcase is ready.</strong><p>Published CapCut links can be added here as playable portfolio previews.</p></div><span className="video-coming">CAPCUT · VIDEO PORTFOLIO</span></div>}
  </AnimatedSection>;
}