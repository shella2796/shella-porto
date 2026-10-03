import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '../data/portfolio';

export default function Home() {
  const reduced = useReducedMotion();
  const entrance = {
    hidden: { opacity: 0, y: reduced ? 0 : 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };
  return (
    <motion.section className="hero wrap" aria-labelledby="hero-title" initial={reduced ? false : 'hidden'} animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } } }}>
      <div className="hero-main">
        <motion.div className="hero-meta" variants={entrance}><p className="kicker">IT / DIGITAL PROJECT MANAGER</p><p className="kicker">INDONESIA · REMOTE<br />5+ YEARS IN PROJECT DELIVERY</p></motion.div>
        <h1 id="hero-title" className="hero-title">
          <motion.span variants={entrance}>MAKING</motion.span>
          <motion.span className="hero-emphasis" variants={entrance}>COMPLEX WORK</motion.span>
          <motion.span variants={entrance}>MOVE.</motion.span>
        </h1>
      </div>
      <motion.div className="hero-copy" variants={entrance}>
        <p>IT / Digital Project Manager working across software, SaaS, EdTech, and digital products. I bring structure to requirements, people, timelines, QA, documentation, and delivery.</p>
        
        <div className="hero-links"><a className="text-link" href="#projects">VIEW SELECTED WORK ↗</a><a className="text-link" href={profile.resume} download>VIEW RESUME ↗</a></div>
      </motion.div>
      <a className="scroll-tag" href="#projects">Scroll to explore ↓</a>
    </motion.section>
  );
}
