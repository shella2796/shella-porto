import { motion, useReducedMotion } from 'framer-motion';
import { projects } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

export default function Projects() {
  const reduced = useReducedMotion();
  return (
    <section id="projects" className="section" aria-label="Selected work">
      <div className="wrap">
        <SectionHeading number="01" label="Selected Work" title="COMPLEX PRODUCTS. CLEAR DELIVERY.">Working across people, priorities, and product requirements to keep digital delivery moving.</SectionHeading>
        <div className="featured-list">
          {projects.map((project) => (
            <Reveal key={project.id}>
              <article className={`featured-project ${project.id % 2 === 0 ? 'featured-reverse' : ''}`}>
                <div className="featured-visual">
                  <motion.div className="visual-inner" initial={reduced ? false : { scale: 1.03 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
                    {project.image ? <img src={project.image} alt={`${project.title} — existing illustrative product mockup`} loading="lazy" width="1024" height="1024" /> : <div className="visual-placeholder" role="img" aria-label="Remohires typographic placeholder; no product screenshot available"><span className="kicker">Recruitment & growth</span><span className="placeholder-name">remo<br />hires<span className="acid-dot">.</span></span><span className="placeholder-caption">PRODUCT DELIVERY / WEB</span></div>}
                  </motion.div>
                  <span className="visual-caption">{project.image ? 'Existing portfolio visual / illustrative mockup' : 'Typography study / image placeholder'}</span>
                </div>
                <div className="featured-copy">
                  <p className="kicker">{String(project.id).padStart(2, '0')} / {project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="featured-role">{project.role}</p>
                  <p className="project-context">{project.context}</p>
                  <p className="contribution-label">MY CONTRIBUTION <span aria-hidden="true">↗</span></p>
                  <p>{project.description}</p>
                  {project.scope && <details className="project-scope"><summary>Delivery scope <span aria-hidden="true">+</span></summary><p>{project.scope}</p></details>}
                  <ul className="project-tags" aria-label="Project areas">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
